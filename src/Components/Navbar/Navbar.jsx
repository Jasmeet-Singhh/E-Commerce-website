import React, { useState } from "react";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png"
import style from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
   const [menu, setMenu] = useState("shop");

   return (
      <>
         <div className={style["nav-bar"]}>
            <div className={style["nav-logo"]}>
               <img src={logo} alt="logo-img" />
               <p>SHOPPER</p>
            </div>

            <ul className={style["nav-menu"]}>
               <li onClick={() => { setMenu("shop") }}><Link className={style["link-decoration"]} to="/">Shop</Link>{menu === "shop" ? <hr /> : <></>}</li>
               <li onClick={() => { setMenu("mens") }}><Link className={style["link-decoration"]} to="/mens">Men</Link>{menu === "mens" ? <hr /> : <></>} </li>
               <li onClick={() => { setMenu("womens") }}><Link className={style["link-decoration"]} to="/womens">Women</Link>{menu === "womens" ? <hr /> : <></>} </li>
               <li onClick={() => { setMenu("kids") }}><Link className={style["link-decoration"]} to="/kids">Kids</Link>{menu === "kids" ? <hr /> : <></>} </li>
            </ul>

            <div className={style["nav-login-cart"]}>
               <Link to="/login"><button>Login</button></Link>
               <Link to="/cart"><img src={cart_icon} alt="cart-icon-img" /></Link>
               <div className={style["nav-cart-count"]}>0</div>
            </div>

         </div>

      </>
   );
};

export default Navbar;