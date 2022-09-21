import * as React from "react";
import { createGlobalStyle } from "styled-components";
import { Footer } from "./Footer";
import NavBar from "./NavBar";

interface LayoutProps {
  children: any;
}

const GlobalStyle = createGlobalStyle`
  body {
    background-color: black;
    font-family: -apple-system, Roboto, sans-serif, serif;
    color: white;
    padding: 1rem;
  }
`;

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  const [navBarOpen, setNavBarOpen] = React.useState(false);

  return (
    <React.Fragment>
      <NavBar
        navBarOpen={navBarOpen}
        setNavBarOpen={() => setNavBarOpen(!navBarOpen)}
      />
      <div style={{ marginTop: 80 }} />
      <GlobalStyle />
      {children}
    </React.Fragment>
  );
};

export default Layout;
