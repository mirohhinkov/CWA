import  {useState} from "react";
import {appFirestore, emailAuth} from "../firebase/config";
import {mapGoogleUserToUser} from "../utils/utils";
import firebase from "firebase";
import User from '../model/user';


export const useSignUp = () => {
    const [error, setError] = useState('');
    const [pending, setPending] = useState(false);

    const signUp = async (email: string, password: string, altEmail: string, context: any) => {
        setError('');
        setPending(true)

        try {
            //sign up user
            const responce = await emailAuth.createUserWithEmailAndPassword(email, password);
            if (!responce) throw new Error('Could not make sign up');
            const {user} = responce;
            await responce.user!.updateProfile({ displayName: altEmail })
            setError('');
            setPending(false);

            if (user) {
                const localUser: User = mapGoogleUserToUser(user);
                await appFirestore.collection('users').doc().set(localUser);
                context.setUser(localUser);
            }
        } catch(err: any) {
            setError(err.message);
            setPending(false)
        }
    }
    return {error, setError, pending, signUp}
}