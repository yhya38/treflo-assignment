import React, { useState, useContext } from "react";
import { AppContext } from "../../context/context";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Button from "@material-ui/core/Button";
import Fade from "@material-ui/core/Fade";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    borderRadius: "5px",
    boxShadow: theme.shadows[5],
    // padding: theme.spacing(2, 4, 3),
  },
}));

function CardModal({
  id,
  open,
  handleOpen,
  handleClose,
  img_url,
  name,
  rating,
  price,
  isVeg,
  size,
  toppings,
  description,
}) {
  const classes = useStyles();
  const [pizzaSize, setPizzaSize] = useState("");
  const [pizzaToppings, setPizzaToppings] = useState([]);
  const { setBasket, basket } = useContext(AppContext);
  const [item] = size;
  const [topping] = toppings;

  const idCheck = basket.filter((item) => item.id === id);
  console.log(idCheck);

  const addToCart = () => {
    const newOrder = {
      id,
      img_url,
      name,
      rating,
      price,
      isVeg,
      pizzaSize,
      pizzaToppings,
      description,
    };
    setBasket([...basket, newOrder]);
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div className={styles.modal_container}>
              <img src={img_url} alt={name} />
              <p>{description}</p>
              <h2 className={styles.modal_headings}>Name : {name}</h2>
              <h2 className={styles.modal_headings}>
                Type : {isVeg ? "Veg" : "Non Veg"}
              </h2>
              <h2 className={styles.modal_headings}>Price : INR {price} /-</h2>
              <h2 className={styles.modal_headings}>Rating : {rating}/5</h2>
              <div>
                {item.isRadio ? (
                  <div className={styles.choose}>
                    <h2 className={styles.chooseSize}>{item.title}</h2>
                    {item.items.map((size) => (
                      <div className={styles.selectSize}>
                        {size.size}
                        <input
                          type="radio"
                          name="size"
                          value={pizzaSize}
                          onClick={() => setPizzaSize(size.size)}
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  "No size available"
                )}
              </div>
              <div>
                {topping.isRadio ? (
                  <div className={styles.choose}>
                    <h2 className={styles.chooseSize}>{topping.title}</h2>
                    {topping.items.map((toppingItem) => (
                      <div className={styles.chooseSize}>
                        {toppingItem.name}{" "}
                        <input
                          type="checkbox"
                          name="topping"
                          value={pizzaToppings}
                          onClick={() =>
                            setPizzaToppings([
                              ...pizzaToppings,
                              toppingItem.name,
                            ])
                          }
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <h2>No toppings available</h2>
                )}
              </div>
            </div>

            {idCheck.length ? (
              <Button
                variant="contained"
                color="primary"
                className={styles.addToCart}
              >
                <Link to="/cart">Go to Cart</Link>
              </Button>
            ) : (
              <Button
                variant="contained"
                color="primary"
                className={styles.addToCart}
                onClick={() => {
                  addToCart();
                  handleClose();
                }}
              >
                Add to Cart
              </Button>
            )}
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default CardModal;