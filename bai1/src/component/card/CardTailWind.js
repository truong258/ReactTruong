import React from "react";

const CardTailWind = () => {
  return (
    <div className="relative">
      <div className="w-full rounded-lg h-[400px]">
        <img
          src="https://cdn.dribbble.com/userupload/10685105/file/original-2363367a565d6a8353672f1e3cc89bd1.jpg?resize=752x"
          alt="anh"
        />
      </div>
      <div className="card-content">
        <div className="card-top">
          <div className="card-user">
            <img
              className="user-avarta"
              src="https://cdn.dribbble.com/userupload/10685105/file/original-2363367a565d6a8353672f1e3cc89bd1.jpg?resize=752x"
              alt=""
            />
            <div className="user-name">@zndrson</div>
          </div>
          <div className="card-meta">
            <img src="/heart-icon.svg" alt="" />
            <span>256</span>
          </div>
        </div>
        <div className="card-footer">
          <h3 className="card-title">Cosmic Perspective</h3>
          <span className="card-amount">12,000 PSL</span>
        </div>
      </div>
    </div>
  );
};

export default CardTailWind;
