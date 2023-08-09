import React, { useState } from "react";
import { Navbar } from "./components/Navbar/Navbar.js";
import { ShortCutBar } from "./components/Shortcuts/Shortcuts.js";
import { Main } from "./components/Main/Main.js";
import { FriendList } from "./components/FriendList/FriendList.js";
import "./App.css";
import { createContext } from "react";

export const ModeContext = createContext();

export const App = () => {
  const [mode, setMode] = useState("");

  return (
    <>
      <ModeContext.Provider value={[mode, setMode]}>
        <Navbar />
        <section className={`section-bottom ${mode}`}>
          <ShortCutBar />
          <Main />
          <FriendList />
        </section>
      </ModeContext.Provider>
    </>
  );
};
