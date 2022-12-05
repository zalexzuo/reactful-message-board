import styles from "./PleaseLogin.module.scss";

const PleaseLogin = (props) => {
  return (
    <>
      <div className={styles.pleaseLogin}>
        <div className={styles.icon}>!</div>
        <h2 className={styles.msg}>
          Please login to access <br />
          {props.pageName} page!
        </h2>
      </div>
    </>
  );
};

export default PleaseLogin;
