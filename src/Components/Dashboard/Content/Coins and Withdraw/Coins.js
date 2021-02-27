import { useState, useEffect } from "react";
import Coin from "./Coin";
import styles from "./Coins.module.css";
import WithDraw from "./WithDraw";

const Coins = () => {
  const [show, setShow] = useState(true);

  return (
    <div className={styles.Coins}>
      <section className={styles.header}>
        <button onClick={() => setShow(true)}>Coins</button>
        <button onClick={() => setShow(false)}>Withdraw</button>
      </section>
      {show ? <Coin /> : <WithDraw />}
    </div>
  );
};

export default Coins;
