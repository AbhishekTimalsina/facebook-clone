import React from "react";
import { PostItem } from "./PostItem.js";

export const Post = ({
  postContent,
  postDeleteHandler,
  postImpressionsHandler,
}) => {
  const posts = postContent.map(function (pos) {
    return (
      <PostItem
        {...pos}
        postDeleteHandler={postDeleteHandler}
        postImpressionsHandler={postImpressionsHandler}
      />
    );
  });

  return <div className="post-container">{posts}</div>;
};
