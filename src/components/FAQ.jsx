import React from "react";
import styled from "styled-components";
import AccordionItem from "./AccordionItem";

function FAQ() {
  return (
    <Container id="faq">
      <Heading>
        <span className="fancy">FAQ</span>
      </Heading>

      <AccordionItem
        title={"How many members can be in a team?"}
        content={
          "A team can have between 2-4 partipants."
        }
        delay={0}
      />
      <AccordionItem
        title={"Who can participate ?"}
        content={"Open to everyone "}
        delay={100}
      />
      <AccordionItem
        title={"Do I need previous design experience?"}
        content={
          "Whether you're a seasoned designer or just starting out, everyone is welcome to participate in the competition."
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
          "Details on submission guidelines will be provided just before the competition begins."
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
