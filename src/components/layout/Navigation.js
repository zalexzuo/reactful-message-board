import React, { useEffect } from "react";
import { NavLink, Link, useNavigate, useLocation } from "react-router-dom";

import styles from "./Navigation.module.scss";
import logo from "../../images/logo.png";
import { useSelector, useDispatch } from "react-redux";
import { GoogleLogin } from "../../lib/googleLogin";
import { LoginActions } from "../../store/LoginSlice";

const Navigation = () => {
  const isLogin = useSelector((state) => state.login.isLogin);
  // console.log("login: " + isLogin);

  // const themeDark = useSelector((state) => state.theme.theme);
  // console.log("theme: " + themeDark);

  const dispatch = useDispatch();

  // login and logout redirecting config
  const navigate = useNavigate();
  const location = useLocation();
  const loginUrl = window.location.hostname;
  // + location.pathname

  // const loginHandler = () => {
  //   dispatch(LoginActions.userLogin());
  // };

  const logoutHandler = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");

    if (confirmLogout) {
      dispatch(LoginActions.userLogout());
      localStorage.removeItem("userInfo");
      navigate("/allpost", { replace: true });
      window.location.href = "https://reactful-message-board.netlify.app";
    }
  };

  // get localStorage for log
  // const getUserInfo = () => {
  //   return localStorage.getItem("userInfo");
  // };

  const themeToggleHandler = () => {
    if (localStorage.getItem("theme") == "true") {
      localStorage.setItem("theme", false);
      document.body.style.backgroundColor = "#FFF";
    } else if (localStorage.getItem("theme") == "false") {
      localStorage.setItem("theme", true);
      document.body.style.backgroundColor = "#1e272e";
    } else {
      localStorage.setItem("theme", false);
      document.body.style.backgroundColor = "#FFF";
    }
  };

  const initialThemeFunction = () => {
    if (localStorage.getItem("theme") == "true") {
      document.body.style.backgroundColor = "#1e272e";
    } else if (localStorage.getItem("theme") == "false") {
      document.body.style.backgroundColor = "#FFF";
    } else {
      localStorage.setItem("theme", false);
    }
  };

  useEffect(() => {
    if (isLogin == false || isLogin == null || isLogin == undefined) {
      GoogleLogin(loginUrl);
    }

    initialThemeFunction();
  }, [isLogin, GoogleLogin]);

  const getLog = () => {
    // console.log("current theme: " + localStorage.getItem("theme"));
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/allpost">
          <img src={logo} alt="ReactFul" />
        </Link>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink
              to="/allpost"
              className={(navData) =>
                navData.isActive ? styles.active : styles.link
              }
            >
              All Post
            </NavLink>
          </li>
          {isLogin ? (
            <li>
              <NavLink
                to="/addpost"
                className={(navData) =>
                  navData.isActive ? styles.active : styles.link
                }
              >
                Add Post
              </NavLink>
            </li>
          ) : (
            ""
          )}
          {isLogin ? (
            <li>
              <NavLink
                to="/mypost"
                className={(navData) =>
                  navData.isActive ? styles.active : styles.link
                }
              >
                My Post
              </NavLink>
            </li>
          ) : (
            ""
          )}
          {isLogin ? (
            <button onClick={logoutHandler}>Logout</button>
          ) : (
            <div id="loginBtn"></div>
          )}
          <button onClick={themeToggleHandler}>Theme</button>
          {/* <button onClick={getLog}>TEST</button> */}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
