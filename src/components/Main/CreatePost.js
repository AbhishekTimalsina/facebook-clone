import React, { useContext, useState, useRef } from "react";
import { X, Image } from "phosphor-react";
import { ModeContext } from "../../App.js";

export const CreatePost = ({ newPostHandler }) => {
  const textRef = useRef(null);
  const inputRef = useRef(null);
  const [postData, setPostData] = useState({
    text: "",
    image: null,
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
    if (!postData.text.length > 0) {
      // console.log(textRef);
      textRef.current.focus();
      return;
    }
    const newPost = {
      name: "You",
      text: postData.text,
      auto: postData.auto,
      image: postData.image,
      id: crypto.randomUUID(),
      impressions: 0,
    };

    newPostHandler(newPost);
    setMode("");
  }
  function addImageHandler(e) {
    let imageFile = e.target.files[0];
    // postData.image = URL.createObjectURL(imageFile);
    const reader = new FileReader();
    // let lol = imageFile.readAsDataURL(); //accepts as blob url but since blob lifespan is short we do base64(lack of server hehe)
    // console.log(lol);
    reader.onload = function (e) {
      setPostData((prevData) => {
        return {
          ...prevData,
          image: reader.result,
          auto: false,
        };
      });
    };

    reader.readAsDataURL(imageFile);
  }

  function removeImageHandler() {
    setPostData((prevData) => {
      return {
        ...prevData,
        image: null,
      };
    });
    // console.log(inputRef.current.value);
    inputRef.current.value = null;
  }

  return (
    <div className="create-post_container">
      <span>
        <h2>Create Post</h2>
        <X size="22px" color="#a8abaf" onClick={() => setMode("")} />
      </span>
      <div className="content-holder">
        <textarea
          ref={textRef}
          placeholder="What's on your mind?"
          value={postData.text}
          name="text"
          onChange={inputHandler}
        />
        {postData.image && (
          // added event listener to after element by adding event to the whole div but demolishing the event through css on entire div and only enabling pointer events in the after pseudo element
          <div className="image-area" onClick={removeImageHandler}>
            <img src={postData.image} width="120px" height="120px" />
          </div>
        )}
      </div>

      <div className="input-image_options">
        <span className="image-options">
          <input
            type="file"
            id="input-file"
            accept="image/png, image/jpeg, image/jpg"
            ref={inputRef}
            onChange={addImageHandler}
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
