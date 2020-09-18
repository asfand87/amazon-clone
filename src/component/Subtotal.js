import React from 'react'
import "./Subtotal.css"
import { useStateValue } from "../StateProvider"
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from '../reducer';

function Subtotal() {
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className="subtotal">
        <CurrencyFormat
        // props for it 
        renderText={(value)=>(
            <>
                <p>
                    subtotal({basket.length}items): <strong>{value}</strong>
                </p>
                <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
            </>
        )}
        decimalScale={2}
        // this getBasketTotal function is in reducer and is called selector.
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeperator={true}
        prefix = {"$"}
        />

            <button>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
