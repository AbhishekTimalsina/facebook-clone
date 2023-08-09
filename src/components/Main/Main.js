import React, { useContext, useEffect, useState } from "react";
import "./Main.css";
import { Upload } from "./Upload.js";
import { Post } from "./Post.js";
import { postData } from "../../postData.js";
import { ModeContext } from "../../App.js";

export const Main = () => {
  const [posts, setPosts] = useState([]);
  const [mode, setMode] = useContext(ModeContext);

  useEffect(() => {
    setPosts(postData);
  }, []);

  function deletePost(id) {
    setPosts((prevPosts) => {
      return prevPosts.filter((post) => post.id != id);
    });
  }

  function addPost(newPost) {
    setPosts((prevPost) => {
      return [newPost, ...prevPost];
    });
  }

  function changeMode(mode) {
    setMode(mode);
  }

  return (
    <main className="main">
      <Upload newPostHandler={addPost} />
      <Post postContent={posts} postDeleteHandler={deletePost} />
    </main>
  );
};
