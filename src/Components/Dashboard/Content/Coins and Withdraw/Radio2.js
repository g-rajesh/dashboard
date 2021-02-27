import styles from "./Radio.module.css";

const Radio2 = ({ id, name, content }) => {
  return (
    <div className={styles.field}>
      <input type="radio" id={id} name={name} value={id} />
      <label htmlFor={id}>{content}</label>
    </div>
  );
};

export default Radio2;
