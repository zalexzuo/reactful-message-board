import React, { useEffect } from "react";

import PostList from "../components/post/PostList";
import useHttp from "../hook/useHttp";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import { getAllPosts } from "../lib/firebase-api";

const AllPost = () => {
  const {
    sendRequest,
    status,
    data: allPosts,
    error,
  } = useHttp(getAllPosts, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if (status === "completed" && (!allPosts || allPosts.length === 0)) {
    return <h1>No Post Found!</h1>;
  }

  return (
    <React.Fragment>
      <PostList posts={allPosts} btnText={"Comment"} />
    </React.Fragment>
  );
};

export default AllPost;
