import React,{useContext} from 'react';
import '../styles/Login.css'
import { Button } from '@material-ui/core';
import {auth , provider} from '../firebase';
import {Context as UserContext} from "../context/UserContext";

const Login = () => {
    const {signInUser}=useContext(UserContext);
    const signIn=()=>{
        auth.signInWithPopup(provider)
        .then(res=>{

            signInUser(res.user);
        })
        .catch(e=>{
            alert(e.message);
        })
    }
    return (
        <div className="login">
            <div className="login__container">
                <img 
                    src="https://logodownload.org/wp-content/uploads/2015/04/whatsapp-logo-1-1.png"
                    alt=""
                />
                <div className="login__text">
                    <h1>Sign In to WhatsApp</h1>
                </div>
                <Button type="submit" onClick={signIn}>
                    Sign in With Google
                </Button>
            </div>
        </div>
    );
}

export default Login;
