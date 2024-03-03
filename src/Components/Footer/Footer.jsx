import footer_logo from "../Assets/logo_big.png";
import instagram_icon from "../Assets/instagram_icon.png";
import pintester_icon from "../Assets/pintester_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";
import style from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={style["footer-logo"]}>
                <img src={footer_logo} alt="footer-img" />
                <p>SHOPPER</p>
            </div>
            
                <ul className={style["footer-links"]}>
                    <li>Company</li>
                    <li>Products</li>
                    <li>Offices</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <div className={style["footer-social-icon"]}>
                    <div className={style["footer-icons-container"]}>
                        <img src={instagram_icon} alt="instagram-img" />
                    </div>
                    <div className={style["footer-icons-container"]}>
                        <img src={pintester_icon} alt="pintester-img" />
                    </div>
                    <div className={style["footer-icons-container"]}>
                        <img src={whatsapp_icon} alt="whatsapp-img" />
                    </div>
                </div>
                <div className={style["footer-copyright"]}>
                   <hr />
                   <p>copyright @ 2024 - All Rights Reserved.</p>
                </div>
        </div>
    )
}

export default Footer;