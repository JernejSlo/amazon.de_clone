import './App.css';
import Header from "../../untitled9/src/Header.js";
import Home from "./Home.js"
import Difficult from "./Difficult"
import Checkout from "./Checkout";
import Register from "./Register"
import Signin from "./Signin";
import Orders from "./Orders";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Switch} from "@mui/material";
import {useEffect} from "react";
import {auth} from "./Firebase"
import {useStateValue} from "./StateProvider";
import Payment from "./Payment";
import ProductPage from "./ProductPage";
import Search from "./Search"
import Bottom from "./Bottom";

function App() {

    const [state, dispatch] = useStateValue();

    useEffect(() => {
        auth.onAuthStateChanged(authUser => {
            console.log("the user is >>>", authUser)

            if (authUser) {
                dispatch({
                    type: 'SET_USER',
                    user: authUser,
                })
            } else {
                dispatch({
                    type: 'SET_USER',
                    user: null,
                })
            }
        })
    }, [])

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<><Header/><Bottom/></>}>
                    <Route index element={<Home/>}/>
                    <Route path="checkout" element={<Checkout/>}/>
                    <Route path="register" element={<Register/>}/>
                    <Route path="sign-in" element={<Signin/>}/>
                    <Route path="orders" element={<Orders/>}/>
                    <Route path="payment" element={<Payment/>}/>
                    <Route path="product" element={<ProductPage/>}/>
                    <Route path="search" element={<Search />}/>
                </Route>
            </Routes>
        </BrowserRouter>

    );
}

export default App;
