import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import PostItem from "./PostItem";
import styles from "./PostList.module.scss";

// const sortPosts = (posts, ascending) => {
//   posts.map((post) => {
//     console.log(post.modifieddate);
//   });
//   return posts;
// };

const sortPosts = (posts, ascending) => {
  return posts.sort((postA, postB) => {
    if (ascending) {
      return postA.id > postB.id ? 1 : -1;
    } else {
      return postA.id < postB.id ? 1 : -1;
    }
  });
};

const PostList = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  // console.log(location.pathname);

  const queryParams = new URLSearchParams(location.search);
  const isSortingAscending = queryParams.get("sort") === "asc";

  const sortedPosts = sortPosts(props.posts, isSortingAscending);

  const changeSortingHandler = () => {
    navigate(
      `${location.pathname}?sort=${isSortingAscending ? "desc" : "asc"}`
    );
    // console.log(sortedQuotes);
  };

  return (
    <React.Fragment>
      <div className={styles.sorting}>
        <button onClick={changeSortingHandler}>Sort by Date</button>
      </div>
      <ul className={styles.postList}>
        {sortedPosts.map((post) => {
          return (
            <PostItem
              key={post.postid}
              postId={post.postid}
              modifiedDate={post.modifieddate}
              userName={post.username}
              title={post.title}
              content={post.content}
              email={post.email}
              btnText={props.btnText}
            />
          );
        })}
      </ul>
    </React.Fragment>
  );
};

export default PostList;
