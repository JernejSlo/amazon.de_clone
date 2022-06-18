import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import "./Signin.css"
import { auth } from "./Firebase.js"
import {getAuth,
    createUserWithEmailAndPassword
} from "firebase/auth"

export default function Register(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const history = useNavigate();


    const match1 = (e) =>{
        setPassword(e.target.value)
    }
    const match2 = (e) =>{
        setPassword2(e.target.value)
    }

    const register = (e) => {
      e.preventDefault();
      console.log(email)
        if (password === password2){
            const displayName = name;
        createUserWithEmailAndPassword(auth,email,password)
            .then((cred) => {
                console.log("user created",cred)
                if (cred){
                    history("/")
                }
                })
            .catch((err) => {
                console.log(err)
            })}
        else{
            document.getElementById("span").style.opacity = "100%"
        }
    }

    return(
        <div className="login">


            <Link to='/'>
            <img
            className="login__logo"
            alt=""
            src='https://upload.wikimedia.org/wikipedia/commons/0/07/Amazon-de-logo.jpg'
            />
            </Link>

            <div className='login__container'>
            <h1>Register</h1>

            <form>
            <h5>Your full name</h5>
             <input type='text' value={name} onChange={e => setName(e.target.value)} />

            <h5>E-mail</h5>
            <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

            <h5>Password</h5>
            <input type='password' value={password} onChange={match1} />

            <h5>Re-enter password</h5>
            <input type='password' value={password2} onChange={match2} /><span className="login__span" id="span">Passwords do not match</span>

            <button id="registerbtn" onClick={register} type='submit' className='login__signInButton'>Register</button>
            </form>

            <p>
            By registering you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
            see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
            </p>
            <Link to='/link'>
            <button className='login__registerButton'>Already a user? Click here</button>
            </Link>
            </div>
            </div>
            )
        }