import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { getMyPosts } from "../lib/firebase-api";
import PostList from "../components/post/PostList";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hook/useHttp";
import PleaseLogin from "../components/UI/PleaseLogin";

const MyPost = () => {
  const isLogin = useSelector((state) => state.login.isLogin);

  const {
    sendRequest,
    status,
    data: myPosts,
    error,
  } = useHttp(getMyPosts, true);

  useEffect(() => {
    if (isLogin) {
      const userEmail = JSON.parse(localStorage.getItem("userInfo")).email;
      sendRequest(userEmail);
    }
  }, [sendRequest]);

  if (status === "pending" && isLogin == true) {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if (status === "completed" && (!myPosts || myPosts.length === 0)) {
    return <h1>No Post Found!</h1>;
  }

  return (
    <React.Fragment>
      {isLogin ? (
        <PostList posts={myPosts} btnText={"Edit"} />
      ) : (
        <PleaseLogin />
      )}
    </React.Fragment>
  );
};

export default MyPost;
