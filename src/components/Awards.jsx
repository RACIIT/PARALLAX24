import React from "react";
import styled from "styled-components";

function Awards() {
  return (
    <Container id="awards">
      <Heading>
        <span className="fancy">Awards</span>
      </Heading>
      <TrophyContainer>
        <TrophyCard lower={"50px"}>
          <TrophyImg src="./src/assets/images/trophy.png"></TrophyImg>
          <Place outlineColor={"#c0c0c0"}>2nd Place</Place>
          <Price>Rs. 10,000</Price>
          <Shine></Shine>
        </TrophyCard>
        <TrophyCard lower={"0px"}>
          <TrophyImg src="./src/assets/images/trophy.png"></TrophyImg>
          <Place outlineColor={"#FFD700"}>Winner</Place>
          <Price>Rs. 15,000</Price>
          <Shine></Shine>
        </TrophyCard>
        <TrophyCard lower={"50px"}>
          <Shine></Shine>
          <TrophyImg src="./src/assets/images/trophy.png"></TrophyImg>
          <Place outlineColor={"#cd7f32"}>3rd Place</Place>
          <Price>Rs. 5,000</Price>
        </TrophyCard>
      </TrophyContainer>
    </Container>
  );
}

export default Awards;

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: flex-start;
  background-color: black;
  flex-direction: column;
  padding-top: 80px;
`;

const Heading = styled.h1.attrs({ className: "heading" })``;

const TrophyContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TrophyCard = styled.div`
  /* min-width: 300px; */
  max-width: 20%;
  height: 450px;
  background-color: rgba(255, 255, 255, 0.075);
  margin: 25px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transform: translateY(${(props) => props.lower});
  box-shadow: inset 5px 5px 20px rgba(255, 255, 255, 0.1);
  /* animation: shimmy 10s ease-in-out infinite; */
  overflow: hidden;
  transition: all 0.25s ease-in-out;

  &:hover {
    transform: translateY(${(props) => props.lower}) scale(1.1);
  }

  @media (max-width: 1024px) {
    max-width: 35%;
  }

  @media (max-width: 768px) {
    max-width: 70%;
    transform: translateY(0px);
    height: 400px;
  }
`;

const Shine = styled.div`
  width: 1000px;
  height: 100px;
  margin-left: -100px;
  transform: rotate(30deg);
  background: -webkit-linear-gradient(
    top,
    transparent,
    rgba(200, 200, 200, 0.1),
    transparent
  );
  position: absolute;
  animation: shine 10s ease-in-out infinite;
`;

const TrophyImg = styled.img`
  width: 80%;

  @media (max-width: 768px) {
    width: 35%;
  }
`;

const Place = styled.p`
  font-size: 32px;
  font-weight: bold;
  color: ${(props) => props.outlineColor};
  //   text-shadow: -2px 0 #111827, 0 -2px #111827, 2px 0 #111827, 0 2px #111827,
  //     2px 2px #111827, -2px -2px #111827, -2px 2px #111827, 2px -2px #111827,
  //     4px 4px };
`;

const Price = styled.p`
  font-size: 25px;
  font-style: italic;
`;
