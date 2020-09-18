import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import {auth} from "../firebase";
import "./Login.css";

function Login() {
    // so history is the hook from link which keeps record of the user sessions in a way.
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = event =>{
        event.preventDefault();
        // do login stuff which is logic.
        // so we need email and passord here so we add value and use state value to get email 
        // and password.
        auth.signInWithEmailAndPassword(email, password)
        // so once we have this email and password then we need some sort of authentication.
        .then((auth)=>{
            // loggin in, redirect to homepage ....
            history.push("/");
        })
        // other wise catch the error and display the message
        .catch(e=>alert(e.message));
    }

    const register = event=>{
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
        
        .then((auth) =>{
            // so if every thing goes well. then create auser and redirect to homepage.
            history.push("/");
        })
        // but if goes wrong then catch it and alert on the screen.
        .catch((e)=>alert(e.message));
    }




    return (
        <div className="login">
            <Link to="/">
                <img 
                className="login__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" 
                alt=""
                />
            </Link>
            <div className="login__container">
                <h1>Sign in</h1>
                <form action="">
                    <h5>E-mail</h5>
                    <input type="email" value={email} onChange = {event=>setEmail(event.target.value)}/>
                    <h5>password</h5>
                    <input type="password" value={password} onChange = {event=>setPassword(event.target.value)}/>
                    <button onClick = {login} type="submit" className="login__signInButton">Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>
                <button onClick={register} className="login__registerButton">Create Your Amazon Account</button>

            </div>
        </div>
    )
}

export default Login
