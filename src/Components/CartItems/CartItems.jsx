
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";
import styles from "./CartItems.module.css";

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext)
  return (
    <div className={styles.cartItems}>
      <div className={styles["cartItems-format-main"]}>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return <div key={e.id}>
            <div className={`${styles["cartItems-format"]} ${styles["cartItems-format-main"]}`}>
              <img src={e.image} alt="" className={styles["cartIcon-product-icon"]} />
              <p>{e.name}</p>
              <p>${e.new_price}</p>
              <button className={styles["cartItems-quantity"]}>{cartItems[e.id]}</button>
              <p>${e.new_price * cartItems[e.id]}</p>
              <img className={styles["cartItems-remove-icon"]} src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="" />
            </div>
            <hr />
          </div>
        }
        return null;
      })}
      <div className={styles["cartItems-down"]}>
        <div className={styles["cartItems-total"]}>
          <h1>cart Totals</h1>
          <div>
            <div className={styles["cartItems-total-items"]}>
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className={styles["cartItems-total-items"]}>
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className={styles["cartItems-total-items"]}>
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className={styles["cartItems-promoCode"]}>
          <p>If you gave a promo code, Enter it here.</p>
          <div className={styles["cartItems-promoBox"]}>
            <input type="text" placeholder="promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItems;