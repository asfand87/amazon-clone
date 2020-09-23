import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";



function Header(){
    const [ {basket, user}, dispatch ] = useStateValue();
    
    
      // auth function to signout.
       const handleAuthentication = () => {
           if(user){
               auth.signOut();
           }
       }
       console.log({user});
       
    return(
        
        
        <nav className = "header">
        <Link to="/login">
        <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG25.png" alt = "amazon Logo"></img>
        </Link>
        <div className="header__search">
        <input type="text" className="header__searchInput"/>
        <SearchIcon className = "header__searchIcon"/>
        </div>    
        <div className="header__Nav">
            <Link to= {!user && "/login"} class="header__link">
            <div onClick={handleAuthentication} className="header__option">
                <span className="header__optionLineOne">Hello {user?.email} </span>
                <span className="header__optionLineTwo">{user ?"Sign Out" : "Sign In"}</span>
            </div>
            </Link>
            <Link to="/" class="header__link">
            <div className="header__option">
                <span className="header__optionLineOne">Returns </span>
                <span className="header__optionLineTwo">& Orders</span>
            </div>
            </Link>
            <Link to="/" class="header__link">
            <div className="header__option">
                <span className="header__optionLineOne">Your</span>
                <span className="header__optionLineTwo">Prime</span>
            </div>
            </Link>
            <Link to="/checkout" class="header__link">
            <div className="header__optionBasket">
                <span><ShoppingBasketIcon /></span>
                <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
            </div>
            </Link>
        </div>
        
        </nav>
    )
}

export default Header;