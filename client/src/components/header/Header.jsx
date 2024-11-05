import React, { useEffect, useState } from "react";
import "./Header.css";
import Button from "../Button";
import { Menu, Cancel } from "../Icons";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [sticky, setSticky] = useState(false);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={`header-container ${sticky ? "sticky" : ""}`}>
        <h1 className="logo">ChatBox</h1>
        <ul className="menu">
          <li>Carrer</li>
          <li>About</li>
          <li>Features</li>
        </ul>
        <div className="ctabtn">
          <Button text="Sign In" />
          <Button className="joinbtn" text="Join Now" />
        </div>
        <Menu onClick={toggleMenu} className="menubtn" size={25} />
      </div>
      <div className={`sidebar ${showMenu ? "show" : ""}`}>
        <div className="closebtn">
          <Cancel onClick={toggleMenu} className="closebtn" size={25} />
        </div>
        <ul className="sidebarmenu">
          <li>Carrer</li>
          <li>About</li>
          <li>Features</li>
        </ul>
        <div className="sidebarbtn">
          <Button text="Sign In" />
          <Button className="joinbtn" text="Join Now  " />
        </div>
      </div>
      {showMenu && <div className="overlay" onClick={toggleMenu}></div>}
    </>
  );
}
