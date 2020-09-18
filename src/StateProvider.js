// set up data layer
// we need this to track the basket

import React, { createContext, useContext, useReducer } from "react";


// this is data layer
export const StateContext = createContext();

// build a provider 
// so {reducer, intialState and children are the props passed from StateProvier in index.js}
export const StateProvider= ({reducer, initialState, children})=>(
<StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
</StateContext.Provider>
);
 
//  can also be written as following
// const StateProvider = function({reducer, initialState, children}){
//     <StateContext.Provider value={useReducer(reducer, initialState)}>
//     {children}
//     </StateContext.Provider>
// }



// export const useStateValue =function(StateContext){
//     return StateContext;
// }

export const useStateValue = ()=>useContext(StateContext);


// after making this go to index.js and add stuff there.
