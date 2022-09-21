import * as React from "react";
import { Col, Grid, Row } from "react-flexbox-grid";
import Button from "../../components/Button";
import GamePlayCard from "../../components/GamePlayCard";
import Spacing from "../../components/Spacer";
import { H2 } from "../../components/Typography";
import { peklekenData } from "../../utils/games/pekleken";

const Pekleken: React.FunctionComponent = () => {
  const [questionsIndex, setQuestionsIdenx] = React.useState(
    Math.floor(Math.random() * peklekenData.length + 1)
  );
  const onClickNext = () => {
    setQuestionsIdenx(Math.floor(Math.random() * peklekenData.length));
  };
  return (
    <>
      <Spacing spacing={4} />
      <Row center='xs'>
        <H2>Pekleken</H2>
      </Row>
      <Grid>
        <Row center='xs'>
          <Col md={6}>
            <GamePlayCard text={peklekenData[questionsIndex]} />
          </Col>
        </Row>
        <Spacing spacing={4} />
        <Row center='xs'>
          <Col md={6} style={{ marginLeft: "1rem" }}>
            <Button onClick={onClickNext}>Nästa</Button>
          </Col>
        </Row>
      </Grid>
    </>
  );
};

export default Pekleken;
