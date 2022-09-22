import * as React from "react";
import { Col, Grid, Row } from "react-flexbox-grid";
import Button from "../../components/Button";
import GamePlayCard from "../../components/GamePlayCard";
import Spacing from "../../components/Spacer";
import { H2 } from "../../components/Typography";
import { neverHaveIEverQuestions } from "../../utils/games/never-have-i-ever-questions";

const NeverHaveIEver: React.FunctionComponent = () => {
  const [questionsIndex, setQuestionsIdenx] = React.useState(
    Math.floor(Math.random() * neverHaveIEverQuestions.length + 1)
  );
  const onClickNext = () => {
    setQuestionsIdenx(
      Math.floor(Math.random() * neverHaveIEverQuestions.length)
    );
  };
  return (
    <>
      <Spacing spacing={4} />
      <Row center='xs'>
        <H2>Jag har aldrig</H2>
      </Row>
      <Grid>
        <Row center='xs'>
          <Col md={6}>
            <GamePlayCard text={neverHaveIEverQuestions[questionsIndex]} />
          </Col>
        </Row>
        <Spacing spacing={6} />
        <Row center='xs'>
          <Col md={6} style={{ marginLeft: "1rem" }}>
            <Button onClick={onClickNext}>Nästa</Button>
          </Col>
        </Row>
      </Grid>
    </>
  );
};

export default NeverHaveIEver;
