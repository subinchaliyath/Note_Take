import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer text-center">
    <div className="container">
      <span className="text-muted">Copyright ⓒ {year}</span>
    </div>
  </footer>
  );
}

export default Footer;
