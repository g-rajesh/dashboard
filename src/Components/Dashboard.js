import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Navbar from "./Dashboard/Navbar/Navbar";
import styles from "./Dashboard.module.css";
import Sidebar from "./Dashboard/Sidebar/Sidebar";
import Profile from "./Dashboard/Content/Profile/Profile";
import Coins from "./Dashboard/Content/Coins and Withdraw/Coins";
import Transaction from "./Dashboard/Content/Transactions/Transaction";
import OnlineGames from "./Dashboard/Content/Onlline Games/OnlineGames";

const Dasboard = () => {
  return (
    <Router>
      <div className={styles.Dashboard}>
        <Navbar />
        <div className={styles.display}>
          <Sidebar />
          <div className={styles.content}>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/coins-and-withdraw">
              <Coins />
            </Route>
            <Route path="/transactions">
              <Transaction />
            </Route>
            <Route path="/online-games">
              <OnlineGames />
            </Route>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Dasboard;
