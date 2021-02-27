import { useState, useEffect } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import Radio from "./Radio";
import Radio2 from "./Radio2";

import styles from "./Coins.module.css";

const Coin = () => {
  const [value, setValue] = useState(0);
  return (
    <section className={styles.buy}>
      <div className={styles.offer}>
        <h2>Offers Available</h2>
        <form>
          <Radio
            id="50"
            setValue={setValue}
            name="offer"
            content="Rs. 50 ( 55 Coins )"
          />
          <Radio
            id="100"
            setValue={setValue}
            name="offer"
            content="Rs. 100 ( 110 Coins )"
          />
          <Radio
            id="200"
            setValue={setValue}
            name="offer"
            content="Rs. 200 ( 220 Coins )"
          />
          <Radio
            id="500"
            setValue={setValue}
            name="offer"
            content="Rs. 500 ( 550 Coins )"
          />
        </form>
        <div className={styles.custom}>
          <div className={styles.information}>
            <h2>Custom Buy</h2>
            <AiOutlineInfoCircle className={styles.info} />
            <p className={styles.visible}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo, ipsum.
            </p>
          </div>
          <div className={styles.customField}>
            <label htmlFor="customCoin">Enter coins</label>
            <input type="number" id="customCoin" />
          </div>
        </div>
      </div>
      <div className={styles.payment}>
        <h2>Payment Options</h2>
        <form>
          <Radio2 id="razorpay" name="gateway" content="Razorpay Gateway" />
          <Radio2 id="paytm" name="gateway" content="Paytm Gateway" />
        </form>
        <p>
          Amount to pay : <span className={styles.amnt}>Rs. {value}</span>
        </p>
        <button className={styles.pay}>Buy Coins</button>
      </div>
    </section>
  );
};

export default Coin;
