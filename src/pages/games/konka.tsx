import * as React from "react";
import { Col, Grid, Row } from "react-flexbox-grid";
import BackButton from "../../components/BackButton";
import Button from "../../components/Button";
import GamePlayCard from "../../components/GamePlayCard";
import Spacing from "../../components/Spacer";
import { H2 } from "../../components/Typography";

const questionsData = [
  "hångla med nån i rummet",
  "byt profilbild på instagram",
  "kissa på handtaget",
  "kissa på järntogert",
  "ring nån och säg att du såg en katt som verkade helt fucking lost",
  "slicka nåns armåhla",
  "Tatuera dig",
  "svep hela glaset",
  "säg allas sämsta egenskaper",
  "säg vem som är fulast",
  "peka på vem som är snyggast",
  "skriv till nån på tinder",
  "säg till nån du älskar att du älskar den",
  "ranka de andra spelarna från mest barndomstrauma till minst barndomstrauma",
  "byt ett klädesplagg med en annan spelare",
  "gör las ketchup-dansen och sjung orden så som du minns dem",
  "gör ett inlägg på familjeliv",
  "låt alla andra blanda en shot åt dig som du dricker",
  "skicka ett DM till nån random person som gillat din bild och fråga om den är singel",
  "låt personen till höger rita något i ditt ansikte",
  "kör vattenfall, du är sist",
  "ta en groupie och lägg ut på SoMe",
  "köp lite bitcoins",
  "swisha 20kr till valfri välgörenhet",
  "swisha 1kr till ditt ex",
  "säg alla andra spelares bästa egenskaper",
  "fuck, marry, kill, tre personer i rummet (bara säg, inte gör)",
  "berätta om din hemliga affärsidé",
  "dra ihop ett hela havet stormar",
  "busring heta linjen",
  "sms:a din mamma och be henne ställa en konka",
  "visa ett partytrick",
  "rangdordna medspelarna efter hur mycket pengar du tror de tjänar",
  "köp en biobiljett till en medspelare",
  "fixa fram end essert inom 3 minuter",
  "alla medspelar får beskriva dig´n bästa och sämsta egenskap på en lapp/lista och sen ska du gissa vem som sagt vad",
];

const Konka: React.FunctionComponent = () => {
  const [questionsIndex, setQuestionsIdenx] = React.useState(
    Math.floor(Math.random() * questionsData.length + 1)
  );
  const onClickNext = () => {
    setQuestionsIdenx(Math.floor(Math.random() * questionsData.length));
  };
  return (
    <>
      <BackButton navLink='/games' />

      <Spacing spacing={4} />
      <Row center='xs'>
        <H2>Konka</H2>
      </Row>
      <Grid>
        <Row center='xs'>
          <Col md={6} xs={11}>
            <GamePlayCard text={questionsData[questionsIndex]} />
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

export default Konka;
