import React from "react";
import Ava from "../img/1.webp";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Webchat</span>
      <div className="user">
        <img src={Ava} alt="" />
        <span>User</span>
        <button>Log out</button>
      </div>
    </div>
  );
};

export default Navbar;
