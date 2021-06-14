import React from "react";

const date = new Date();
const getYear = date.getFullYear();

function Footer() {
  return (
    <footer>
      <p>© Copyright {getYear}</p>
    </footer>
  );
}

export default Footer;