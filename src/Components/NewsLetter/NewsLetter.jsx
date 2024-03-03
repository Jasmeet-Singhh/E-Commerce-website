import style from "./NewsLetter.module.css";
const NewsLetter = () => {
    return (
        <div className={style.newsletter}>
            <h1>Get Exclusive Offer On Your Email</h1>
            <p>Subscribe To Your newletter and stay updated</p>
            <div>
                <input type="email" placeholder="Your Email id" />
                <button>Subscribe</button>
            </div>
        </div>
    )
}

export default NewsLetter;