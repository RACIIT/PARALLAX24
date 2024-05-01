import React from "react";
import styled from "styled-components";
import { SocialIcon } from "react-social-icons";

function Contact() {
  return (
    <Container id="contact">
      {/* <Fade bottom>
        <Heading>
          <span class="fancy">Our Partners</span>
        </Heading>
      </Fade>
      <Sponsors>
        <Sponsor>
          <img src="./src/assets/company.png" alt="" />
          <h3>Bronze Sponsor</h3>
        </Sponsor>
        <Sponsor>
          <img src="./src/assets/company.png" alt="" />
          <h3>Gold Sponsor</h3>
        </Sponsor>
        <Sponsor>
          <img src="./src/assets/company.png" alt="" />
          <h3>Silver Sponsor</h3>
        </Sponsor>
      </Sponsors> */}
      <Contacts>
        {/* <TextBox>
          Made by{" "}
          <a href="https://www.linkedin.com/in/tufayl-asaf-891074200/">
            Tufayl
          </a>
        </TextBox> */}
        <SocialLinks>
          <div>
            <SocialIcon
              style={{
                margin: "0px 5px",
                height: "45px",
                width: "45px",
              }}
              bgColor="transparent"
              fgColor="white"
              url="https://www.instagram.com/rotaract_iit/"
            />
            <SocialIcon
              style={{ margin: "0px 5px", height: "45px", width: "45px" }}
              bgColor="transparent"
              fgColor="white"
              url="https://www.facebook.com/iitrotaract"
            />
            <SocialIcon
              style={{ margin: "0px 5px", height: "45px", width: "45px" }}
              bgColor="transparent"
              fgColor="white"
              url="https://www.youtube.com/@iitrotaract"
            />
            <SocialIcon
              style={{ margin: "0px 5px", height: "45px", width: "45px" }}
              bgColor="transparent"
              fgColor="white"
              url="https://www.tiktok.com/@rotaract_iit"
            />
          </div>
          <div>
            <p>© 2024 Rotaract Club of IIT. All Rights Reserved.</p>
            <p style={{fontSize:"0.7rem"}}><a href="https://www.linkedin.com/in/tufayl-asaf-891074200/">made by tufayl</a></p>
          </div>
        </SocialLinks>
        <img src="./src/assets/RotaractLogo.png" alt="" />
      </Contacts>
    </Container>
  );
}

export default Contact;

const Container = styled.div`
  width: 100vw;
  height: fit-content;
  padding-top: 80px;
  background-color: black;
  overflow: hidden;
  display: flex;
  justify-content: space-even;
  flex-direction: column;
`;

const Heading = styled.h1.attrs({ className: "heading extra" })``;

const Sponsors = styled.div`
  width: 100vw;
  height: fit-content;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 25px 0px 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 25px;
  }
`;

const Sponsor = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  width: 30vw;
  height: 300px;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    padding: 5px;
    border-radius: 12px;
  }

  @media (max-width: 768px) {
    width: 75vw;
  }
`;

const Contacts = styled.div`
  width: 100vw;
  padding: 12px 20px;
  height: fit-content;
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  background-color: rgba(255, 255, 255, 0.075);

  img {
    width: 10%;
  }

  p {
    font-size: 12px;
    text-align: center;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const TextBox = styled.div`
  width: 100%;
  font-size: 12px;

  a {
    color: purple;
    font-weight: bold;
    text-align: center;
  }
`;
