import React from "react";
import "./Navbar.css";
import {
  FacebookLogo,
  MagnifyingGlass,
  House,
  UsersThree,
  GameController,
  SquaresFour,
  MessengerLogo,
  Bell,
  User,
} from "phosphor-react";

export const Navbar = () => {
  function clickHandler(e) {
    let element = e.target.closest("span");
    if (!element) return;
    if (
      [...element.classList].includes("active") &&
      [...element.classList].includes("right-icon_container")
    ) {
      element.classList.remove("active");
      return;
    }
    let elClass = [...element.classList][0];
    classRemover(elClass);
    element.classList.toggle("active");
  }

  function classRemover(elClass) {
    let NavElements = [...document.getElementsByClassName(elClass)];

    NavElements.forEach((el) => {
      el.classList.remove("active");
    });
  }

  return (
    <header className="header">
      <nav className="nav" onClick={clickHandler}>
        <div className="left-nav_container">
          <FacebookLogo size="40px" color="#006cba" weight="fill" />
        </div>
        <div className="center-nav_container">
          <span className="center-icon_container active">
            <House size="28px" color="#d9d6d1" weight="fill" />
          </span>
          <span className="center-icon_container">
            <UsersThree size="28px" color="#d9d6d1" weight="fill" />
          </span>
          <span className="center-icon_container">
            <GameController size="28px" color="#d9d6d1" weight="fill" />
          </span>
        </div>
        <div className="right-nav_container">
          <span className="right-icon_container">
            <SquaresFour size="40px" color="#d9d6d1" weight="fill" />
          </span>
          <span className="right-icon_container">
            <MessengerLogo size="40px" color="#d9d6d1" weight="fill" />
          </span>
          <span className="right-icon_container">
            <Bell size="40px" color="#d9d6d1" weight="fill" />
          </span>
          <span className="right-icon_container user-icon">
            <User size="40px" color="#fcfcfd" weight="fill" />
          </span>
        </div>
      </nav>
    </header>
  );
};
