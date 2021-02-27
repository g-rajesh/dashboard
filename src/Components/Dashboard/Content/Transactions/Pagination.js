import ReactPaginate from "react-paginate";

import styles from "./Pagination.module.css";

const Pagination = ({ cnt, clickHandler }) => {
  return (
    <div className={styles.pagination}>
      <ReactPaginate
        previousLabel={"prev"}
        nextLabel={"next"}
        pageCount={cnt}
        onPageChange={clickHandler}
        containerClassName={styles.pagination}
        previousLinkClassName={styles.pagination__link}
        nextLinkClassName={styles.pagination__link}
        disabledClassName={styles.disable}
        activeClassName={styles.active}
      />
    </div>
  );
};

export default Pagination;
