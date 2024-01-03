import React from "react";
import styled from "styled-components";
import ScheduleDate from "./ScheduleDate";

function Schedule() {
  return (
    <Container id="schedule">
      <Heading>
        <span class="fancy">Timeline</span>
      </Heading>

      <SubContainer>
        <ScheduleDate
          isRight={false}
          date="2023-05-09"
          title="Registration Opening"
          description="Registrations are now open for the Tech Triathlon! Gather your team
          members and gear up to experience a one-of-a-kind hackathon that
          unifies software engineering, artificial intelligence and UX design."
        />
        <ScheduleDate
          isRight={true}
          date="2023-01-01"
          title="Registration Opening"
          description="You will receive the Hackathon challenge in your email at 00:01 am. The challenge will reveal the feature you need to develop (This will be a part of what you designed in the Designathon phase). You can submit the solution by 11:59 pm on the 20th of August."
        />
        <ScheduleDate
          isRight={false}
          date="2024-01-01"
          title="Registration Opening"
          description="You will receive the Hackathon challenge in your email at 00:01 am. The challenge will reveal the feature you need to develop (This will be a part of what you designed in the Designathon phase). You can submit the solution by 11:59 pm on the 20th of August."
        />
        <ScheduleDate
          isRight={true}
          date="2024-01-01"
          title="Registration Opening"
          description="You will receive the Hackathon challenge in your email at 00:01 am. The challenge will reveal the feature you need to develop (This will be a part of what you designed in the Designathon phase). You can submit the solution by 11:59 pm on the 20th of August."
        />
      </SubContainer>
    </Container>
  );
}

export default Schedule;

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

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-top: 35px;
`;
