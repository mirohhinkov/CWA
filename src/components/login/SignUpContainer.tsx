import {LeftPaneHeader} from "../styling/LeftPaneHeader";
import React, {SyntheticEvent, useEffect, useState} from "react";
import {Navigate, useNavigate} from 'react-router-dom';
import { useSignUp } from "../../hooks/useSignup";

export const SignUpContainer:React.FC<{ context: any }> = ( {context}) => {
    const [isCancelled, setIsCancelled] = useState(false);
    const [email, setEmail] = useState('')
    const [altEmail, setAltEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    const { error, setError, pending, signUp } = useSignUp();
    const navigate = useNavigate()

    const submitHandler = async (event: SyntheticEvent)=> {
        event.preventDefault()
        if (password !== repeatPassword) {
            if (isCancelled) setError('Passwords do not match')
            return
        }

        if ((email.split('@')[1] !== 'solent.ac.uk') && isCancelled)  {
            setError('The system is designed for Solent university community')
            return
        }
        await signUp(email, password, altEmail, context)

        if (!error && isCancelled) {

            navigate('/news')
        }
    }

    // setting cleanup, the function will run on component unmount stage
    // and will prevent re-rendaring if the component is closed
    // because these are async functions and if somebody go to another page
    // before finishing it will cause an error.

    useEffect(() => {
        return () => setIsCancelled(true);
    }, []);


    return (
        <>
            <LeftPaneHeader>Login</LeftPaneHeader>
            <section id="login">
                <div className="login-container">
                    <h1>Sign Up</h1>
                    <form id="login-form" onSubmit={submitHandler}>
                        <label>
                            <span>Your academic email: </span>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email" required
                                onChange={(event) => setEmail(event.target.value)}
                                value={email}
                            />
                        </label>
                        <label>
                            <span>Alternative email (used for Google or Facebook login): </span>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email" required
                                onChange={(event) => setAltEmail(event.target.value)}
                                value={altEmail}
                            />
                        </label>
                        <label>
                            <span>Password:</span>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                required
                                onChange={(event) => setPassword(event.target.value)}
                                value={password}
                            />
                        </label>
                        <label>
                            <span>Repeat password:</span>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                required
                                onChange={(event) => setRepeatPassword(event.target.value)}
                                value={repeatPassword}
                            />
                        </label>
                        {!pending && <button type="submit">Send Request</button>}
                        {pending && <button disabled>Signing up...</button>}
                        {error && <p>{error}</p>}
                    </form>
                    <br/>
                    <p>It takes up to 24 hours to approve the request</p>
                </div>

            </section>
        </>
    )
};