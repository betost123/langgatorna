import * as React from "react";
import { Col, Grid, Row } from "react-flexbox-grid";
import styled from "styled-components";
import HeroBanner from "../../components/HeroBanner";
import { H2, H4, InfoText } from "../../components/Typography";
import andersGuide from "../../images/anders-guide.png";
import { motion, useAnimationControls } from "framer-motion";

const StyledImage = styled.img`
  width: 600px;
  height: 600px;
  object-fit: cover;
`;

const JobbaHosOss: React.FunctionComponent = () => {
  return (
    <>
      <motion.div
        initial={{ scale: 1.1, opacity: 0.5 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, default: { ease: "linear" } }}
      >
        <HeroBanner imageSrc={andersGuide} />
      </motion.div>
      <H4>Jobba hos oss</H4>
    </>
  );
};

export default JobbaHosOss;
