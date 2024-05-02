import { useState, useEffect } from "react";
import styled from "styled-components";
import '../index.css';

function Workshop() {
  return (
    <Container id="Workshop">
      {/* <Heading>
        <span className="fancy">UI/UX Workshop - Figma Fundamentals</span>
      </Heading> */}
      {/* <Wrapper> */}
        <Logo>
          <img src="/images/parallax.jpeg" alt="" />
        </Logo>
      {/* </Wrapper>  */}
      
    </Container>
  );
}

export default Workshop;

const Container = styled.div`
  width: 100vw;
  height: 40vh;

  background-color: black; // Assuming similar background color
  display: flex;
  // flex-direction:column;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;



  @media (max-width: 1150px) {
    img {
      width: 50%;
    }
  }
  @media (min-width: 768px) {
    img {
      margin: 0px;
      width: 60%;
      min-width: 40%;
      min-height: 40%;
    }
    @media (max-width: 368px) {
      img {
        width: 90%;
        min-height: 40%;
      }  
  }
`;
