import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";

import style from "./ProductDisplay.module.css";

const ProductDisplay = (props) => {
    const { product } = props;
    return (
        <div className={style.productDisplay}>
            <div className={style["productDisplay-left"]}>
                <div className={style["productDisplay-img-list"]}>

                    <img src={product.image} alt="img" />
                    <img src={product.image} alt="img" />
                    <img src={product.image} alt="img" />
                    <img src={product.image} alt="img" />

                </div>
                <div className={style["productDisplay-img"]}>
                    <img className={style["productDisplay-main-img"]} src={product.image} alt="img" />
                </div>
            </div>

            <div className={style["productDisplay-right"]}>
                <h1>{product.name}</h1>
                <div className={style["productDisplay-right-stars"]}>
                    <img src={star_icon} alt="star-icon-img" />
                    <img src={star_icon} alt="star-icon-img" />
                    <img src={star_icon} alt="star-icon-img" />
                    <img src={star_icon} alt="star-icon-img" />
                    <img src={star_dull_icon} alt="star-img" />
                    <p>(122)</p>
                </div>
                <div className={style["productDisplay-right-prices"]}>
                    <div className={style["productDisplay-right-price-old"]}>
                        ${product.old_price}
                    </div>
                    <div className={style["productDisplay-right-price-new"]}>
                        ${product.new_price}
                    </div>
                </div>
                <div className={style["productDisplay-right-description"]}>
               A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.
                </div>
                <div className={style["productDisplay-right-size"]}>
                    <h1>Select Size</h1>
                    <div className={style["productDisplay-right-sizes"]}>
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
      <button>ADD TO CART</button>
   <p className={style["productDisplay-right-category"]}><span>Category: </span>Women, T-Shirt, Crop Top</p>
   <p className={style["productDisplay-right-category"]}><span>Tags: </span>Modern. Latest</p>
            </div>
        </div>
    )
}

export default ProductDisplay;