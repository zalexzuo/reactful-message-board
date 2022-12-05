import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

import styles from "./PostForm.module.scss";

const PostForm = ({
  sendRequestHandler,
  formSubmitHandler,
  postObj,
  setPostObj,
  pageTitle,
}) => {
  const getModifiedDate = (dateInfo) => {
    return `${dateInfo.getFullYear()}/${
      dateInfo.getMonth() + 1
    }/${dateInfo.getDate()}`;
  };

  const navigate = useNavigate();
  const pathname = useLocation().pathname;

  const titleOnchangeHandler = (e, prePostObj) => {
    const modifiedDate = getModifiedDate(new Date());
    const newPostObj = {
      ...prePostObj,
      title: e.target.value,
      modifieddate: modifiedDate,
    };
    setPostObj(newPostObj);
  };

  const contentOnchangeHandler = (e, prePostObj) => {
    const modifiedDate = getModifiedDate(new Date());
    const newPostObj = {
      ...prePostObj,
      content: e.target.value,
      modifieddate: modifiedDate,
    };
    setPostObj(newPostObj);
  };

  const goBackHandler = (e) => {
    e.preventDefault();
    console.log(pathname[1]);

    if (pathname[1] == "m") {
      navigate("/mypost", { replace: false });
      return;
    }

    navigate("/allpost", { replace: false });
  };

  const testHandler = (e) => {
    e.preventDefault();
    console.log(postObj);
  };

  return (
    <React.Fragment>
      <div className={styles.formContainer}>
        <form>
          <h2>{pageTitle}</h2>
          <input
            type="text"
            placeholder="Enter Title..."
            value={postObj["title"]}
            onChange={(e) => {
              titleOnchangeHandler(e, postObj);
            }}
          ></input>

          <textarea
            value={postObj["content"]}
            placeholder="Content..."
            onChange={(e) => {
              contentOnchangeHandler(e, postObj);
            }}
          ></textarea>
          <div className={styles.btnContainer}>
            <button
              onClick={(e) => {
                goBackHandler(e);
              }}
            >
              Back
            </button>
            <button
              onClick={(e) => {
                formSubmitHandler(e, sendRequestHandler, postObj);
              }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default PostForm;
