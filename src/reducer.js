


export const initialState = {
    basket : [],
    user : [],
}


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
        let newBasket = [...state.basket];
        const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
        
        if(index >= 0 ){
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