import React from "react";
import "./Main.css";
import { User } from "phosphor-react";
import { Upload } from "./Upload.js";
import { Post } from "./Post";

export const Main = () => {
  return (
    <main className="main">
      <Upload />
      <Post />
    </main>
  );
};
