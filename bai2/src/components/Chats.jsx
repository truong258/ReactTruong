import React from "react";
import Ava from "../img/1.webp";

const Chats = () => {
  return (
    <div className="chats">
      <div className="userChat">
        <img src={Ava} alt="" />
        <div className="userChatInfo">
          <span>Jan</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="userChat">
        <img src={Ava} alt="" />
        <div className="userChatInfo">
          <span>Jan</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="userChat">
        <img src={Ava} alt="" />
        <div className="userChatInfo">
          <span>Jan</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  );
};

export default Chats;
