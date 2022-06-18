import "./Signin.css"
import {useState} from "react";
import {Link} from "react-router-dom";
import {auth} from "./Firebase";
import {useNavigate} from "react-router-dom";
import {
    signInWithEmailAndPassword
} from "firebase/auth"

export default function Signin() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useNavigate();


    const singIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((cred) => {
                console.log("user logged in", cred)
                if (cred) {
                    history("/")
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }


    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className="login__logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/0/07/Amazon-de-logo.jpg'
                />
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>

                    <button onClick={singIn} type='submit' className='login__signInButton'>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>
                <Link to='/register'>
                    <button className='login__registerButton'>Create your Amazon Account</button>
                </Link>
            </div>
        </div>
    )
}