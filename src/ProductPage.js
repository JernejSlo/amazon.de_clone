import "./ProductPage.css"
import {useLocation} from "react-router-dom";
import StarIcon from '@mui/icons-material/Star';
import CurrencyFormat from "react-currency-format";
import {useStateValue} from "./StateProvider";
import {useState} from "react";

export default function ProductPage() {

    const [state, dispatch] = useStateValue();

    const [trackquant, settrackquant] = useState({
        value: 1
    })

        Date.prototype.addDays = function(days) {
        var date = new Date(this.valueOf());
        date.setDate(date.getDate() + days);
        return date;
    }
    const date = new Date()

    const addToBasket= () =>{
        const val = trackquant.value+1;

        settrackquant(prevState => {
            return{
                ...state,
                value: val
            }
        })
        console.log("track",trackquant)
        dispatch({
            type: 'ADD_TO_BASKET',
            item:{
                id: from.id,
                title: from.title,
                image: from.image,
                price: from.price,
                rating: from.rating,
                quantity: trackquant.value,
                price2: trackquant.value*from.price,
                quantity3: trackquant.value,
            },
            quantity2: trackquant.value,
            items2: trackquant.value,
            id2: from.id,

        })
    }

    const location = useLocation()
    const {from} = location.state
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    return (
        <div className="whole">
            <div className="productPage">
                {console.log(from)}
                <div className="productPage__image">
                    <div className="flex">
                        <div className="productPage__imageSelect">
                            <img src={from.image}/>
                        </div>

                        <img src={from.image}/>
                    </div>

                    <h5>Roll over image to zoom in</h5>
                </div>
                <div className="productPage__info">
                    <div className="productPage__title">
                        <h1>{from.title}</h1>
                        <div className="flex">
                            {Array(from.rating).fill()
                                .map((_, i) => (
                                    <StarIcon className="star"/>
                                ))}
                        </div>

                    </div>
                    <div className="productPage__price">

                        <CurrencyFormat
                            renderText={(value) => (
                                <>
                                    <strong className="strong">{value}</strong>
                                </>



                            )}
                            decimalScale={2}
                            value={from.price}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"€"}
                        />
                        <p>
                            Prices for items sold by FAKE CLONE Amazon include VAT. Depending on your delivery address, VAT may vary at Checkout. For other items, please see details.
                        </p>
                    </div>
                    <div className="productPage__description">

                    </div>

                </div>
                <div className="productPage__addToBasket">
                    <div className="productPage__addToBasketContents">
                        <div>
                            <CurrencyFormat
                                renderText={(value) => (
                                    <>
                                        <strong className="strong">{value}</strong>
                                    </>



                                )}
                                decimalScale={2}
                                value={from.price}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"€"}
                            />
                        </div>

                        <label> €5.99 delivery <strong>{monthNames[parseInt(String(new Date().addDays(7).getMonth()).padStart(2, '0'))].slice(0,3) + " " + String(date.addDays(7).getDate()).padStart(2, '0')}-{monthNames[parseInt(String(date.addDays(14).getMonth()).padStart(2, '0'))].slice(0,3) + " " + String(new Date().addDays(14).getDate()).padStart(2, '0')}</strong></label>
                        <button className="product__button radius" onClick={addToBasket}>Add to basket</button>
                    </div>
                </div>
            </div>
        </div>

    )

}