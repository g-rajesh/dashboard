import styles from "./Table.module.css";

const Table = ({ display }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Problem Statement</th>
          <th>{display}</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Sum of Squares</td>
          <td>$10</td>
          <td>24/06/2021</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Sum of Squares</td>
          <td>$10</td>
          <td>24/06/2021</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Sum of Squares</td>
          <td>$10</td>
          <td>24/06/2021</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Sum of Squares</td>
          <td>$10</td>
          <td>24/06/2021</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Sum of Squares</td>
          <td>$10</td>
          <td>24/06/2021</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
