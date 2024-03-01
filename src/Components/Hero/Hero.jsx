import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero_image from "../Assets/hero_image.png";
import style from "./Hero.module.css";

const Hero = () => {
    return (
        <div className={style["hero"]}>
            <div className={style["hero-left"]}>
                <h2>NEW ARRIVAL ONLY</h2>
                <div>
                    <div className={style["hero-hand-icon"]}>
                       <p>new</p>
                       <img src={hand_icon} alt="hand-icon-img" />
                    </div>
                    <p>collections</p>
                    <p>for everyone</p>
                </div>
                <div className={style["hero-latest-btn"]}>
                 <div>Latest Collection</div>
                 <img src={arrow_icon} alt="arrow-icon-img" />
                </div>
            </div>
            <div className={style["hero-right"]}>
            <img src={hero_image} alt="hero-img" />
            </div>
        </div>
    )
}

export default Hero;