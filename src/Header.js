import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import MenuIcon from '@mui/icons-material/Menu';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import {Outlet, Link} from "react-router-dom";
import {auth} from "./Firebase"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useStateValue} from "./StateProvider";
import {useState} from "react";


export default function Header() {


    const [info, setInfo] = useState({
        text: ""
    })
    const [{basket, user}, dispatch] = useStateValue();
    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }

    function setChange(){
        console.log(document.getElementById("searchBar").value)
        setInfo(prevState => {
            return {
                ...prevState,
                text: document.getElementById("searchBar").value

            }
        })
    }

    function show(e) {
        e.preventDefault();
        if (document.getElementsByClassName("header__lowerBtn")[0].style.display !== "none") {
            for (let i = 0; i < document.getElementsByClassName("header__lowerBtn").length; i++) {
                document.getElementsByClassName("header__lowerBtn")[i].style.display = "none"
            }
        } else {
            for (let i = 0; i < document.getElementsByClassName("header__lowerBtn").length; i++) {
                document.getElementsByClassName("header__lowerBtn")[i].style.display = "flex"
            }
        }

    }


    return (
        <div className="header">
            <div className="sticky">
                <div className="header__upper">
                    {/* Logo */}
                    <Link to="/">
                        <img className="header__logo"
                             src="amazon.de.png"/>
                    </Link>

                    <div className="header__navCountry">
                        <FmdGoodIcon/>
                        <div className="header__optionCountry">
                    <span className="header__optionOneCountry">
                        {"Deliver to"}
                    </span>
                            <span className="header__optionTwoCountry">
                        {user ? (user.email.slice(0, 10)) + (user.email.length > 9 ? "..." : "") : "Slovenia"}
                    </span>
                        </div>
                    </div>
                    <div className="header__search">
                        <input onChange={setChange} type="text" id="searchBar" className="header__searchBar"/>
                        <Link to="/search" state={{from: info}}>
                            <svg className="w-6 h-6 header__searchIcon" fill="none" stroke="currentColor"
                                 viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                        </Link>

                    </div>

                    <div className="header__nav">
                        <Link to={!user && "/sign-in"}>
                            <div onClick={handleAuthentication} className="header__option">
                            <span className="header__optionOne">
                                {"Hello "}{user ? (user.email.slice(0, 10)) + (user.email.length > 9 ? "..." : "") : "Guest"}
                            </span>
                                <span className="header__optionTwo">
                                {user ? "Sign Out" : "Sign in"}
                            </span>
                            </div>

                        </Link>

                        <Link to="/orders" className="header__option">
                    <span className="header__optionOne">
                        Returns
                    </span>
                            <span className="header__optionTwo">
                        & Orders
                    </span>
                        </Link>

                        <Link to="/prime" className="header__option">
                    <span className="header__optionOne">
                        Your
                    </span>
                            <span className="header__optionTwo">
                        Prime
                    </span>
                        </Link>

                        <Link to="/checkout" className="header__basket">
                            <ShoppingCartIcon/>
                            <span className="header__optionTwo header__basketCount">
                        {basket?.length}
                    </span>
                        </Link>
                    </div>
                </div>


                <div className="header__lower">
                    <button className="header__lowerBtn1" onClick={show}>
                        <MenuIcon className="icon"/>
                        All
                    </button>
                    <button className="header__lowerBtn">
                        Home improvement
                    </button>
                    <button className="header__lowerBtn">
                        Gift Ideas
                    </button>
                    <button className="header__lowerBtn">
                        Buy Again
                    </button>
                    <button className="header__lowerBtn">
                        Vouchers
                    </button>
                    <button className="header__lowerBtn">
                        Drugstore & Body Care
                    </button>
                    <button className="header__lowerBtn">
                        Home & Kitchen
                    </button>
                    <button id="btnlast9" className="header__lowerBtn">
                        Toys & Games
                    </button>
                    <button id="btnlast8" className="header__lowerBtn">
                        Amazon Basics
                    </button>
                    <button id="btnlast7" className="header__lowerBtn">
                        Gift Cards
                    </button>
                    <button id="btnlast6" className="header__lowerBtn">
                        Shopper Toolkit
                    </button>
                    <button id="btnlast5" className="header__lowerBtn">
                        Beauty & Personal Care
                    </button>
                    <button id="btnlast4" className="header__lowerBtn">
                        Computers
                    </button>
                    <button id="btnlast3" className="header__lowerBtn">
                        Pet Supplies
                    </button>
                    <button id="btnlast2" className="header__lowerBtn">
                        Sports & Outdoors
                    </button>
                    <button id="btnlast" className="header__lowerBtn">
                        Books
                    </button>

                </div>
            </div>

            <Outlet/>
        </div>
    )
}