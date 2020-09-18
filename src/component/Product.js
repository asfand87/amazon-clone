import React from 'react';
import "./Product.css";
import {useStateValue} from "../StateProvider";
// fetching props in below function
function Product({id, title, image, price, rating}) {
    const [{basket}, dispatch] = useStateValue();

    function addToBasket(){
        dispatch({
            type: "Add_To_Basket",
            item : {
                id : id, 
                title : title, 
                image : image,
                price : price, 
                rating : rating,
            }
        })
    }


    return (
        <div className="product">
        <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
        <small>&</small>
        <strong>£{price}</strong>
        </p>
        <div className="product__rating">
                {/* so basically following is saying that crearte an array of of 5 as rating is set to 
                5 in home js where we are sending over the props, then fill it with empty values and we don't 
                care what the values are and we arey denoting it by _ or we can even make it
                unanimous function .map(() =><span>⭐</span>) */}
            {
                Array(rating).fill(0).map((_) => <p>⭐</p> )
            }
        </div>
        </div>
        
        <img src={image} alt=""/>
        <button onClick={addToBasket}>Add to Basket</button>
        
        </div>
    )
}

export default Product;
