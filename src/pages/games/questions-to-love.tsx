import * as React from "react";
import { Col, Grid, Row } from "react-flexbox-grid";
import BackButton from "../../components/BackButton";
import Button from "../../components/Button";
import GamePlayCard from "../../components/GamePlayCard";
import Spacing from "../../components/Spacer";
import { H2, SmallBody } from "../../components/Typography";
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

  const onClickBack = () => {
    questionsIndex > 0 && setQuestionsIdenx(questionsIndex - 1);
  };

  return (
    <>
      <BackButton navLink='/games' />
      <Spacing spacing={4} />

      <Grid>
        <Row center='xs'>
          <H2>36 questions to fall in love</H2>
        </Row>
        <Row center='xs'>
          <Col md={6} xs={10}>
            <GamePlayCard text={loveQuestions[questionsIndex]} />
          </Col>
        </Row>
        <SmallBody color='white' textAlign='center'>
          {questionsIndex + 1} / 36
        </SmallBody>
        <Spacing spacing={3} />
        <Row center='xs'>
          <Col md={6} xs={11} style={{ marginLeft: "1rem" }}>
            <Button onClick={onClickNext}>Nästa</Button>
          </Col>
        </Row>
        <Spacing spacing={2} />
        <Row center='xs'>
          <Col md={6} xs={11} style={{ marginLeft: "1rem" }}>
            <Button variant='tetriary' onClick={onClickBack}>
              Förgående
            </Button>
          </Col>
        </Row>
      </Grid>
      <Spacing spacing={4} />
    </>
  );
};

export default LoveQuestions;
