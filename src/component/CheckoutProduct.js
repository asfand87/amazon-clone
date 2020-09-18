import React from 'react'
import "./CheckoutProduct.css";
import {useStateValue} from "../StateProvider";

function CheckoutProduct({id, title, price, image, rating}) {
    const [{basket}, dispatch] = useStateValue();
    
    const removeFromBasket = () => {
        // remove the item from the basket
        dispatch({
            type: "Remove_From_Basket",
            id: id,
        })
    }

    return (
        <div class="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt=""></img>

            <div className="checkoutProduct__info">
            <p className="checkoutProduct__title">{title}</p>
            <p className="checkoutProduct__price">
                <small>£</small>
                <strong>{price}</strong>
            </p>

            <div className="checkoutProduct__rating">
                {
                    Array(rating).fill().map(function(){
                        return <p>⭐</p>
                    })
                }
            </div>
                
                <button onClick={removeFromBasket}>Remove from Basket</button>

            </div>

        </div>
        

    )
}

export default CheckoutProduct
