import {useState, useEffect} from "react";
import {emailAuth} from "../firebase/config";

export const useLogin = () => {
    const [error, setError] = useState('');
    const [pending, setPending] = useState(false);
    const [isCancelled, setIsCancelled] = useState(false);

    const login = async (email: string, password: string, context: any) => {
        setError('');
        setPending(true)

        try {
            const responce = await emailAuth.signInWithEmailAndPassword(email, password);
            if (!responce) throw new Error('Could not make sign up');
            console.log(responce.user)

            setError('');
            setPending(false);

            return  responce.user;
        } catch (err: any) {
            setError(err.message);
            setPending(false)
            return null
        }
    }


    return { error, setError, pending, login }
}