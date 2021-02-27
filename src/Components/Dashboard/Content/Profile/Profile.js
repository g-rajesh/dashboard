import styles from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={styles.Profile}>
      <section className={styles.header}>
        <div className={styles.right}>
          <div className={styles.tab}>
            <h2>1518</h2>
            <h4>Coins</h4>
          </div>
          <div className={styles.tab}>
            <h2>21578</h2>
            <h4>Rank</h4>
          </div>
          <div className={styles.tab}>
            <h2>20</h2>
            <h4>Games Won</h4>
          </div>
        </div>
        <div className={styles.left}>
          <h4>Challenges ahead</h4>
          <div className={styles.graph}>
            <div className={styles.bg}></div>
            <span>You're here</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
