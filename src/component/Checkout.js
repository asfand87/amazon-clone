import React from 'react'
import {useStateValue} from "../StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";
import Subtotal from "./Subtotal.js"
 const Checkout = () => {
    const [{basket}] = useStateValue();
    return <div className="checkout">

    <div className="checkout__left">
        <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt=""></img>
       {/* have to use ternary operator to make this work */}
       {basket?.length === 0 ?(
           <div>
           <h2>your Shopping Basket is empty</h2>
           <p>You Have no items in your basket, To buy one click on "Add to basket" next to the item</p>
           </div>
           ):
           (
               <div>
               <h2 className="checkout__title">Your Shopping Basket</h2>

              {/* list all Products */}
               {
                   basket.map(item=>(
                    <CheckoutProduct 
                        id =    {item.id}
                        title = {item.title}
                        image =  {item.image}
                        price = {item.price}
                        rating = {item.rating} 
                    />
                   ))}
               
               </div>
               )}
            </div>
            {basket.length >0 &&(
                <div className="checkout__right">
                    <Subtotal />
                </div>
            )}
    </div>
   
}

export default Checkout;


