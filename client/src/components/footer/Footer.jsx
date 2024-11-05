import React from "react";
import "./Footer.css";
import NewsLetter from "../newsletter/NewsLetter";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footercontainer">
          <NewsLetter />
          <hr />
          <div className="footmenugridcontainer">
            <ul className="footmenuitems">
              <h3>Company</h3>
              <li>About us</li>
              <li>New Features</li>
              <li>New Community</li>
            </ul>
            <ul className="footmenuitems">
              <h3>Marketing</h3>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Cookie Setting</li>
            </ul>
            <ul className="footmenuitems">
              <h3>Categories</h3>
              <li>Command Center</li>
              <li>Explore Room</li>
              <li>Net Script</li>
            </ul>
            <ul className="footmenuitems">
              <h3>Product</h3>
              <li>Work Bench</li>
              <li>Data Engineer</li>
              <li>Customer Success</li>
            </ul>
            <ul className="footmenuitems">
              <h3>Legal</h3>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Cookie Setting</li>
            </ul>
          </div>
        </div>
        <div className="footbottom">copyright @chatbox</div>
      </div>
    </>
  );
}
