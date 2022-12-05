import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import AddForm from "../components/post/AddForm";
import useHttp from "../hook/useHttp";
import { addPost } from "../lib/firebase-api";
import PleaseLogin from "../components/UI/PleaseLogin";

const AddPost = () => {
  const isLogin = useSelector((state) => state.login.isLogin);

  const { sendRequest, status } = useHttp(addPost);
  const navigate = useNavigate();

  useEffect(() => {
    if (status === "completed") {
      window.alert("Post Added!");
      navigate("/allpost", { replace: true });
    }
  });

  const addPostHandler = (postObj) => {
    sendRequest(postObj);
  };

  return (
    <React.Fragment>
      {isLogin ? (
        <AddForm addPostHandler={addPostHandler} />
      ) : (
        <PleaseLogin pageName={"Add Post"} />
      )}
    </React.Fragment>
  );
};

export default AddPost;
