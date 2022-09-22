import * as React from "react";
import { Col, Grid, Row } from "react-flexbox-grid";
import BackButton from "../../components/BackButton";
import Button from "../../components/Button";
import GamePlayCard from "../../components/GamePlayCard";
import Spacing from "../../components/Spacer";
import { H2 } from "../../components/Typography";
import { moralQuestions } from "../../utils/games/moralQuestions";

const Moral: React.FunctionComponent = () => {
  const [questionsIndex, setQuestionsIdenx] = React.useState(
    Math.floor(Math.random() * moralQuestions.length + 1)
  );
  const onClickNext = () => {
    setQuestionsIdenx(Math.floor(Math.random() * moralQuestions.length));
  };
  return (
    <>
      <BackButton navLink='/games' />

      <Spacing spacing={4} />
      <Row center='xs'>
        <H2>Moralfrågor</H2>
      </Row>
      <Grid>
        <Row center='xs'>
          <Col md={6} xs={11}>
            <GamePlayCard text={moralQuestions[questionsIndex]} />
          </Col>
        </Row>
        <Spacing spacing={6} />
        <Row center='xs'>
          <Col md={6} xs={11} style={{ marginLeft: "1rem" }}>
            <Button onClick={onClickNext}>Nästa</Button>
          </Col>
        </Row>
      </Grid>
      <Spacing spacing={4} />
    </>
  );
};

export default Moral;
