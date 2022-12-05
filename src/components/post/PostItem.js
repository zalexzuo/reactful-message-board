import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import styles from "./PostItem.module.scss";
import { deletePost } from "../../lib/firebase-api";

const PostItem = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const pathname = location.pathname;
  // console.log(pathname);

  const deletePostHandler = async (postid) => {
    const confirmDelete = window.confirm("Are you sure to delete post?");
    if (confirmDelete) {
      try {
        await deletePost(postid);
        window.alert("Post deleted!");
        navigate("/mypost", { replace: true });
        window.location.reload();
      } catch {
        window.alert("Something went worng... Please try again later.");
      }
    }
  };

  return (
    <li className={styles.items}>
      <figure>
        <blockquote>
          <h3>{props.title}</h3>
          <p>{props.content}</p>
        </blockquote>
        <div className={styles.infoContainer}>
          <figcaption>{props.userName}</figcaption>
          <span> modified at {props.modifiedDate}</span>
        </div>
      </figure>
      <div className={styles.linkBtn}>
        {location.pathname == "/allpost" ? (
          ""
        ) : (
          <Link
            className={styles.primary}
            to={`${location.pathname}/${props.postId}`}
          >
            {props.btnText}
          </Link>
        )}

        {pathname == "/mypost" ? (
          <Link
            className={styles.delete}
            to={"#"}
            onClick={() => {
              deletePostHandler(props.postId);
            }}
          >
            Delete
          </Link>
        ) : (
          ""
        )}
      </div>
    </li>
  );
};

export default PostItem;
