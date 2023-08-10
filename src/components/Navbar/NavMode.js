import React, { useContext } from "react";
import { NavContext } from "./Navbar";
export const NavMode = () => {
  const navMode = useContext(NavContext);
  return (
    <>
      <div className={`nav-mode_container ${navMode ? "appear" : ""}`}>
        {navMode}
      </div>
    </>
  );
};
