import { Link, navigate } from "gatsby";
import * as React from "react";
import { Col, Grid, Row } from "react-flexbox-grid";
import styled from "styled-components";
import Spacing from "../components/Spacer";
import { H2, H4, InfoText } from "../components/Typography";
import andersGuide from "../images/anders-guide.png";
import eveningHang from "../images/evening-hang.jpg";
import { motion, useAnimationControls } from "framer-motion";

const StyledImage = styled.img`
  width: 400px;
  height: 300px;
  object-fit: cover;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Articles: React.FunctionComponent = () => {
  const controls = useAnimationControls();
  const scalingAnimation = useAnimationControls();

  const onClick = async () => {
    await controls
      .start({
        x: "25vw",
        transition: { duration: 0.7, damping: 30 },
      })
      .then(
        async () =>
          await scalingAnimation
            .start({
              scale: 4,
              transition: { duration: 1.2 },
            })
            .then(() => navigate("/articles/jobba-hos-oss"))
      );
  };

  return (
    <>
      <Spacing spacing={4} />
      <H4>Artiklar</H4>
      <Row around='xs'>
        <div onClick={onClick}>
          <motion.div layout animate={controls}>
            <motion.div animate={scalingAnimation}>
              <StyledImage src={andersGuide} />
            </motion.div>
          </motion.div>
        </div>

        <StyledLink to='/articles/jobba-hos-oss'>
          <StyledImage src={eveningHang} />
        </StyledLink>
      </Row>
    </>
  );
};

export default Articles;
