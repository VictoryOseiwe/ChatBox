import React, { useEffect, useState } from "react";
import "./Header.css";
import Button from "../Button";
import { Menu, Cancel } from "../Icons";
import { HashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [sticky, setSticky] = useState(false);
  const navigate = useNavigate();

  function toAuthPage() {
    navigate("/register");
  }

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
        <NavLink to="/">
          <h1 className="logo">ChatBox</h1>
        </NavLink>
        <ul className="menu">
          <li>
            {" "}
            <HashLink>Carrer</HashLink>
          </li>
          <li>
            <HashLink>About</HashLink>
          </li>
          <li>
            <HashLink to={"/#card"}>Features</HashLink>
          </li>
        </ul>
        <div className="ctabtn">
          <Button onClick={() => navigate("/login")} text="Sign In" />
          <Button className="joinbtn" text="Join Now" onClick={toAuthPage} />
        </div>
        <Menu onClick={toggleMenu} className="menubtn" size={25} />
      </div>
      <div className={`sidebar ${showMenu ? "show" : ""}`}>
        <div className="closebtn">
          <Cancel onClick={toggleMenu} className="closebtn" size={25} />
        </div>
        <ul className="sidebarmenu">
          <li>
            <HashLink>Carrer</HashLink>
          </li>
          <li>
            <HashLink>About</HashLink>
          </li>
          <li>
            <HashLink to={"/#card"}>Features</HashLink>
          </li>
        </ul>
        <div className="sidebarbtn">
          <Button text="Sign In" />
          <Button className="joinbtn" text="Join Now" />
        </div>
      </div>
      {showMenu && <div className="overlay" onClick={toggleMenu}></div>}
    </>
  );
}
