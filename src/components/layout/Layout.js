import React from "react";
import Navigation from "./Navigation";

import styles from "./Layout.module.scss";

const Layout = (props) => {
  return (
    <React.Fragment>
      <Navigation />
      <main className={styles.main}>{props.children}</main>
      <div className={styles.gitLogo}>
        <a
          href="https://github.com/zalexzuo/reactful-message-board"
          target="_blank"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt="Github"
            width="50px"
          />
        </a>
      </div>
    </React.Fragment>
  );
};

export default Layout;
