import styled from "styled-components";
import ScheduleDate from "./ScheduleDate";

function Schedule() {
  return (
    <Container id="schedule">
      <Heading>
        <span className="fancy">Timeline</span>
      </Heading>

      <SubContainer>
      <ScheduleDate
          isRight={true}
          date="2024-05-04"
          title="UI/UX Workshop : Figma Fundamentls"
          description="Join in to know the fundamentals of design using Figma. Get ready to start your journey in the field of UI/UX"
        />
        <ScheduleDate
          isRight={false}
          date="2024-05-05"
          title="Registration Opening"
          description="Registration is now open! Gather your team of 2 to 4 members and get ready for an outstanding hackathon that seamlessly integrates UX design. Join us for a unique experience!"
        />
         <ScheduleDate
          isRight={true}
          date="2024-05-10"
          title="Registration Closing"
          description="Registrations will be officially closing at 12:00PM!! Prepare your team for a mindblowing journey in  UI/UX designing"
        />
         <ScheduleDate
          isRight={false}
          date="2024-05-10"
          title="Awareness Session"
          description="A session that will give a run through of all rules and regulations of the final competition for the registered teams"
        />
        {/* <ScheduleDate
          isRight={false}
          date="2024-01-01"
          title="Inital Round Begins"
          description="You will receive the Hackathon challenge in your email at 00:01 am. The challenge will reveal the feature you need to develop (This will be a part of what you designed in the Designathon phase). You can submit the solution by 11:59 pm on the 20th of August."
        /> */}
        
        {/* <ScheduleDate
          isRight={false}
          date="2024-01-01"
          title="Announcement of the top 10 teams"
          description="You will receive the Hackathon challenge in your email at 00:01 am. The challenge will reveal the feature you need to develop (This will be a part of what you designed in the Designathon phase). You can submit the solution by 11:59 pm on the 20th of August."
        /> */}
        <ScheduleDate
          isRight={true}
          date="2024-05-11"
          title=" The 24 Hour Designathon"
          description="The designathon will commence at 09:30AM. The teams will be given a specific theme that they could work on"
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
