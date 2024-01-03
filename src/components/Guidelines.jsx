import React from "react";
import styled from "styled-components";

function Guidelines() {
  return (
    <Container id="guidelines">
      <Heading>
        <span class="fancy">Guidelines</span>
      </Heading>
    </Container>
  );
}

export default Guidelines;

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: black;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding-top: 80px;
`;

const Heading = styled.h1.attrs({ className: "heading extra" })``;
