import React from "react";
import ReactDOM from "react-dom";

let date = new Date();
let year = date.getFullYear();

function Footer() {
  return (
    <footer>
      <p>copyright {year} Jonesh</p>
    </footer>
  );
}

export default Footer;
