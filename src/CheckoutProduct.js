import "./CheckoutProduct.css"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {useStateValue} from "./StateProvider";
import {useState} from "react";

export default function CheckoutProduct(props) {

    const [state, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: props.id,

        })
    }


    const [trackquant, settrackquant] = useState({
        quantity: props.quantity
    })


    const addToBasket = () => {
        const val = trackquant.value + 1;

        settrackquant(prevState => {
            return {
                ...state,
                value: val
            }
        })
        console.log("track", trackquant)
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: props.id,
                title: props.title,
                image: props.image,
                price: props.price,
                rating: props.rating,
                quantity: trackquant.value,
                price2: trackquant.value * props.price,
                quantity3: trackquant.value,
            },
            quantity2: trackquant.value,
            items2: trackquant.value,
            id2: props.id,

        })
    }

    return (
        <div className="checkoutProduct">
            <input className="checkoutProduct__input" type="checkbox"/>
            <div className="checkoutProduct__underline">
                <img src={props.image} className="checkoutProduct__img"/>
                <div className="checkoutProduct__info">
                    <div className="checkoutProduct__flex">
                        <h2 className="checkoutProduct__title">{props.title}</h2>
                        <strong className="checkoutProduct__price">{"€" + props.price}</strong>

                    </div>
                    <small className="checkoutProduct__available">{props.available}</small>
                    <div className="checkoutProduct__buttons">
                        <label className="checkoutProduct__quantity">Qty: {" " + props.quantity}</label>
                        <button onClick={addToBasket} className="checkoutProduct__quantity1">
                            <svg className="w-6 h-6 checkoutProduct__dropdown" fill="none" stroke="currentColor"
                                 viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                            </svg>
                        </button>
                        <button className="checkoutProduct__quantity1">
                            <svg className="w-6 h-6 checkoutProduct__dropdown" fill="none" stroke="currentColor"
                                 viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M20 12H4"></path>
                            </svg>
                        </button>
                        <button onClick={removeFromBasket} className="checkoutProduct__link">Delete</button>
                        <small > + €5.99 shipping</small>
                    </div>
                </div>


            </div>
        </div>
    )
}