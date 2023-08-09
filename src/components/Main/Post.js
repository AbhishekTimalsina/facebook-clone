import React from "react";
import { PostItem } from "./PostItem.js";

export const Post = ({ postContent, postDeleteHandler }) => {
  const posts = postContent.map(function (pos) {
    return <PostItem {...pos} postDeleteHandler={postDeleteHandler} />;
  });

  return <div className="post-container">{posts}</div>;
};
