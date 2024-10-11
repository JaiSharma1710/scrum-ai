import React from "react";
import Logo from "./Logo";

const Header = () => {
  return (
    <div className="px-20 fixed top-0 w-screen bg-white">
      <Logo />
    </div>
  );
};

export default Header;
