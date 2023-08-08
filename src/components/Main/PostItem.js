import React from "react";
import { User, DotsThreeOutline, X, ThumbsUp, Chat } from "phosphor-react";

export const PostItem = function ({ name, text, image }) {
  function imageGenerator() {
    if (image) {
      let imageParam = text.split(" ").splice(-2);
      let imageUrl = `${image}?${imageParam}`;
      return imageUrl;
    }
  }

  return (
    <div className="post-card_container container">
      <div className="post-card_top">
        <div className="post-top_left">
          <span>
            <span className="user-icon">
              <User size="40px" color="white" weight="fill" />
            </span>
          </span>
          <span>
            <h3 className="post-creater">{name}</h3>
            <p className="upload-time">2 days ago</p>
          </span>
        </div>
        <div className="post-right">
          <span className="rigt-icon_wrapper">
            <span>
              <DotsThreeOutline size="22px" color="#a8abaf" weight="fill" />
            </span>
            <span>
              <X size="22px" color="#a8abaf" />
            </span>
          </span>
        </div>
      </div>
      <div className="post-card_bottom">
        <div className="post-content_container">
          <p className="post-text">{text}</p>
          {image && <img className="post-image" src={imageGenerator()} />}
        </div>
        <div className="interaction-container">
          <span className="interaction">
            <ThumbsUp size="20px" color="#abaeb3" weight="bold" />
            <p>Like</p>
          </span>
          <span className="interaction">
            <Chat size="20px" color="#abaeb3" weight="bold" />
            <p>Comment</p>
          </span>
        </div>
      </div>
    </div>
  );
};
