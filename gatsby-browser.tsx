import React from "react";
import Layout from "./src/components/layout";
import { AnimatePresence } from "framer-motion";

export const wrapPageElement = ({ element }) => (
  <Layout>
    <AnimatePresence mode='wait'>{element} </AnimatePresence>
  </Layout>
);
