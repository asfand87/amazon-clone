import React, { useEffect } from 'react';
import './App.css';
import Header from "./Header";
import Home from "./component/Home.js"
import Chekcout from "./component/Checkout.js";
import Login from "./component/Login";
import {useStateValue} from "./StateProvider";
import {auth} from "./firebase";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
function App() {
const [{user}, dispatch] = useStateValue();

// useEffect <<<<<<<<<<<<< very PowerFull.
/// Piece of code which runs based on a given condition.

// so this useEffect first argument it takes is function and the other is dependency.
// so basically this useEffect will run once when the app will be loaded but if we put 
// basket in [] and every single time the basket will change it will run then.
useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged((authUser)=>{
    if(authUser){ 
      dispatch({
        type: "SET_USER",
        user : authUser
      })
    }else{
      dispatch({
        type: "SET_USER",
        user : null,
      })
    }
  });
  return()=>{
    unsubscribe();
  }
}, []);


  


  return (
    <Router>
      <div className="App">
      <Switch>
        <Route path="/checkout">
         <Header />
          <Chekcout />
        </Route>
        <Route path="/login">
        <Header />
        <Login />
        </Route>
        <Route path="/">
        <Header /> 
        <Home />
        </Route>
      </Switch>
      
    </div>
    </Router>
    
  );
}

export default App;
