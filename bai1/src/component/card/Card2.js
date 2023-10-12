import React from "react";
import styled, { css } from "styled-components";

const StyledCard = styled.div`
  position: relative;
  .card-image {
    height: 400px;
    width: 100%;
    border-radius: 8px;
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: inherit;
    }
  }
  .card-content {
    position: absolute;
    width: 80%;
    left: 50%;
    transform: translate(-50%, 50%);
    bottom: 0;
    background-color: white;
    z-index: 10;
    border-radius: 20px;
    padding: 20px;
    .card-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 30px;
      .card-user {
        display: flex;
        align-items: center;
        column-gap: 12px;
        .user-avarta {
          width: 30px;
          height: 30px;
          border-radius: 100rem;
          object-fit: cover;
          flex-shrink: 0;
        }
        .user-name {
          font-weight: 300;
          font-size: 16px;
          color: ${(props) => props.theme.orange};
        }
      }
      .card-meta {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 12px;
      }
    }
    .card-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .card-title {
        font-size: 18px;
        font-weight: 500;
        color: ${(props) => props.theme.color.blue};
      }
      .card-amount {
        font-size: ${(props) => props.fontSize || "18px"};
        font-weight: bold;

        ${(props) =>
          props.secondary &&
          css`
            background: linear-gradient(
              87deg,
              #2cccff 1.38%,
              #eee 64.35%,
              #fc2872 119.91%
            );
          `};
        ${(props) =>
          !props.secondary &&
          css`
            background: linear-gradient(
              87deg,
              #7d6aff 1.38%,
              #ffb86c 64.35%,
              #fc2872 119.91%
            );
          `};
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
      }
    }
  }
`;

const Container = styled.div`
  height: 500px;
  background-color: #f5dcdc;
  /* padding: 10px; */
  width: 400px;
`;

const Area = styled.div`
  /* height: 450px;
  display: flex;
  justify-content: center; */
`;
// const StyledCard = styled.div`
//   position: relative;
//   width: 400px;
//   /* padding: 25px; */
// `;
// const CardImage = styled.div`
//   height: 400px;
//   width: 100%;
//   border-radius: 8px;
// `;
// const CardImg = styled.img`
//   display: block;
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   border-radius: inherit;
// `;

// const CardContent = styled.div`
//   position: absolute;
//   width: 80%;

//   left: 50%;
//   transform: translate(-50%, 50%);
//   bottom: 0;
//   background-color: white;
//   z-index: 10;
//   border-radius: 20px;
//   padding: 20px;
// `;

// const CardTop = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin-bottom: 30px;
// `;
// const CardUser = styled.div`
//   display: flex;
//   align-items: center;
//   column-gap: 12px;
// `;

// const UserAvarta = styled.img`
//   width: 30px;
//   height: 30px;
//   border-radius: 100rem;
//   object-fit: cover;
//   flex-shrink: 0;
// `;
// const UserName = styled.span`
//   font-weight: 300;
//   font-size: 16px;
//   color: #333;
// `;

// const CardFooter = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;
// const CardTitle = styled.h3`
//   font-size: 18px;
//   font-weight: 500;
//   color: black;
// `;
// const CardAmount = styled.span`
//   font-size: ${(props) => props.fontSize || "18px"};
//   font-weight: bold;

//   ${(props) =>
//     props.secondary &&
//     css`
//       background: linear-gradient(
//         87deg,
//         #2cccff 1.38%,
//         #eee 64.35%,
//         #fc2872 119.91%
//       );
//     `};
//   ${(props) =>
//     !props.secondary &&
//     css`
//       background: linear-gradient(
//         87deg,
//         #7d6aff 1.38%,
//         #ffb86c 64.35%,
//         #fc2872 119.91%
//       );
//     `};
//   background-clip: text;
//   -webkit-background-clip: text;
//   color: transparent;
// `;
// const CardMeta = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   gap: 12px;
// `;

const Card2 = (props) => {
  return (
    <Container>
      <Area>
        <StyledCard secondary={props.secondary} fontSize={props.fontSize}>
          <div className="card-image">
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
            <dive className="card-footer">
              <h3 className="card-title">Cosmic Perspective</h3>
              <span className="card-amount">12,000 PSL</span>
            </dive>
          </div>
        </StyledCard>
        {/* <StyledCard>
          <CardImage>
            <CardImg
              src="https://cdn.dribbble.com/userupload/10697627/file/original-8bd3672349e8eb6667c20280960ffaad.jpg?resize=752x"
              alt="anh"
            />
          </CardImage>
          <CardContent>
            <CardTop>
              <CardUser>
                <UserAvarta
                  src="https://cdn.dribbble.com/userupload/10697627/file/original-8bd3672349e8eb6667c20280960ffaad.jpg?resize=752x"
                  alt=""
                />
                <span>@zndrson</span>
              </CardUser>
              <div>256</div>
            </CardTop>
            <div>
              <h3>Cosmic Perspective</h3>
              <span>12,000 PSL</span>
            </div>
          </CardContent>
        </StyledCard>
        <StyledCard>
          <CardImage>
            <CardImg
              src="https://cdn.dribbble.com/userupload/10688497/file/original-f32a4046f87aa10913c935f303a582a2.png?resize=752x"
              alt="anh"
            />
          </CardImage>
          <CardContent>
            <CardTop>
              <CardUser>
                <UserAvarta
                  src="https://cdn.dribbble.com/userupload/10688497/file/original-f32a4046f87aa10913c935f303a582a2.png?resize=752x"
                  alt=""
                />
                <span>@zndrson</span>
              </CardUser>
              <div>256</div>
            </CardTop>
            <div>
              <h3>Cosmic Perspective</h3>
              <span>12,000 PSL</span>
            </div>
          </CardContent>
        </StyledCard> */}
      </Area>
    </Container>
  );
};

export default Card2;
