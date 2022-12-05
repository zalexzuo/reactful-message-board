import React, { useState } from "react";

import PostForm from "./PostForm";

const AddForm = ({ addPostHandler, pathname }) => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  const [postObj, setPostObj] = useState({
    username: userInfo.name,
    email: userInfo.email,
    title: "",
    content: "",
    modifieddate: "",
    picture: userInfo.picture,
  });

  const formSubmitHandler = (e, addPostHandler, postObj) => {
    e.preventDefault();

    if (!postObj.title == "" && !postObj.content == "") {
      addPostHandler(postObj);
    } else {
      window.alert("Title and content cannot be empty!");
    }
  };

  return (
    <React.Fragment>
      <PostForm
        sendRequestHandler={addPostHandler}
        formSubmitHandler={formSubmitHandler}
        postObj={postObj}
        setPostObj={setPostObj}
        pageTitle={"New Post"}
      />
    </React.Fragment>
  );
};

export default AddForm;
