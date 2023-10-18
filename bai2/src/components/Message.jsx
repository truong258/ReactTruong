import React from "react";
import Ava from "../img/1.webp";

const Message = () => {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img src={Ava} alt="" />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>Hello</p>
        <img src={Ava} alt="" />
      </div>
    </div>
  );
};

export default Message;
