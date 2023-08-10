import React, { useContext, useEffect, useState } from "react";
import "./Main.css";
import { Upload } from "./Upload.js";
import { Post } from "./Post.js";
import { postData } from "../../postData.js";
import { ModeContext } from "../../App.js";

export const Main = () => {
  const [posts, setPosts] = useState(
    JSON.parse(localStorage.getItem("postData")) || postData
  );
  const [mode, setMode] = useContext(ModeContext);

  useEffect(() => {
    localStorage.setItem("postData", JSON.stringify(posts));
  }, [posts]);

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
  function addImpressions(id) {
    setPosts((prevPosts) => {
      return prevPosts.map((post) => {
        if (post.id == id) {
          return { ...post, impressions: post.impressions + 1 };
        } else {
          return { ...post };
        }
      });
    });
  }

  return (
    <main className="main">
      <Upload newPostHandler={addPost} />
      <Post
        postContent={posts}
        postDeleteHandler={deletePost}
        postImpressionsHandler={addImpressions}
      />
    </main>
  );
};
