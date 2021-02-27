import { useState, useEffect } from "react";
import styles from "./Radio.module.css";

const Radio = ({ id, name, content, setValue }) => {
  const amnt = parseInt(id);

  return (
    <div className={styles.field}>
      <input
        type="radio"
        onClick={() => setValue(amnt)}
        id={id}
        name={name}
        value={id}
      />
      <label htmlFor={id}>{content}</label>
    </div>
  );
};

export default Radio;
