/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import FlipCard from "./FlipCard";

function About() {
  return (
    <Container id="about">
      <Heading>
        <span className="fancy">About</span>
      </Heading>
      <Wrapper>
        <Logo>
          <img src="/images/about.png" alt="" />
        </Logo>
        <Description>
          <div>
            <h2>Glimpse of Parallax 2022</h2>Following the immense success of
            'Parallax 22,' which had over 50 teams take part, we're
            all set to raise the bar for 2024. Inspired by cutting-edge
            technology and innovation, promises to be even more remarkable.
            <br></br>
            <br></br>Parallax24, now in its third consecutive year, is a 24-hour
            UI/UX designathon organized by the Rotaract club of IIT. This event
            has consistently ignited the creativity of participants, pushing
            them to be future thinkers and creators. It's a platform that
            encourages innovative website design and coding. Partipants will
            have the opportunity to join a community of like-minded individuals,
            fostering collaboration and inspiration.
          </div>
        </Description>
      </Wrapper>
      <SubContainer>
        <h1>How it Works?</h1>
        <CardContainer>
          {/* <Zoom delay={150}>
            <FlipCard
              imgUrl={"./src/assets/images/abstract.jpg"}
              title={"Ideathon Phase"}
              description={"In this phase you must die"}
            />
          </Zoom>
          <Zoom delay={350}>
            <FlipCard
              imgUrl={"./src/assets/images/abstract.jpg"}
              title={"Designathon Phase"}
              description={"In this phase you must die"}
            />
          </Zoom>
          <Zoom delay={550}>
            <FlipCard
              imgUrl={"./src/assets/images/abstract.jpg"}
              title={"Hackathon Phase"}
              description={"In this phase you must die"}
            />
          </Zoom> */}
        </CardContainer>
      </SubContainer>
    </Container>
  );
}

export default About;

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: black;
  padding-top: 80px;
`;

const Heading = styled.h1.attrs({ className: "heading" })``;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1150px) {
    flex-direction: column;
  }
`;

const SubContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
`;

const Logo = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 120%;
  }

  @media (max-width: 1150px) {
    img {
      max-width: 110%;
    }
  }
`;

const Description = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  line-height: 1.5;

  div {
    width: 60%;
    color: rgba(150, 150, 150);

    h2 {
      margin-bottom: 20px;
    }
  }

  @media (max-width: 768px) {
    div {
      width: 80%;
      font-size: 12px;
    }
  }
`;

const CardContainer = styled.div`
  width: 100vw;
  height: fit-content;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  margin: 35px;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

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

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    width: 75vw;
  }
`;
