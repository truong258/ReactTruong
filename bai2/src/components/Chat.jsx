import React from "react";
import cam from "../img/cam.png";
import add from "../img/add.png";
import more from "../img/more.png";
import Messeages from "./Messeages";
import Input from "./Input";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Jan</span>
        <div className="chatIcons">
          <img src={cam} alt="" />
          <img src={add} alt="" />
          <img src={more} alt="" />
        </div>
      </div>
      <Messeages></Messeages>
      <Input></Input>
    </div>
  );
};

export default Chat;
