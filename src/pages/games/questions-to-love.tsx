import * as React from "react";
import { Col, Grid, Row } from "react-flexbox-grid";
import Button from "../../components/Button";
import GamePlayCard from "../../components/GamePlayCard";
import Spacing from "../../components/Spacer";
import { H2 } from "../../components/Typography";
import { loveQuestions } from "../../utils/games/loveQuestions";
import { peklekenData } from "../../utils/games/pekleken";

const LoveQuestions: React.FunctionComponent = () => {
  const [questionsIndex, setQuestionsIdenx] = React.useState(0);
  const onClickNext = () => {
    if (questionsIndex === 35) {
      setQuestionsIdenx(0);
    } else {
      setQuestionsIdenx(questionsIndex + 1);
    }
  };
  return (
    <>
      <Spacing spacing={4} />
      <Row center='xs'>
        <H2>36 questions to fall in love</H2>
      </Row>
      <Grid>
        <Row center='xs'>
          <Col md={6}>
            <GamePlayCard text={loveQuestions[questionsIndex]} />
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

export default LoveQuestions;
