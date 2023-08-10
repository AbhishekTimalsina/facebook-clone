import React from "react";
import { User, DotsThreeOutline, X, ThumbsUp, Chat } from "phosphor-react";

export const PostItem = function ({
  name,
  text,
  image,
  id,
  auto,
  postDeleteHandler,
  impressions,
  postImpressionsHandler,
}) {
  function imageGenerator() {
    // check if user have selected image by themself and if user have put the auto image mode on
    if (image) {
      return image;
    }
    if (auto) {
      let imageParam = text.split(" ").splice(-2);

      let imageUrl = `https://source.unsplash.com/random?${imageParam}`;
      return imageUrl;
    }
    // return image;
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
            <span onClick={() => postDeleteHandler(id)}>
              <X size="22px" color="#a8abaf" />
            </span>
          </span>
        </div>
      </div>
      <div className="post-card_bottom">
        <div className="post-content_container">
          <p className="post-text">{text}</p>
          {(image || auto) && ( // checks if auto or image is true and if it is true then generate the adds the image
            <img className="post-image" src={imageGenerator()} />
          )}
        </div>
        <div className="interaction-container">
          <span
            className="interaction"
            onClick={() => postImpressionsHandler(id)}
          >
            <ThumbsUp size="20px" color="#abaeb3" weight="bold" />
            <p>Like ({impressions})</p>
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
