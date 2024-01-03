import React, { useEffect, useState } from "react";
import styled from "styled-components";

import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "../assets/FlipClock.css";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";

function Home() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = "December, 17, 2023";

  useEffect(() => {
    const interval = setInterval(() => {
      const time = Date.parse(deadline) - Date.now();

      setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((time / 1000 / 60) % 60));
      setSeconds(Math.floor((time / 1000) % 60));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);

  return (
    <Container id="home">
      <Content>
        <BackgroundVideo autoPlay loop muted>
          <source src="./src/assets/videos/video2.mp4" type="video/mp4" />
        </BackgroundVideo>
        <Slogan>
          The <Extra>Ultimate</Extra> 24 Hour Competition
        </Slogan>
        <Timer>
          <FlipClockCountdown
            className="flip-clock"
            to={deadline}
            labels={["Days", "Hours", "Minutes", "Seconds"]}
            labelStyle={{
              fontSize:
                screenSize.width > 768 ? 30 : screenSize.width < 500 ? 10 : 15,
              fontWeight: 500,
              fontFamily: "monospace",
              backgroundColor: "transparent",
              color: "#fff",
              padding:
                screenSize.width > 768 ? 10 : screenSize.width < 500 ? 7 : 8,
              borderRadius: 6,
            }}
            digitBlockStyle={{
              width:
                screenSize.width > 768 ? 75 : screenSize.width < 500 ? 35 : 50,
              height:
                screenSize.width > 768 ? 100 : screenSize.width < 500 ? 50 : 75,
              fontSize:
                screenSize.width > 768 ? 50 : screenSize.width < 500 ? 30 : 40,
              fontWeight: "bold",
              fontFamily: "monospace",
            }}
            dividerStyle={{ color: "gray", height: 0.1 }}
            separatorStyle={{ color: "white", size: "6px" }}
            duration={0.2}
          >
            <h1>Registrations Closed</h1>
          </FlipClockCountdown>
          {new Date().getTime() < deadline && (
            <Text>until registration closes</Text>
          )}
        </Timer>
        <ButtonGroup>
          <RegisterButton href="#register">Register Now</RegisterButton>
        </ButtonGroup>
      </Content>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 2;
`;

const BackgroundVideo = styled.video`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Title = styled.span`
  letter-spacing: 2px;
  font-size: 20px;
  @media (max-width: 425px) {
    font-size: 14px;
  }
`;

const Slogan = styled.span`
  font-size: 40px;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;

  @media (max-width: 425px) {
    font-size: 25px;
  }
`;

const Extra = styled.text`
  font-weight: bold;
  font-style: italic;
  background: rgb(0, 219, 255);
  background: linear-gradient(
    90deg,
    rgba(0, 219, 255, 1) 0%,
    rgba(0, 255, 163, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Timer = styled.div`
  margin: 40px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Text = styled.span`
  font-size: 22px;
  margin-top: 40px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-top: 20px;
`;

const ExploreButton = styled.a`
  margin: 10px 25px;
  text-decoration: none;
  border: 3px solid white;
  padding: 15px 25px;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  transition: all ease-in-out 0.2s;
`;

const RegisterButton = styled(ExploreButton)`
  color: white;
  background-color: transparent;
  border-color: white;
  font-weight: 600;

  &:hover {
    transform: scale(1.1);
    background-color: white;
    color: black;
  }
`;

const Closed = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
