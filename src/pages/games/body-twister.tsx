import * as React from "react";
import { Col, Grid, Row } from "react-flexbox-grid";
import BackButton from "../../components/BackButton";
import Button from "../../components/Button";
import GamePlayCard from "../../components/GamePlayCard";
import Spacing from "../../components/Spacer";
import { H2 } from "../../components/Typography";

const bodyData = [
  "KIND",
  "SMALBEN",
  "KNÄ",
  "HUVUD",
  "MIDJA",
  "FOT",
  "ÖVERARM",
  "LÅR",
  "ÖRA",
  "NÄSA",
  "HÅR",
  "FINGER",
  "HAND",
  "RUMPA",
  "HANDLED",
  "NAVEL",
  "MAGE",
  "BEN",
  "HAND",
  "ARMBÅGE",
  "HÖFT",
  "ARM",
  "UNDERARM",
  "BRÖST",
  "HALS",
  "PANNA",
  "SKREV",
];

const BodyTwister: React.FunctionComponent = () => {
  const [firstBodyIndex, setFirstBodyIndex] = React.useState(
    Math.floor(Math.random() * bodyData.length + 1)
  );
  const [secondBodyIndex, setSecondBodyIndex] = React.useState(
    Math.floor(Math.random() * bodyData.length + 1)
  );

  const onClickNext = () => {
    setFirstBodyIndex(Math.floor(Math.random() * bodyData.length));
    setSecondBodyIndex(Math.floor(Math.random() * bodyData.length));
  };

  return (
    <>
      <BackButton navLink='/games' />

      <Spacing spacing={4} />
      <Row center='xs'>
        <H2>Body Twister</H2>
      </Row>
      <Grid>
        <Row around='xs'>
          <Col md={5} xs={11}>
            <GamePlayCard text={bodyData[firstBodyIndex]} />
          </Col>
          <Col md={5} xs={11}>
            <GamePlayCard text={bodyData[secondBodyIndex]} />
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

export default BodyTwister;
