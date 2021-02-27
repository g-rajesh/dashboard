import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";
import { MdModeEdit } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className={styles.Sidebar}>
      <header>
        <div className={styles.image}>
          <img
            src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg"
            alt="profile"
          />
          <MdModeEdit className={styles.edit} />
        </div>
        <h5>Welcome back,</h5>
        <h4>UserName</h4>
      </header>
      <nav className={styles.Navbar}>
        <ul className={styles.links}>
          <li>
            <NavLink
              to="/profile"
              activeStyle={{
                borderLeft: "0.3rem solid #696969",
                color: "#696969",
              }}
            >
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/coins-and-withdraw"
              activeStyle={{
                borderLeft: "0.3rem solid #696969",
                color: "#696969",
              }}
            >
              Coins and WithDraw
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/transactions"
              activeStyle={{
                borderLeft: "0.3rem solid #696969",
                color: "#696969",
              }}
            >
              Transactions
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/online-games"
              activeStyle={{
                borderLeft: "0.3rem solid #696969",
                color: "#696969",
              }}
            >
              Online Games
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
