import { Link } from "react-router-dom";
import style from "./Item.module.css";
const Item = (props) => {
    return (
        <div className={style.item}>
           <Link to={`/product/ ${props.id}`}><img src={props.image} alt="img" /></Link> 
            <p>{props.name}</p>
            <div className={style["item-prices"]}>
                <div className={style["item-price-new"]}>
                    ${props.new_price}
                </div>
                <div className={style["item-price-old"]}>
                    ${props.old_price}
                </div>
            </div>
        </div>
    )
}

export default Item;