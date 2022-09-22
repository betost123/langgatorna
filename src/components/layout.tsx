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
    <motion.main
      initial={{ opacity: 0, x: -200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
      transition={{
        type: "spring",
        mass: 0.35,
        stiffness: 75,
        duration: 0.3,
      }}
    >
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
    </motion.main>
  );
};

export default Layout;
