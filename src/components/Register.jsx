/* eslint-disable no-undef */
import styled from "styled-components";
import '../index.css'
// import $ from "jquery";

function Register() {
  return (
    <Container id="register" style={{justifyContent: 'center',}}>
      <Heading>
        <span className="fancy" style={{fontSize:"2rem"}}>Registeration Closed</span>
        <h4 style={{fontSize:"1rem",margin: '0.7rem',padding:"1.5rem"}}>Due to limited slots available, we have reached maximum capacity. <br/><br/>  Thank you to all who have registered. <br/> We look forward to an exciting event with our confirmed participants</h4>
        <h4 style={{fontSize:"1rem",margin: '0.7rem',color:"#42f2f5"}}>Stay tuned for further updates!</h4>

      </Heading>
    </Container>
  );
}

export default Register;

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: black;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding-top: 80px;
`;

const Heading = styled.h1.attrs({ className: "heading" })`
  @media (max-width: 1150px) {
    span {
      font-size: 50 rem;
    }
  }
  @media (min-width: 768px) {
    span {
      font-size: 2 rem;
    }
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-top: 5px;
`;

const RegisterButton = styled.a`
  margin-bottom: 50px;
  text-decoration: none;
  border: 3px solid white;
  padding: 15px 25px;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  transition: all ease-in-out 0.2s;
  color: white;
  background-color: transparent;
  border-color: white;
  font-weight: 600;

  &:hover {
    transform: scale(1.1);
    background-color: white;
    color: black;
  }

  @media (max-width: 1150px) {
    button {
      font-size: 50 rem;
    }
  }
  @media (min-width: 768px) {
    button {
      font-size: 10 rem;
    }
  }
`;

const RegForm = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const InputFields = styled.div`
  display: flex;
  color:#fff
  background-color: rgba(255, 255, 255, 0.25);
  /* width: 75%; */
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
