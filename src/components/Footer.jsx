import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer class="footer text-center">
    <div class="container">
      <span class="text-muted">Copyright ⓒ {year}</span>
    </div>
  </footer>
  );
}

export default Footer;
