import React from "react";
import "./Shortcuts.css";
import { ItemBar } from "../ItemBar";
import { User } from "phosphor-react";
import among from "../../assets/among.png";
import game from "../../assets/joystick.png";

export const ShortCutBar = () => {
  return (
    <aside className="shortcut-container sticky-side_container">
      <ItemBar name="Atmaram Bhide">
        <User size="32px" color="white" weight="fill" />
      </ItemBar>
      <ItemBar name="Among Us">
        <img src={among} style={{ height: "32px" }} />
      </ItemBar>
      <ItemBar name="Game">
        <img src={game} style={{ height: "32px" }} />
      </ItemBar>
      <ItemBar name="Something" />
    </aside>
  );
};
