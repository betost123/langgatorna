import * as React from "react";
import { Col, Grid, Row } from "react-flexbox-grid";
import styled from "styled-components";
import HeroBanner from "../components/HeroBanner";
import Spacing from "../components/Spacer";
import { ActionText, ButtonText, H2, InfoText } from "../components/Typography";
import BarCard from "../components/BarCard";
import InfoSlide from "../components/InfoSlide";
import andersGuide from "../images/anders-guide.png";
import { barerLista } from "../utils/data";
import MangoIcon from "../components/icons/MangoIcon";
import PartyHatIcon from "../components/icons/PartyHatIcon";
import DogIcon from "../components/icons/DogIcon";
import BeerIcon from "../components/icons/BeerIcon";
import PillIcon from "../components/icons/PillIcon";
import RestroomIcon from "../components/icons/RestroomIcon";
import { usePresence } from "framer-motion";

const Content = styled.div`
  padding: 1rem;
`;

const IconGuideContainer = styled.div`
  padding: 1rem;
  background-color: white;
`;

const IconColumn = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HorizontalSpacer = styled.div`
  width: 0.5rem;
`;

const Bars: React.FunctionComponent = () => {
  return (
    <>
      <Spacing spacing={5} />
      <HeroBanner imageSrc='https://images.pexels.com/photos/1876878/pexels-photo-1876878.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
      <Grid>
        <Content>
          <Col>
            <H2>Barer</H2>
          </Col>
          <Col md={8}>
            <InfoText>
              Här kommer en lista över barer och restauranger du kan hitta på
              långgatorna! Har vi missat någon? Hör isåfall av dig.
            </InfoText>
          </Col>
          <Spacing spacing={4} />
          <IconGuideContainer>
            <Row center='xs'>
              <IconColumn md={4} xs={6}>
                <MangoIcon />
                <HorizontalSpacer />
                <ActionText color='black'>Bra vegetariskt</ActionText>
              </IconColumn>
              <IconColumn md={4} xs={6}>
                <PartyHatIcon /> <HorizontalSpacer />
                <ActionText color='black'>Aktiviteter</ActionText>
              </IconColumn>
              <IconColumn md={4} xs={6}>
                <DogIcon /> <HorizontalSpacer />
                <ActionText color='black'>Hundvänligt</ActionText>
              </IconColumn>
              <IconColumn md={4} xs={6}>
                <BeerIcon /> <HorizontalSpacer />
                <ActionText color='black'>Bra ölutbud</ActionText>
              </IconColumn>
              <IconColumn md={4} xs={6}>
                <PillIcon /> <HorizontalSpacer />
                <ActionText color='black'>Favoritbar</ActionText>
              </IconColumn>
              <IconColumn md={4} xs={6}>
                <RestroomIcon /> <HorizontalSpacer />
                <ActionText color='black'>Fräsch toa</ActionText>
              </IconColumn>
            </Row>
          </IconGuideContainer>
          <Spacing spacing={2} />
          <Row center='xs'>
            {barerLista.map((bar) => (
              <BarCard key={bar.name} {...bar} bgColor='white' />
            ))}
          </Row>
          <Spacing spacing={4} />
          <InfoSlide
            imageSrc={andersGuide}
            title='Ny på långgatorna?'
            text='Är du ny till långgatorna? Låt Anders guida dig för en perfekt första upplevelse! Anders har si sådär 20+ års erfarenhet, så han kan skapa en riktigt go kväll.'
            buttonText='Läs mer'
            link='/news/anders-guide-till-beginners'
          />
        </Content>
      </Grid>
    </>
  );
};

export default Bars;
