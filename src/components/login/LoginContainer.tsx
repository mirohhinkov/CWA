import {LeftPaneHeader} from "../styling/LeftPaneHeader";
import React, {SyntheticEvent, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {useLogin} from "../../hooks/useLogin";

export const LoginContainer:React.FC<{ context: any }> = ( {context} ) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [redirect, setRedirect] = useState(false)
    const { error, setError, pending, login } = useLogin();
    const navigate = useNavigate()
    const submitHandler = async (event: SyntheticEvent) => {
        event.preventDefault()
        const user = await login(email, password, context);
        context.setUser(user);
        if (!error) {
            navigate('/news')
        }
    }

    const googleHandler = ()=> {
        console.log('Google login')
    }

    const facebookHandler = ()=> {
        console.log('Facebook login')
    }


    return (
        <>
            <LeftPaneHeader>Login</LeftPaneHeader>
            <section id="login">
                <div className="login-container">
                    <h1>Login</h1>
                    <form id="login-form" onSubmit={submitHandler}>
                        <label>
                            <span>Your email: </span>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email" required
                                onChange={(event) => setEmail(event.target.value)}
                                value={email}
                            />
                        </label>
                        <label>
                            <span>Your password:</span>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                required
                                onChange={(event) => setPassword(event.target.value)}
                                value={password}
                            />
                        </label>
                        {!pending && <button type="submit">Login</button>}
                        {pending && <button disabled>Loggin in...</button>}
                        {error && <p>{error}</p>}
                    </form>
                    <br/>
                    <Link to="/signup">Do not have an account?</Link>
                    <br/>
                    <div className="social-login">
                        <button className="google-btn" onClick={googleHandler}>Login with Google
                        </button>
                        <button className="facebook-btn" onClick={facebookHandler}>Login with Facebook
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
};