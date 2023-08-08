import React from "react";
import { User, VideoCamera, Image } from "phosphor-react";
import { ItemBar } from "../ItemBar";

export const Upload = () => {
  return (
    <div className="container">
      <div className="upload-area">
        <span className="user-icon">
          <User size="40px" color="white" weight="fill" />
        </span>
        <input
          type="text"
          className="content-input"
          placeholder="What's on your mind?"
        />
      </div>
      <div className="upload-action_area">
        <ItemBar name="Live Video" type="upload">
          <VideoCamera size="24px" color="#f02849" weight="fill" />
        </ItemBar>
        <ItemBar name="Photo/video" type="upload">
          <Image size="24px" color="#45bd62" weight="fill" />
        </ItemBar>
      </div>
    </div>
  );
};
