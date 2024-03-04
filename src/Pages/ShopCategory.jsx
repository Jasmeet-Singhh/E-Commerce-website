import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Item/Item";
import style from "./CSS/ShopCategory.module.css";

const ShopCategory = (props) => {
    const {all_product} = useContext(ShopContext);
    return (
        <div className={style["shop-category"]}>
            <img className={style["shopcategory-banner"]} src={props.banner} alt="img" />
            <div className={style["shopcategory-indexSort"]}>
                <p>
                    <span>Showing 1-12</span> out of 36 products
                </p>
                <div className={style["shopcategory-sort"]}>
                    Sort by <img src={dropdown_icon} alt="" />
                </div>
            </div>
            <div className={style["shopcategory-products"]}>
                {all_product.map((item, i) => {
                 if(props.category === item.category){
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                 }
                 else{
                    return null;
                 }
                })}
            </div>
            <div className={style["shopcategory-loadmore"]}>
               Explore More
            </div>
        </div>
    )
}

export default ShopCategory;