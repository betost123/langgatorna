import * as React from "react";
import { Col, Grid, Row } from "react-flexbox-grid";
import styled from "styled-components";
import GameCard from "../components/GameCard";
import InfoSlide from "../components/InfoSlide";
import Spacing from "../components/Spacer";
import { H2 } from "../components/Typography";
import barrundaImage from "../images/barrunda.jpg";
import andersCubaLibre from "../images/anders-cuba-libre.png";
import rolfRestaurang from "../images/rolf-restaurang.png";
import magasinetBild from "../images/magasinet-bild.png";
import andersGuide from "../images/anders-guide.png";

const Content = styled.div`
  padding: 1rem;
`;

const Games: React.FunctionComponent = () => {
  return (
    <>
      <Content>
        <Col>
          <H2>Nyheter</H2>
        </Col>
      </Content>
      <Spacing spacing={4} />
      <InfoSlide
        imageSrc={andersGuide}
        title='Ny på långgatorna?'
        text='Är du ny till långgatorna? Låt Anders guida dig för en perfekt första upplevelse! Anders har si sådär 20+ års erfarenhet, så han kan skapa en riktigt go kväll.'
        buttonText='Läs mer'
        link='/news/anders-guide-till-beginners'
      />
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
      <Spacing spacing={4} />

      <InfoSlide
        imageSrc={andersCubaLibre}
        title='Långgatornas bästa cubra libre!'
        text='Anders har gett sig ut för att hitta långgatornas bästa cuba libre. Vilken har helt enkelt bäst APK och smak?'
        buttonText='Läs mer'
        link='/news/anders-testar-cuba-libre'
      />
      <Spacing spacing={4} />
      <InfoSlide
        imageSrc={rolfRestaurang}
        title='Hundvänliga barer'
        text='Rolf har sniffat upp de bästa barerna för doggos på långgatan och nu har han sammanställt en lista!'
        buttonText='Ta del av roffes hundlista'
        link='/news/hundvanliga-barer'
        bgColor='#C5C0FF'
        imageRight
      />
      <Spacing spacing={4} />
      <InfoSlide
        imageSrc={magasinetBild}
        title='Heldag på långgatorna?'
        text='Här är den ultimata guiden för dig som vill spendera 07.30 - 02:00 på långgatorna.'
        buttonText='Läs mer'
        link='/news/heldag-pa-langen'
        bgColor='#A9D8C7'
      />
    </>
  );
};

export default Games;
