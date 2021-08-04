import React, { useContext } from "react";
import { Card } from "../../components";
import { AppContext } from "../../context/context";
import Loader from "react-loader-spinner";
import styles from "./styles.module.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
function Home() {
  const { pizzaList, setPizzaList, cpyPizzaList } = useContext(AppContext);

  const handleData = (id) => {
    if (id === "veg") {
      const newItem = cpyPizzaList.filter((item) => item.isVeg);
      setPizzaList(newItem);
    } else if (id === "nonVeg") {
      const newItem = cpyPizzaList.filter((item) => !item.isVeg);
      setPizzaList(newItem);
    } else if (id === "all") {
      setPizzaList(cpyPizzaList);
    } else if (id === "price") {
      const sortedItem = pizzaList.sort((a, b) => (a.price > b.price ? 1 : -1));
      setPizzaList([...sortedItem]);
    } else if (id === "rating") {
      const sortedItem = pizzaList.sort((a, b) => (a.rating < b.rating ? 1 : -1));
      setPizzaList([...sortedItem]);
    }
  }

  if (!pizzaList.length) {
    return (
      <div className={styles.loading}>
        <Loader
          type="Oval"
          color="rgb(19,25,33)"
          height={100}
          width={100}
          // timeout={4000} //3 secs
        />
      </div>
    );
  }
  return (
    <>
      <div className={styles.background}>
       
      </div>
      <div className={styles.wrapper}>
        <div className={styles.btn_container}>
          <button className={styles.common_btn}onClick={()=>handleData('all')}>All</button>
          <button className={styles.common_btn}onClick={()=>handleData('veg')}>Veg</button>
          <button className={styles.common_btn}onClick={()=>handleData('nonVeg')}>Non Veg</button>
          <button className={styles.common_btn}onClick={()=>handleData('price')}>Price</button>
          <button className={styles.common_btn}onClick={()=>handleData('rating')}>Rating</button>
        </div>
        <div className={styles.card_container}>
          {pizzaList.map((items) => {
            return <Card key={items.id} {...items} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
