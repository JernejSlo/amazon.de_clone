import product from './Product.css'
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import {useStateValue} from "./StateProvider";
import {useState} from "react";
import {Link} from "react-router-dom";

export default function Product(props){

    const [state, dispatch] = useStateValue();

    const [trackquant, settrackquant] = useState({
        value: 1
    })


    const [info] = useState({
        image: props.image,
        title:props.title,
        price: props.price,
        description: props.description,
        rating: props.rating,
    })

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
                id: props.id,
                title: props.title,
                image: props.image,
                price: props.price,
                rating: props.rating,
                quantity: trackquant.value,
                price2: trackquant.value*props.price,
                quantity3: trackquant.value,
            },
            quantity2: trackquant.value,
            items2: trackquant.value,
            id2: props.id,

        })
    }

    return(
        <div className="product">
            <div className="product__info">
                <div className="product__titleHolder">
                    <Link to={"/product"} state={{from: info}}>
                    <p>{props.title}</p>
                    </Link>
                    <p className="product__price">
                        <small>€</small>
                        <strong>{props.price}</strong>
                    </p>
                    <div className="product__rating">
                        {Array(props.rating).fill()
                            .map((_,i) =>(
                                <StarIcon className="star"/>
                            ))}
                    </div>
                </div>
                <div className="product__images">
                    <img src={props.image} alt=""/>
                    <button className="product__button" onClick={addToBasket}>Add to basket</button>
                </div>
            </div>
        </div>
    )
}