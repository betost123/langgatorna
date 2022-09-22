import * as React from "react";
import { Col, Grid, Row } from "react-flexbox-grid";
import styled from "styled-components";
import ActivityCard from "../components/ActivityCard";
import { Divider } from "../components/Divider";
import HeroBanner from "../components/HeroBanner";
import InfoSlide from "../components/InfoSlide";
import LunchCard from "../components/LunchCard";
import Spacing from "../components/Spacer";
import { ActionText, H2, InfoText } from "../components/Typography";
import { activitiesList, lunchOfToday } from "../utils/data";
import { MediaQuery } from "../utils/styling-helpers";

const StyledRow = styled(Row)`
  display: flex;
  justify-content: space-around;

  ${MediaQuery.TABLET} {
    display: block;
  }
`;

const Activities: React.FunctionComponent = () => {
  const today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0");

  return (
    <>
      <Spacing spacing={5} />
      <HeroBanner imageSrc='https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
      <Grid>
        <Col>
          <H2>Aktiviteter</H2>
        </Col>
        <Col md={8}>
          <InfoText>
            Nyfiken på vad som händer idag? Imorgon? We got you covered.
          </InfoText>
        </Col>
        <Spacing spacing={4} />
        <Divider color='#9eadbd' />
        <Spacing spacing={3} />

        <ActionText>
          Idag {dd} / {mm}
        </ActionText>
        <StyledRow>
          {activitiesList.map((activity) => (
            <Col key={activity.title} md={4} xs={11}>
              <ActivityCard
                {...activity}
                onClick={() => window.open(activity.navLink)}
              />
            </Col>
          ))}
        </StyledRow>
        <Spacing spacing={6} />

        <Divider color='#99b0a7' />
        <Spacing spacing={3} />

        <ActionText>
          Dagens lunch {dd} / {mm}
        </ActionText>
        <Row>
          {lunchOfToday.map((lunch, index) => (
            <Col key={lunch.restaurant + index} md={4} xs={12}>
              <LunchCard {...lunch} />
            </Col>
          ))}
        </Row>
        <Spacing spacing={5} />

        <Divider color='#9eadbd' />

        <Spacing spacing={4} />
        <InfoSlide
          imageSrc='https://images.pexels.com/photos/6173860/pexels-photo-6173860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          title='Testa våra egna spel'
          text='Vi har gjort en egen liten spellista som du kan göra med dina vänner när du sitter på baren. Testa gärna!'
          buttonText='Gå till spel'
          link='/games'
          bgColor='#E8F3F5'
          imageRight
        />
      </Grid>
      <Spacing spacing={4} />
    </>
  );
};

export default Activities;
