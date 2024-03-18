import style from "./DescriptionBox.module.css";

const DescriptionBox = () => {
    return (
        <div className={style.descriptionBox}>
            <div className={style["descriptionBox-navigator"]}>
                <div className={style["descriptionBox-nav-box"]}>Description</div>
                <div className={`${style["descriptionBox-nav-box"]} ${style["fade"]}`}>Reviews (122)</div>
            </div>
            <div className={style["descriptionBox-description"]}>
                <p>
                    An e-commerce website ia an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products,interact with customers,and conduct transactions without the need for a physical pressence. E-commerce websites have gained immense popularity
                    due to their convenience,accessibility,and the global reach they offer.
                </p>
                <p>
                    E-commerce websites typically display products or services along with detailed description,images,prices and any available variables(e.g.sizes,colors). Each product usually has its own dedicated page with relevant information.
                </p>
            </div>
        </div>
    )
}

export default DescriptionBox;