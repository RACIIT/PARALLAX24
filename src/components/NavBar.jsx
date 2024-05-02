import React, { useEffect, useState } from "react";
import styled from "styled-components";

function NavBar() {
  const [extendNavbar, setExtendNavbar] = useState(false);

  const handleScroll = () => {
    const div = document.getElementById("scrollingDiv");

    if (div) {
      const scrolled = window.scrollY;

      // Adjust this value to control when the background color changes
      if (scrolled > 50) {
        div.style.backgroundColor = "black";
      } else {
        div.style.backgroundColor = "transparent";
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Container id="scrollingDiv">
        <Logo>
          <img src="/images/parallaxlogo.png" alt="" />
          {/* <img
            src="./src/assets/RotaractLogo.png"
            alt=""
            style={{ width: "50%" }}
          /> */}
        </Logo>
        <NavMenu>
          <Link href="#home">
            <span>Discover</span>
          </Link>
          <Link href="#schedule">
            <span>Schedule</span>
          </Link>
          <Link href="#register">
            <span>Register</span>
          </Link>
          <Link href="#faq">
            <span>FAQ</span>
          </Link>
        </NavMenu>
        <HamburgerBtn
          onClick={() => {
            setExtendNavbar((curr) => !curr);
          }}
        >
          {extendNavbar ? <>&#10005;</> : <>&#8801;</>}
        </HamburgerBtn>
      </Container>
      <NavExtendedMenu extendNavbar={extendNavbar}>
        <div>
          <Link
            href="#home"
            onClick={() => {
              setExtendNavbar((curr) => !curr);
            }}
          >
            <span>Discover</span>
          </Link>
          <Link
            href="#schedule"
            onClick={() => {
              setExtendNavbar((curr) => !curr);
            }}
          >
            <span>Schedule</span>
          </Link>
          <Link
            href="#register"
            onClick={() => {
              setExtendNavbar((curr) => !curr);
            }}
          >
            <span>Register</span>
          </Link>
          <Link
            href="#faq"
            onClick={() => {
              setExtendNavbar((curr) => !curr);
            }}
          >
            <span>FAQ</span>
          </Link>
        </div>
      </NavExtendedMenu>
    </div>
  );
}

export default NavBar;

const Container = styled.div`
  position: fixed;
  display: flex;
  background-color: transparent;
  margin: 0;
  min-height: 80px;
  width: 100vw;
  align-items: center;
  justify-content: space-between;
  z-index: 3;
  transition: all 0.25s ease-in-out;
  padding: 0px 30px;
  top: 0;

  @media (max-width: 1150px) {
    justify-content: flex-start;
    /* margin-left: 30px; */
  }
`;

const Logo = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  width: 20%;
  text-align: center;

  img {
    width: 75%;
  }

  @media (max-width: 625px) {
    img {
      width: 150%;
    }
  }
`;

const NavMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1150px) {
    display: none;
  }
`;

const NavExtendedMenu = styled.div`
  min-width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: rgba(0, 0, 0, 1);
  /* right: ${(props) => (props.extendNavbar ? "0vw" : "-100vw")}; */
  top: calc(${(props) => (props.extendNavbar ? "80px" : "-110vh")});
  color: black;
  z-index: 4;
  transition: all 0.25s ease-in-out;

  div {
    width: 75%;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: flex-start;
    margin-left: 12.5%;
  }

  @media (min-width: 1150px) {
    display: none;
  }
`;

const Link = styled.a`
  margin: 0 20px;
  cursor: pointer;
  text-decoration: none;
  color: white;
  font-size: 14px;

  @media (max-width: 1150px) {
    font-size: large;
    padding: 20px;
    border-bottom: 1px solid white;
    width: 100%;
  }

  span {
    position: relative;
    margin-left: 7px;

    &:after {
      content: "";
      height: 2px;
      background: #00fdcf;
      position: absolute;
      left: 0;
      right: 0;
      bottom: -6px;
      opacity: 0;
      transform-origin: left center;
      transform: scaleX(0);
      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    }
  }

  &:hover {
    span:after {
      opacity: 1;
      transform: scaleX(1);
    }
  }
`;

const HamburgerBtn = styled.button`
  width: 80px;
  height: 50px;
  background: none;
  border: none;
  color: white;
  font-size: 45px;
  cursor: pointer;
  position: absolute;
  right: 30px;
  z-index: 5;

  @media (min-width: 1150px) {
    display: none;
  }
`;
