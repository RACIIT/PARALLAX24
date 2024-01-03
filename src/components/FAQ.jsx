import React from "react";
import styled from "styled-components";
import AccordionItem from "./AccordionItem";

function FAQ() {
  return (
    <Container id="faq">
      <Heading>
        <span class="fancy">FAQ</span>
      </Heading>

      <AccordionItem
        title={"How many members can be in one Team?"}
        content={
          "We allow teams to apply who have no less than 2 and no more than 4 members."
        }
        delay={0}
      />
      <AccordionItem
        title={"Who can participate ?"}
        content={"Open to everyone "}
        delay={100}
      />
      <AccordionItem
        title={"How's the judging go down?"}
        content={
          "Winners will be announced from the top 10 teams, our panel of design experts will evaluate based on creativity, functionality, user experience, and theme adherence."
        }
        delay={200}
      />
      <AccordionItem
        title={"Do I need previous design experience?"}
        content={
          "Whether you're a seasoned designer or just starting, everyone is welcome to bring their unique perspective to the table."
        }
        delay={300}
      />
      <AccordionItem
        title={"What tools can I use?"}
        content={"We will be utilizing Figma for this competition."}
        delay={400}
      />
      <AccordionItem
        title={"How do I submit my design?"}
        content={
          "Details on submission guidelines will be provided just before the initial round begins."
        }
        delay={400}
      />
    </Container>
  );
}

export default FAQ;

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: black;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding-top: 80px;
`;

const Heading = styled.h1.attrs({ className: "heading" })``;
