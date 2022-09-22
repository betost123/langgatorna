import * as React from "react";
import { createGlobalStyle } from "styled-components";
import { Footer } from "./Footer";
import NavBar from "./NavBar";
import { motion, AnimatePresence } from "framer-motion";

interface LayoutProps {
  children: any;
}

const GlobalStyle = createGlobalStyle`
  body {
    background-color: black;
    font-family: -apple-system, Roboto, sans-serif, serif;
    color: white;
    overflow-x: hidden;
  }
`;

const layoutVariants = {
  initial: { y: "100vh", opcaity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: "-100vh", opacity: 0 },
};

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
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
