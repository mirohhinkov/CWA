import {useState, useEffect} from "react";
import {appFirestore, emailAuth} from "../firebase/config";
import {IContext} from "../model/types/IContext";
import User from "../model/user";

export const useLogin = () => {
    const [error, setError] = useState('');
    const [pending, setPending] = useState(false);
    const [isCancelled, setIsCancelled] = useState(false);

    const login = async (email: string, password: string, context: IContext) => {
        setError('');
        setPending(true)

        try {
            const responce = await emailAuth.signInWithEmailAndPassword(email, password);
            if (!responce) throw new Error('Could not make sign up');
            setError('');
            setPending(false);
            appFirestore
                .collection('users').where('email', '==', responce.user!.email).get()
                .then((snapshot) => {
                    context.setUser(snapshot.docs[0].data() as User);
                })
        } catch (err: any) {
            setError(err.message);
            setPending(false)
        }
    }


    return { error, setError, pending, login }
}