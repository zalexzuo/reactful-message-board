import React, { useState } from "react";

import PostForm from "./PostForm";

const EditForm = ({ editPostHandler, postObj, setPostObj }) => {
  //const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  //   const [postObj, setPostObj] = useState({
  //     username: userInfo.name,
  //     email: userInfo.email,
  //     title: "",
  //     content: "",
  //     modifieddate: "",
  //     picture: userInfo.picture,
  //   });

  const formSubmitHandler = (e, editPostHandler, postObj) => {
    e.preventDefault();

    if (!postObj.title == "" && !postObj.content == "") {
      editPostHandler(postObj);
    } else {
      window.alert("Title and content cannot be empty!");
    }
  };

  return (
    <React.Fragment>
      <PostForm
        sendRequestHandler={editPostHandler}
        formSubmitHandler={formSubmitHandler}
        postObj={postObj}
        setPostObj={setPostObj}
        pageTitle={"Edit Post"}
      />
    </React.Fragment>
  );
};

export default EditForm;
