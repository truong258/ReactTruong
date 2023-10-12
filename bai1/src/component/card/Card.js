import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  position: relative;
`;
const CardImage = styled.div`
  height: 400px;
  width: 400px;
  border-radius: 8px;
  margin: 25px;
`;
const CardImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`;

const CardContent = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0%);
  bottom: 0;
  background-color: white;
  z-index: 10;
  border-radius: 20px;
  padding: 20px;
`;
const Card = () => {
  return (
    <StyledCard>
      <CardImage>
        <CardImg
          src="https://cdn.dribbble.com/userupload/10685105/file/original-2363367a565d6a8353672f1e3cc89bd1.jpg?resize=752x"
          alt="anh"
        />
      </CardImage>
      <CardContent>
        <div>
          <div>
            <img
              src="https://cdn.dribbble.com/userupload/10685105/file/original-2363367a565d6a8353672f1e3cc89bd1.jpg?resize=752x"
              alt=""
            />
            <span>@zndrson</span>
          </div>
          <div>256</div>
        </div>
        <div>
          <h3>Cosmic Perspective</h3>
          <span>12,000 PSL</span>
        </div>
      </CardContent>
    </StyledCard>
  );
};

export default Card;
