import "./ProductR.css"
import {useStateValue} from "./StateProvider";
import {useState} from "react";
import {Link, StaticRouter} from "react-router-dom";
import StarIcon from '@mui/icons-material/Star';

export default function ProductR(props) {

    const [state, dispatch] = useStateValue();

    const [info] = useState({
        image: props.image,
        title: props.title,
        price: props.price,
        description: props.description,
        rating: props.rating,
    })

    const [trackquant2, settrackquant2] = useState({
        value: 1
    })


    const addToBasket = () => {
        const val = trackquant2.value + 1;

        settrackquant2(prevState => {
            return {
                ...state,
                value: val
            }
        })
        console.log("track", trackquant2)
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: props.id,
                title: props.title,
                image: props.image,
                price: props.price,
                rating: props.rating,
                quantity: trackquant2.value,
                price2: trackquant2.value * props.price,
                quantity3: trackquant2.value,
            },
            quantity2: trackquant2.value,
            items2: trackquant2.value,
            id2: props.id,

        })
    }

    return (
        <div to={"/product"} state={{from: info}} className="productR">
            <img src={props.image} alt="" className="productR__image"/>
            <div className="productR__info">
                <Link Link to={"/product"} state={{from: info}} className="productR">
                    <h6 className="productR__title">{props.title.slice(0, 17) + "..."}</h6>
                </Link>

                <div className="productR__rating">
                    {Array(props.rating).fill()
                        .map((_, i) => (
                            <StarIcon className="star"/>
                        ))}
                </div>
                <span className="productR__price">{"€"}{props.price}</span>
                <div>
                    <button className="productR__button" onClick={addToBasket}>Add to Basket</button>
                </div>
            </div>
        </div>
    )
}