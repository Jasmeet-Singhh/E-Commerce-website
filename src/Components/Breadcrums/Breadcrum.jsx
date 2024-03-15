import arrow_icon from "../Assets/breadcrum_arrow.png";
import style from "./Breadcrum.module.css";

const Breadcrum = (props)=>{
    const {product} = props;
    return(
        <div className={style.breadcrum}>
          HOME <img src={arrow_icon} alt="arrow-img" /> SHOP <img src={arrow_icon} alt="arrow-img" /> {product.category} <img src={arrow_icon} alt="arrow-img" />
          {product.name}
        </div>
    )
}

export default Breadcrum;