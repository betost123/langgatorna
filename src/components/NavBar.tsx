import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { MediaQuery } from "../utils/styling-helpers";

interface INavBar {
  navBarOpen?: boolean;
  setNavBarOpen?: () => void;
  path?: string;
  menuLinks?: [
    {
      name: string;
      link: string;
    }
  ];
}

const Navigation = styled.nav<INavBar>`
  display: flex;
  justify-content: space-between;
  text-transform: capitalize;
  margin: 0 auto;
  padding: 30px;
  z-index: 2;
  align-self: center;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background-color: black;
  height: 30px;

  ${MediaQuery.TABLET} {
    display: flex;
    justify-content: start;
    padding: 15px;
    height: 34px;
    left: -8px;

    img {
      width: 36px;
      height: 36px;
    }
  }
`;

const Toggle = styled.div<INavBar>`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 5px 30px;
  margin-top: 5px;
  z-index: 2;

  ${MediaQuery.TABLET} {
    display: flex;
  }
`;

const NavBox = styled.div<INavBar>`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
  background-color: black;
  width: 100vw;

  ${MediaQuery.TABLET} {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-top: 10vh;
    width: 130vw;
    height: 100vh;
    top: -35px;
    padding-top: 35%;
    z-index: 1;
    left: ${(props) => (props.navBarOpen ? "-145px" : "-150%")};
    transition: all 0.3s ease-in;
  }
`;

const Hamburger = styled.div<INavBar>`
  background-color: white;
  width: 35px;
  height: 1px;
  transition: all 0.3s linear;
  align-self: center;
  position: relative;
  transform: ${(props) => (props.navBarOpen ? "rotate(-45deg)" : "inherit")};

  margin-top: ${(props) => props.navBarOpen && "-1rem"};

  ::before {
    width: ${(props) => (props.navBarOpen ? "34px" : "18px")};
    height: 1px;
    background-color: white;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
    transform: ${(props) =>
      props.navBarOpen
        ? "rotate(-90deg) translate(-10px, 0px)"
        : "rotate(0deg)"};
    top: -10px;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 18px;
  margin-right: 1rem;
  font-family: -apple-system, Roboto, sans-serif, serif;
  opacity: 0.7;
`;

const NavBar: React.FC<INavBar> = ({
  navBarOpen = false,
  setNavBarOpen,
  path,
}) => {
  return (
    <Navigation id='navbar'>
      <NavLink onClick={setNavBarOpen} to='/' key='Home'>
        Långgatorna
      </NavLink>
      <Toggle onClick={setNavBarOpen}>
        <Hamburger navBarOpen={navBarOpen} />
      </Toggle>
      <NavBox navBarOpen={navBarOpen}>
        <NavLink activeStyle={{ opacity: 1 }} to='/bars'>
          Barer
        </NavLink>
        <NavLink activeStyle={{ opacity: 1 }} to='/activities'>
          Aktiviteter
        </NavLink>
        <NavLink activeStyle={{ opacity: 1 }} to='/games'>
          Spel
        </NavLink>
        <NavLink activeStyle={{ opacity: 1 }} to='/guestbook'>
          Gästbok
        </NavLink>
      </NavBox>
    </Navigation>
  );
};

export default NavBar;
