import React, { useEffect, useState, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import useHttp from "../hook/useHttp";
import { getSinglePost } from "../lib/firebase-api";
import { editSinglePost } from "../lib/firebase-api";
import PleaseLogin from "../components/UI/PleaseLogin";
import EditForm from "../components/post/EditForm";

const EditPost = () => {
  const isLogin = useSelector((state) => state.login.isLogin);

  const { sendRequest, status } = useHttp(editSinglePost);
  const params = useParams();
  const { postid } = params;
  const navigate = useNavigate();

  const [editPost, setEditPost] = useState({
    username: "",
    email: "",
    title: "",
    content: "",
    modifieddate: "",
    picture: "",
    postid: "",
  });

  const responseData = useCallback(async () => {
    const data = await getSinglePost(postid);
    setEditPost(data);
    //return data;
  }, [postid]);

  useEffect(() => {
    if (status === "completed") {
      window.alert("Post Edited!");
      navigate("/mypost", { replace: true });
    }
    responseData();
  }, [responseData, status]);

  const editPostHandler = (postObj) => {
    sendRequest(postObj);
  };

  return (
    <React.Fragment>
      {isLogin ? (
        <EditForm
          editPostHandler={editPostHandler}
          postObj={editPost}
          setPostObj={setEditPost}
        />
      ) : (
        <PleaseLogin pageName={"Edit Post"} />
      )}
    </React.Fragment>
  );
};

export default EditPost;
