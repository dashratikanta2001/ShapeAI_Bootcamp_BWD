import React from "react";

function Footer() {
  var year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright @ {year} By Ratikanta Dash</p>
    </footer>
  );
}
export default Footer;
