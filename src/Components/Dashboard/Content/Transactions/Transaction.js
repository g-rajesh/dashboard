import { FiSearch } from "react-icons/fi";
import { useState } from "react";
import Pagination from "./Pagination";
import Table from "./Table";
import styles from "./Transaction.module.css";

let pageCount = 0;

const Transaction = () => {
  const [show, setShow] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }
  if (1) {
    //if(data){  - since data is not fetched here I put 1,
    const perPage = 5;
    const offset = currentPage * perPage;
    // images = data.slice(offset, offset + perPage).map(({ id, img, type }) => {
    //   return <Image key={id} image={img} />;
    // });
    pageCount = Math.ceil(20 / perPage);
  }

  return (
    <div className={styles.Transaction}>
      <header className={styles.tab}>
        <ul className={styles.list}>
          <li>
            <button
              onClick={() => setShow(true)}
              className={show ? [styles.active].join(" ") : null}
            >
              Coins
            </button>
          </li>
          <li>
            <button
              onClick={() => setShow(false)}
              className={!show ? [styles.active].join(" ") : null}
            >
              Withdraw
            </button>
          </li>
        </ul>
        <div className={styles.search}>
          <label htmlFor="search">
            <FiSearch />
          </label>
          <input type="text" id="search" name="search" placeholder="search" />
        </div>
      </header>
      <div className={styles.table}>
        {show ? (
          <Table display="Coin Won" />
        ) : (
          <Table display="Money Withdrawn" />
        )}
      </div>
      <Pagination cnt={pageCount} clickHandler={handlePageClick} />
    </div>
  );
};

export default Transaction;
