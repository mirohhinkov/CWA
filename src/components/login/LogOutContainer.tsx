import {LeftPaneHeader} from "../styling/LeftPaneHeader";
import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import {emailAuth} from "../../firebase/config";

    export const LogOutContainer:React.FC<{ context: any }> = ( {context}) => {
        const [isCancelled, setIsCancelled] = useState(false);
        const [pending, setPending] = useState(false);
        const [error, setError] = useState('');
        const navigate = useNavigate()

        const logoutHandler = async () => {
            setPending(true);
            try {
                await emailAuth.signOut();
            } catch (err: any) {
                setError(err.message)
            }

            if (!error && isCancelled) {
                context.setUser(null);
                navigate('/news')

            }

            if (isCancelled) setPending(false);
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
                <LeftPaneHeader>Log Out</LeftPaneHeader>
                <section id="logout">
                    <div className="login-container">
                        <h2>Are you sure, you want to logout</h2>
                        {!pending && <button className="clickable" onClick={logoutHandler}>Log Out</button>}
                        {pending && <button className="clickable"  disabled>Signing out...</button>}
                        {error && <p>{error}</p>}
                        <br/>
                    </div>

                </section>
            </>
        )
    };

