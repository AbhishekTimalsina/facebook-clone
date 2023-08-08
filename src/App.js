import React from "react";
import { Navbar } from "./components/Navbar/Navbar.js";
import { ShortCutBar } from "./components/Shortcuts/Shortcuts.js";
import { Main } from "./components/Main/Main.js";
import { FriendList } from "./components/FriendList/FriendList.js";
import "./App.css";

export const App = () => {
  return (
    <>
      <Navbar />
      <section className="section-bottom">
        <ShortCutBar />
        <Main />
        <FriendList />
      </section>
    </>
  );
};
