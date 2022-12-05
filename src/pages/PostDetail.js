import { useParams } from "react-router-dom";

const PostDetail = () => {
  const params = useParams();
  const { postid } = params;
  // use post id to fecth data and send it to child component - SinglePost

  return <div>postId: {postid}</div>;
};

export default PostDetail;
