import React, { useContext, useState } from "react";
import { X, Image } from "phosphor-react";
import { ModeContext } from "../../App.js";

export const CreatePost = ({ newPostHandler }) => {
  // const [postText, setPostText] = useState("");
  const [postData, setPostData] = useState({
    text: "",
    auto: true,
  });
  const [mode, setMode] = useContext(ModeContext);
  function inputHandler(e) {
    const { name, value, checked, type } = e.target;

    setPostData((prevData) => {
      return {
        ...prevData,
        [name]: type == "checkbox" ? checked : value,
      };
    });
  }

  function postHandler() {
    if (!postData.text.length > 0) return;
    const newPost = {
      name: "You",
      text: postData.text,
      image: null,
      image: postData.auto ? "https://source.unsplash.com/random" : null,
      id: crypto.randomUUID(),
    };
    console.log(newPost);
    newPostHandler(newPost);
    setMode("");
  }
  function imageHandler(e) {
    let imageFile = e.target.files[0];
  }
  return (
    <div className="create-post_container">
      <span>
        <h2>Create Post</h2>
        <X size="22px" color="#a8abaf" onClick={() => setMode("")} />
      </span>
      <textarea
        placeholder="What's on your mind?"
        value={postData.text}
        name="text"
        onChange={inputHandler}
      />

      <div className="input-image_options">
        <span className="image-options">
          <input
            type="file"
            id="input-file"
            accept="image/png, image/jpeg, image/jpg"
            onChange={imageHandler}
          />
          <label for="input-file">
            <Image size="24px" color="#45bd62" weight="fill" />
            <p>Add Photo</p>
          </label>
        </span>
        <span className="image-options">
          <input
            type="checkbox"
            id="auto-generate_box"
            name="auto"
            checked={postData.auto}
            onChange={inputHandler}
          />
          <label for="auto-generate_box">Auto Add Image</label>
        </span>
      </div>
      <button
        className={postData.text.length > 0 ? "post-active" : ""}
        onClick={postHandler}
      >
        Post
      </button>
    </div>
  );
};
