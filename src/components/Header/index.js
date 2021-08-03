import React, { useContext } from "react";
import "./styles.module.css";
import { Link } from "react-router-dom";
import { ShoppingBasket } from "@material-ui/icons";
import { AppContext } from "../../context/context";

function Header() {
  const { basket } =useContext(AppContext);

  

  return (
    <div className="header_container">
      <header>
        <h1>
          <Link to="/">PizzaStore</Link>
        </h1>
        <Link to="/cart" className="cartLink">
          <ShoppingBasket />
          <span>{basket.length}</span>
        </Link>
      </header>
    </div>
  );
}

export default Header;
