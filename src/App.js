import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "./components/layout/Layout";
import AllPost from "./pages/AllPost";
import PostDetail from "./pages/PostDetail";
import AddPost from "./pages/AddPost";
import MyPost from "./pages/MyPost";
import EditPost from "./pages/EditPost";

const App = () => {
  return (
    <React.Fragment>
      <Layout>
        <Routes>
          <Route path="/allpost" element={<AllPost />} />
          <Route path="/allpost/:postid" element={<PostDetail />} />
          <Route path="/addpost" element={<AddPost />} />
          <Route path="/mypost" element={<MyPost />} />
          <Route path="/mypost/:postid" element={<EditPost />} />
          <Route path="*" element={<Navigate to="/allpost" replace />} />
        </Routes>
      </Layout>
    </React.Fragment>
  );
};

export default App;
