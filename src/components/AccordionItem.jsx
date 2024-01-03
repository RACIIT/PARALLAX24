import React, { useState } from "react";
import styled from "styled-components";

// Styled components for the accordion
const AccordionContainer = styled.div`
  width: 75%;
  margin: 0 auto;
`;

const AccordionItem = styled.div`
  border: 1px solid #999;
  border-radius: 4px;
  margin-bottom: 8px;
`;

const AccordionHeader = styled.div`
  background-color: rgba(255, 255, 255, 0.075);
  color: white;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
`;

const AccordionContent = styled.div`
  padding: 10px;
  display: ${(props) => (props.open ? "block" : "none")};
`;

// Accordion component
const Accordion = ({ title, content, delay }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AccordionContainer>
      <AccordionItem>
        <AccordionHeader onClick={toggleAccordion}>{title}</AccordionHeader>
        <AccordionContent open={isOpen}>{content}</AccordionContent>
      </AccordionItem>
    </AccordionContainer>
  );
};

export default Accordion;
