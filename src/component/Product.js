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
