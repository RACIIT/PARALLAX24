// Popup.js
import React from "react";
import styled from "styled-components";

const Popup = ({ message, onClose, btnMsg }) => {
  return (
    <PopupContainer>
      <PopupBox>
        <p>{message}</p>
        <CloseBtn onClick={onClose}>{btnMsg}</CloseBtn>
      </PopupBox>
    </PopupContainer>
  );
};

export default Popup;

const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const PopupBox = styled.div`
  background: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  width: 300px;
  height: fit-content;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;

  p {
    color: black;
    font-size: 18px;
    text-align: center;
  }
`;

const CloseBtn = styled.button`
  appearance: button;
  background-color: #1652f0;
  border: 1px solid #1652f0;
  border-radius: 4px;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  font-family: Graphik, -apple-system, system-ui, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  font-size: 14px;
  line-height: 1.15;
  overflow: visible;
  padding: 12px 16px;
  position: relative;
  text-align: center;
  text-transform: none;
  transition: all 80ms ease-in-out;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 60%;
  margin-top: 10px;

  &:hover {
    background-color: #0a46e4;
    border-color: #0a46e4;
  }

  &:active {
    background-color: #0039d7;
    border-color: #0039d7;
  }
`;
