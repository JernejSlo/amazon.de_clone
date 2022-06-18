import Checkout from "./Subtotal.css";
import {useNavigate} from "react-router-dom";
import CurrencyFormat from 'react-currency-format';

export default function Subtotal(props){
    const history = useNavigate();

    return(
        <div className="checkout__rightSubtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>

                        <p>
                            Subtotal ({props.items} items): <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox"/><span>{" "}</span><label>This order contains a gift</label>
                        </small>
                    </>

                )}
                decimalScale={2}
                value={props.price+5.99*props.items}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"€"}
            />



            <button onClick={e =>history('/payment')} className="subtotal__button">
                Proceed to Checkout
            </button>
        </div>
    )
}