/* eslint-disable react/prop-types */
import styled from "styled-components";

function ScheduleDate({ date, title, description, isRight }) {
  const currentDate = new Date().toISOString().split("T")[0];

  const crossClass = currentDate > date ? "cross-heading" : "";

  if (isRight) {
    return (
      <Section className={crossClass}>
        <RDetails>
          {date !== "To Be Announced" ? (
            <h3>{new Date(date).toDateString()}</h3>
          ) : (
            <h3>{date}</h3>
          )}

        </RDetails>
        <CenterPiece>
          <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
            <circle
              cx="40"
              cy="25"
              r="6"
              stroke="#00FDCF"
              strokeWidth="2.5"
              fill="none"
            />
          </svg>
          <Line></Line>
        </CenterPiece>
        <LDetails>
          <h3 style={{ fontWeight: "normal" }}>{title}</h3>

          <p>{description}</p>
        </LDetails>
      </Section>
    );
  } else {
    return (
      <Section className={crossClass}>
        <RDetails>
          <h3 style={{ fontWeight: "normal" }}>{title}</h3>

          <div>
            <p>{description}</p>
          </div>
        </RDetails>
        <CenterPiece>
          <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
            <circle
              cx="40"
              cy="25"
              r="6"
              stroke="#00FDCF"
              strokeWidth="2.5"
              fill="none"
            />
          </svg>
          <Line></Line>
        </CenterPiece>
        <LDetails>
          <h3>{new Date(date).toDateString()}</h3>
        </LDetails>
      </Section>
    );
  }
}

export default ScheduleDate;

const Section = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: row;

  h3 {
    font-weight: bold;
  }

  @media (max-width: 425px) {
    h3 {
      font-size: 12px;
    }
  }
`;

const LDetails = styled.div`
  width: 100%;
  padding: 10px;
  align-self: center;

  h3 {
    display: flex;
    align-self: center;
  }

  p {
    width: 75%;
    margin-top: 10px;
    text-align: left;
    background-color: rgba(255, 255, 255, 0.075);
    padding: 20px;
    font-size: 14px;
    border-radius: 10px;
    line-height: 1.5;
    box-shadow: 0.5rem 0.5rem 0 rgb(30, 30, 30);
  }

  @media (max-width: 768px) {
    p {
      display: none;
    }
  }
`;

const RDetails = styled.div`
  width: 100%;
  padding: 10px;
  text-align: right;
  display: flex;
  justify-content: center;
  flex-direction: column;

  div {
    width: 100%;
    margin-top: 10px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;

    p {
      width: 75%;
      background-color: rgba(255, 255, 255, 0.075);
      padding: 20px;
      border-radius: 10px;
      line-height: 1.5;
      box-shadow: 0.5rem 0.5rem 0 rgb(30, 30, 30);
      font-size: 14px;
    }
  }

  @media (max-width: 768px) {
    div {
      p {
        display: none;
      }
    }
  }
`;

const CenterPiece = styled.div`
  width: 80px;
  min-height: 100px;
  margin: 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 768px) {
    margin: 0 0px;
  }

  @media (max-width: 425px) {
    width: 30px;
  }
`;

const Line = styled.div`
  position: relative;
  width: 2px;
  height: 200%;
  background-color: white;
  transform: translate(-10px, 0px);
`;
