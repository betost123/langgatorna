import * as React from "react";
import { Col, Grid, Row } from "react-flexbox-grid";
import GameCard from "../components/GameCard";
import InfoSlide from "../components/InfoSlide";
import Spacing from "../components/Spacer";
import { H2 } from "../components/Typography";
import barrundaImage from "../images/barrunda.jpg";

const gamesList = [
  {
    title: "Pekleken",
    navLink: "/games/pekleken",
    description: "Alla pekar på den påståendet passar bäst in på",
  },
  {
    title: "36 questions to fall in love",
    navLink: "/games/questions-to-love",
    description:
      "The so-called 36 questions to fall in love are a set of questions developed in the 1990s by psychologists Arthur Aron, Ph.D., Elaine Aron, Ph.D., and other researchers to see if two strangers can develop an intimate connection just from asking each other a series of increasingly personal questions.",
  },
  {
    title: "Jag har aldrig",
    navLink: "/games/jag-har-aldrig",
    description: "Alla som har gjort påståendet tar en klunk",
  },
  {
    title: "Body Twister",
    navLink: "/games/body-twister",
    description:
      "Två kroppsdelar som ska sättas mot varandra. Den grupp som först ramlar/inte längre sitter ihop förlorar.",
  },
  {
    title: "Moralfrågor",
    navLink: "/games/moral",
    description:
      "Diskutera moralfrågor. Hur hade du reagerat i dessa situationer?",
  },
  {
    title: "Konka",
    navLink: "/games/konka",
    description: "Utför konkan eller drick en klunk",
  },
];

const Games: React.FunctionComponent = () => {
  return (
    <>
      <Grid>
        <Col>
          <H2>Spel</H2>
        </Col>
        <Grid>
          <Row>
            {gamesList.map((game) => (
              <Col md={4} xs={11} key={game.title}>
                <GameCard {...game} />
              </Col>
            ))}
          </Row>
        </Grid>
        <Spacing spacing={4} />
        <InfoSlide
          imageSrc={barrundaImage}
          title='Barrunda på andra lång'
          text='Sugen på ett aktivt spel? Testa barrundan på andra lång! Vi har sammanställt listan på alla barer man måste klara, lätt, medel och expert-versioner!'
          buttonText='Läs mer'
          link='/news/barrunda-guide'
          bgColor='#62BAAC'
          imageRight
        />
      </Grid>
      <Spacing spacing={8} />
    </>
  );
};

export default Games;
