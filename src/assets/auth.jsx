import React from 'react';
import { auth, provider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';
import Cookies from "universal-cookie";
import "../styles/auth.css";

const cookies = new Cookies();

export default function Auth(props) {
    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            cookies.set("auth-token", result.user.refreshToken, { path: '/', sameSite: 'Lax' });
            props.setIsAuth(true);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className='auth'>
            <p>Sign in with Google to continue</p>
            <button onClick={signInWithGoogle}>Sign in with Google</button>
        </div>
    );
}
