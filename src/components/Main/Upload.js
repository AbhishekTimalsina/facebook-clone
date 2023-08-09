import React, { useContext } from "react";
import { User, VideoCamera, Image } from "phosphor-react";
import { CreatePost } from "./CreatePost.js";
import { ItemBar } from "../ItemBar";
import { ModeContext } from "../../App.js";

export const Upload = ({ newPostHandler, modeChangeHandler }) => {
  const [mode, setMode] = useContext(ModeContext);

  function changeMode() {
    setMode("edit");
  }

  return (
    <>
      {mode === "edit" && <CreatePost newPostHandler={newPostHandler} />}
      <div className="container">
        <div className="upload-area">
          <span className="user-icon">
            <User size="40px" color="white" weight="fill" />
          </span>
          <div className="content-input" onClick={changeMode}>
            What's in your mind?
          </div>
        </div>
        <div className="upload-action_area">
          <ItemBar name="Live Video" type="upload" event={changeMode}>
            <VideoCamera size="24px" color="#f02849" weight="fill" />
          </ItemBar>

          <ItemBar name="Photo/video" type="upload" event={changeMode}>
            <Image size="24px" color="#45bd62" weight="fill" />
          </ItemBar>
        </div>
      </div>
    </>
  );
};
