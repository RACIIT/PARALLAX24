import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import styled from "styled-components";

function FlipCard({ imgUrl, title, description }) {
  const [flip, setFlip] = useState(false);

  return (
    <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
      <Card onMouseEnter={() => setFlip(true)}>
        <ImgExpl img={imgUrl}></ImgExpl>
        <p>{title}</p>
      </Card>
      <Card onMouseLeave={() => setFlip(false)}>
        <Explan>{description}</Explan>
      </Card>
    </ReactCardFlip>
  );
}

export default FlipCard;

const Card = styled.div.attrs({ className: "stroke-shadow" })`
  width: 25vw;
  height: 250px;
  background-color: rgba(128, 0, 128, 0.25);
  border-radius: 10px;
  margin: 30px 0px;
  box-shadow: inset 5px 5px 20px rgba(255, 255, 255, 0.1);
  background-color: rgba(255, 255, 255, 0.075);
  transition: all 0.25s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: large;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 768px) {
    width: 75vw;
  }
`;

const ImgExpl = styled.div`
  width: 75%;
  height: 25%;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  border-radius: 10px;
  /* background-size: 100% 100%; */
  /* background-color: white; */
`;

const Explan = styled.div``;
