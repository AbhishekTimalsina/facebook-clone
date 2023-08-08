import React, { useEffect } from "react";
import { User } from "phosphor-react";
export const ItemBar = ({ name, children, type }) => {
  let placeHolderStyle = {
    height: "32px",
    width: "32px",
    background: "whitesmoke",
    borderRadius: "50%",
  };

  type && console.log(type);
  // console.log(children && children.$$typeof);

  return (
    <div className="shortcut-item">
      <span className={`${type ? type : "user"}-icon`}>
        {children || <div style={placeHolderStyle}></div>}
      </span>
      <p className="item-name">{name}</p>
    </div>
  );
};
