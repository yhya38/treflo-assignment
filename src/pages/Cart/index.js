import React, { useContext } from "react";
import styles from "./styles.module.css";
import { AppContext } from "../../context/context";

function Cart() {
  const { basket, total, clearCart, removeItem } =
    useContext(AppContext);

  const [quantity, setQuantity] = React.useState(1);
  return (
    <>
      <div className={styles.cartContainer}>
        <div className={styles.shoppingBasket}>
          <h3>
            Hello, Your shopping basket {basket.length === 0 && "is empty"}
          </h3>

          {basket.length > 0 && (
            <button
              className={`${styles.rmv} ${styles.clear}`}
              onClick={clearCart}
            >
              Clear
            </button>
          )}
        </div>
        {basket.map((order) => {
          return (
            <div className={styles.cartWrapper}>
              <div className={styles.cartItems}>
                <img src={order.img_url} alt={order.name} />
                <div className={styles.cartData}>
                  <span>{order.description}</span>
                  <h4>Name : {order.name}</h4>
                  <h4>Price : INR {order.price} /-</h4>
                  <h4>Rating : {order.rating}/5</h4>
                  <h4>
                    Size : {order.pizzaSize ? order.pizzaSize : "Regular"}
                  </h4>
                  <h4>
                    Toppings :
                    {order.pizzaToppings.length > 0
                      ? order.pizzaToppings.map((topping) => (
                          <span>{topping}, </span>
                        ))
                      : "No topings Selected"}
                  </h4>
                  <div className={styles.quantity_btn}>
                    <button
                      className={styles.btn}
                      onClick={() => {
                        quantity > 1 && setQuantity(quantity - 1);
                      }}
                    >
                      -
                    </button>
                    <p>{quantity}</p>
                    <button
                      className={styles.btn}
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    className={styles.rmv}
                    onClick={() => removeItem(order.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          );
        })}

        <div className={styles.subTotal}>
          <h3>SubTotal : ₹ {total}</h3>
          <button className={styles.checkout}>Proceed to Checkout</button>
        </div>
      </div>
    </>
  );
}

export default Cart;
