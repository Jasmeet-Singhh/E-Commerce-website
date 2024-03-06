import React from "react";
import style from "./CSS/LoginSignup.module.css";

const LoginSignup = () => {
    return (
        <div className={style["loginSignup"]}>
            <div className={style["loginSignup-container"]}>
                <h1>Sigh Up</h1>
                <div className={style["loginSignup-fields"]}>
                    <input type="text" placeholder="Your Name" />
                    <input type="email" placeholder="Email Address" />
                    <input type="password" placeholder="Password" />
                </div>
                <button>Continue</button>
                <p className={style["loginSignup-login"]}>Already have an account? <span>Login here</span></p>
                <div className={style["loginSignup-agree"]}>
                   <input type="checkbox" name="" id="" />
                   <p>By continuing, i agree to the terms of use and privacy policy.</p>
                </div>
            </div>
        </div>
    )
}

export default LoginSignup;