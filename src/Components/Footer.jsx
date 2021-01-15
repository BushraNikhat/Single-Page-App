import React from "react";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <>
      <footer className="footer">
        <h4 className="text-center footer-content">
          © {date} Turning Point, All Rights Reserved
        </h4>
      </footer>
    </>
  );
};
export default Footer;
