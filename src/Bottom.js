import "./Bottom.css"
import AmazonGadget from "./AmazonGadget";
import Product from "./Product";

export default function Bottom() {

    const scroll = () => {
        window.scrollTo(0, 0)
    }

    return (
        <div className="bottom">
            <div className="bottom__products">
                <div className="bottom__devices">
                    <h1 className="accent-blue-400">Amazon devices for you</h1>
                    <div className="flexy">
                        <AmazonGadget
                            id={3333}
                            image="https://www.bigbang.si/upload/catalog/product/918083/3803ac0f19d968b47cbefd78f11633ca5612925f2a2d04a4a6_6076af8a04284.jpeg"
                            rating={5}
                            title="Amazon Echo Dot 4"
                            price={84.99}/>
                        <AmazonGadget
                            id={3334}
                            image="https://www.podean.com/wp-content/uploads/2019/09/Echo-Sub-270x300.jpg"
                            rating={5}
                            title="Echo Sub - Powerful subwoofer for your Echo"
                            price={129.99}/>
                        <AmazonGadget
                            id={3335}
                            image="https://m.media-amazon.com/images/I/51Kpioe7zVL._SY450_.jpg"
                            rating={4}
                            title="The Ring Chime - White"
                            price={35.99}/>
                        <AmazonGadget
                            id={3336}
                            image="https://m.media-amazon.com/images/I/61RAQiUYTZL._AC_SX679_.jpg"
                            rating={5}
                            title="Fire TV Cube | Hands free with Alexa, 4K Ultra HD streaming media player"
                            price={119.99}/>
                        <AmazonGadget
                            id={3337}
                            image="https://m.media-amazon.com/images/I/71g8a2BcgRL._AC_SX679_.jpg"
                            rating={4}
                            title="Fire TV Stick 4K Max streaming device, Wi-Fi 6, Alexa Voice Remote (includes TV controls)"
                            price={64.99}/>
                        <AmazonGadget
                            id={3338}
                            image="https://m.media-amazon.com/images/I/91Z0cGhaeCL._AC_SX679_.jpg"
                            rating={4}
                            title="Echo Studio - Smart high fidelity speaker with 3D audio and Alexa"
                            price={199.99}/>
                        <AmazonGadget
                            id={3339}
                            image="https://m.media-amazon.com/images/I/51IMJh+boQL._AC_SX679_.jpg"
                            rating={3}
                            title="Echo Show 10 | HD smart display with motion and Alexa, Charcoal"
                            price={249.99}/>
                    </div>
                </div>
            </div>

            <div onClick={scroll} className="bottom__backToTop">
                Back to Top
            </div>


            <div className="bottom__links">

                <div className="bottom__knowUs">
                    <div>
                        <h1>Get to Know Us</h1>
                        <li><a>Carrers</a></li>
                        <li><a>Press Releases</a>
                        </li>
                        <li><a>About us</a></li>
                        <li><a>Blog</a></li>
                        <li><a>FAKE Amazon Logistikblog</a>
                        </li>
                        <li><a>Imprint</a></li>
                        <li><a>FAKE Amazon Science</a>
                        </li>
                    </div>
                    <div>
                        <h1>Make Money with Us</h1>
                        <li><a>Sell on FAKE Amazon</a></li>
                        <li><a>Sell on FAKE Amazon Business</a>
                        </li>
                        <li><a>Sell on FAKE Amazon Handmade</a></li>
                        <li><a>Associates Programme</a></li>
                        <li><a>Fulfilment by Amazon</a></li>
                        <li><a>Seller Fulfilled Prime</a>
                        </li>
                        <li><a>Advertise Your Products</a></li>
                        <li><a>Independently Publish with Us</a>
                        </li>
                        <li><a>FAKE Amazon Pay</a></li>
                        <li><a>Host an Amazon Hub</a>
                        </li>
                    </div>
                    <div>
                        <h1>FAKE Amazon Payment Methods</h1>
                        <li><a>FAKE Amazon.de Visa Card</a></li>
                        <li><a>Shop with points</a></li>
                        <li><a>Credit Card</a></li>
                        <li><a>Gift Cards</a></li>
                        <li><a>Payment by Invoice</a>
                        </li>
                        <li><a>Direct Debit</a></li>
                        <li><a>FAKE Amazon Currency Converter</a>
                        </li>
                        <li><a>Top Up Your Account</a></li>
                        <li><a>Top Up Your Account in Store</a>
                        </li>
                    </div>
                    <div>
                        <h1>Let Us Help You</h1>
                        <li><a>COVID-19 and FAKE Amazon</a>
                        </li>
                        <li><a>Track Packages or View Orders</a>
                        </li>
                        <li><a>Delivery Rates & Policies</a></li>
                        <li><a>Returns & Replacements</a></li>
                        <li><a>Recycling (including disposal of electrical and electronic equipment)</a>
                        </li>
                        <li><a>Manage Your Content and Devices</a></li>
                        <li><a>FAKE Amazon Mobile App</a></li>
                        <li><a>FAKE Amazon Assistant</a></li>
                        <li><a>Customer Service</a></li>

                    </div>

                </div>
                <div className="bottom__language">
                    <div className="bottom__languageAnd">
                        <div className="logodiv">
                            <div
                                className="logo"/>


                            <div className="bottom__lengselect">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 bottom__image" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
                                </svg>
                                English
                            </span>
                                <span>
                                <img className="bottom__image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/2560px-Flag_of_Germany.svg.png"/>
                                Germany
                                </span>
                            </div>
                        </div>


                    </div>
                </div>
                <div className="bottom__more">
                    <div className="bottom__widthMore">
                        <div className="bottom__two">
                            <h1>
                                FAKE Amazon Advertising
                            </h1>
                            <p>
                                Find, attract, and
                                engage customers
                            </p>
                            <h1>
                                IMDb
                            </h1>
                            <p>
                                Movies, TV
                                & Celebrities
                            </p>
                        </div>
                        <div className="bottom__two">
                            <h1>
                                FAKE Amazon Music
                            </h1>
                            <p>
                                Stream millions
                                of songs

                            </p>
                            <h1>
                                Kindle Direct Publishing
                            </h1>
                            <p>
                                Indie Digital & Print Publishing
                                Made Easy
                            </p>
                        </div>
                        <div className="bottom__two">
                            <h1>
                                AbeBooks
                            </h1>
                            <p>
                                Books, art
                                & collectables
                            </p>
                            <h1>
                                Shopbop
                            </h1>
                            <p>
                                Designer
                                Fashion Brands
                            </p>
                        </div>
                        <div className="bottom__two">
                            <h1>
                                FAKE Amazon Web Services
                            </h1>
                            <p>
                                Scalable Cloud
                                Computing Services
                            </p>
                            <h1>
                                Amazon Warehouse
                            </h1>
                            <p>
                                Deep Discounts
                                Open-Box Products
                            </p>
                        </div>
                        <div className="bottom__two">
                            <h1>
                                Audible
                            </h1>
                            <p>
                                Download Audiobooks
                            </p>
                            <h1>
                                ZVAB
                            </h1>
                            <p>
                                Centralized Directory
                                of Antiquarian Books
                            </p>
                        </div>
                        <div className="bottom__two">
                            <h1>
                                Book Depository
                            </h1>
                            <p>
                                Books With Free
                                Delivery Worldwide

                            </p>
                            <h1>
                                 FAKE Amazon Business
                            </h1>
                            <p>
                                Pay by Invoice. PO Numbers.
                                For Business.
                            </p>
                        </div>
                    </div>
                    <div className="bottom__extra">
                        <span>Conditions of Use & Sale </span>
                        <span>Privacy Notice </span>
                        <span>Imprint</span>
                        <span>Cookies Notice </span>
                        <span>Interest-Based Ads Notice</span>
                        <span>2022-2022, FAKE CLONE AMAZON, Inc. or its affiliates </span>
                    </div>
                </div>
            </div>
        </div>
    )


}