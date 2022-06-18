import Header from "./Header";
import Home from "./Home";
import checkout from "./Checkout.css"
import ProductR from "./ProductR.js";
import Subtotal from "./Subtotal.js";
import { Outlet, Link } from "react-router-dom";
import Product from "./Product";
import {getBasketLegth, getBasketTotal} from "./Reducer";
import {useStateValue} from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct"

export default function Checkout(){

    const [state, dispatch] = useStateValue();

    return(
        <div className="checkout">
            <div className="checkout__left">

                <div className="checkout__leftBorder">
                    <h2 className="checkout__title">Shopping Basket</h2>
                        <h3 className="checkout__title2">No items selected</h3>
                        <small className="checkout__small">Price</small>
                </div>
                {state.basket.map(item => (
                    <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        image={item.image}
                        quantity={item.quantity}
                    />
                ))}

            </div>



            <div className="checkout__right">
                <Subtotal items={getBasketLegth(state.basket)} price={getBasketTotal(state.basket)} />
                <div className="checkout__recomended">
                    <h5 className="checkout__explore">Explore more items</h5>
                    <ProductR id={1} image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg" rating={5} title="The lean startup" price={19.99} description="Book on startups"/>

                    <ProductR id={2} image="https://m.media-amazon.com/images/I/41jXfdQnvTL._AC_SY230_.jpg" rating={4}title="Microsoft family" price={50.99}/>
                    <ProductR id={3} image="https://m.media-amazon.com/images/I/61asqvQXjpL._AC_SX679_.jpg" rating={5} title="Anker Cable Management, Magnetic Cable Holder"
                             price={12.99}/>
                    <ProductR id={4} image="https://m.media-amazon.com/images/I/519KIlHA2wL._AC_SY741_.jpg" rating={5} title="Apple iPhone XR, 64GB, Black (refurbished)" price={356.50} />
                </div>
            </div>

            <Outlet/>
        </div>
    )
}