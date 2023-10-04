import  {useState} from "react";
import { emailAuth } from "../firebase/config";

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
            await responce.user!.updateProfile({ displayName: altEmail })
            setError('');
            setPending(false);
            context.setUser(responce.user);
        } catch(err: any) {
            setError(err.message);
            setPending(false)
        }
    }
    return {error, setError, pending, signUp}
}