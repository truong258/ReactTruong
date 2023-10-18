import React from "react";
import Ava from "../img/1.webp";

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Find a user" />
      </div>
      <div className="userChat">
        <img src={Ava} alt="" />
        <div className="userChatInfo">
          <span>Jan</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
