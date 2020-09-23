

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





export const useStateValue = ()=>useContext(StateContext);


