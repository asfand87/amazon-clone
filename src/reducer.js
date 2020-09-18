


export const initialState = {
    basket : [],
    user : [],
}

// this is selector which we wil use for subtotal.
// so the following function in reduce says that add the price to the amount in a basket 
// and amount can start from 0.

export const getBasketTotal = (basket) => 
  basket?.reduce((amount, item) => item.price + amount, 0);


function reducer(state, action){
    
switch(action.type){
    case "SET_USER":
        return {
            ...state,
            user : action.user,
        }

    
    case "Add_To_Basket":
        return {
            ...state,
            basket : [...state.basket, action.item],
        }
    
    case  "Remove_From_Basket":
        // login for removing item from basket ... whatever the currentbasket is.
        let newBasket = [...state.basket];
        // so we are looking for the index which has basketid == actin id.
        const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
        
        if(index >= 0 ){
            // item exists in basket, remove it.
            newBasket.splice(index,1);
        }else{
            console.warn(
                `Cant remove product (id: ${action.id}) as its not in basket!`
              )
        }
        return {
            ...state ,
             basket: newBasket
            }

            

    default:
        return state;
}

}

export default reducer;