import "./Payment.css"
import {useStateValue} from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import {Link} from "react-router-dom";
export default function Payment(){

    const [state, dispatch] = useStateValue();

    return(
        <div className="payment">

            <div className="payment__container">

                <h1>
                    Checkout(
                        <Link to="/checkout">{state.basket?.length} items</Link>
                        )
                </h1>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery adress</h3>
                    </div>
                    <div className="payment__details">
                        <p>{state.user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                    </div>

                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment__details">

                            {state.basket.map(item =>(
                                <div className="payment__item">
                                    <CheckoutProduct
                                        id={item.id}
                                        title={item.title}
                                        image={item.image}
                                        price={item.price*item.quantity}
                                        rating={item.rating}
                                        quantity={item.quantity}
                                    />
                                </div>
                            ))}


                    </div>
                </div>



                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment method</h3>
                    </div>
                    <div className="payment__details">

                    </div>


                </div>
            </div>
        </div>
    )
}