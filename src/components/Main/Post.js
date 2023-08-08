import React from "react";
import { PostItem } from "./PostItem.js";
import { postData } from "../../postData.js";

export const Post = () => {
  const posts = postData.map(function (pos) {
    // return <PostItem name={pos.name} text={pos.text} />;
    return <PostItem {...pos} />;
  });
  console.log(posts);

  let a = [];
  for (let i = 0; i < 10; i++) {
    a.push(<PostItem />);
  }
  console.log(a);

  return <div className="post-container">{posts}</div>;
};
