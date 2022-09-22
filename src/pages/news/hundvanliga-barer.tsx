import * as React from "react";
import { Col, Row } from "react-flexbox-grid";
import styled from "styled-components";
import BarCard from "../../components/BarCard";
import HeroBanner from "../../components/HeroBanner";
import Spacing from "../../components/Spacer";
import { ActionText, H2, H4 } from "../../components/Typography";
import { dogFriendlyBarsList } from "../../utils/data";
import roffeChina from "../../images/roffe-china.jpg";
import { MediaQuery } from "../../utils/styling-helpers";
import { Divider } from "../../components/Divider";

const Content = styled.div`
  padding: 1rem;
`;

const GuideContainer = styled.div<{ bgColor: string }>`
  width: 100%;
  background-color: ${(props) => props.bgColor};
`;

const StyledImage = styled.img<{ height?: number }>`
  object-fit: cover;
  width: 100%;
  max-height: ${(props) => (props.height ? `${props.height}px` : "650px")};
  margin-bottom: -4px;

  ${MediaQuery.MOBILE} {
    max-height: 450px;
    margin-top: -1rem;
  }
`;

const HundvanligaBarer: React.FunctionComponent = () => (
  <>
    <Spacing spacing={3} />
    <Content>
      <Col>
        <H2>Hundvänliga barer</H2>
      </Col>
      <Spacing spacing={4} />

      <GuideContainer bgColor='#F9F871'>
        <Row>
          <Col md={6}>
            <StyledImage src={roffeChina} height={400} />
          </Col>
          <Col md={6} style={{ padding: "1rem" }}>
            <H4 color='black'>Roffes favoritbarer</H4>
            <Spacing spacing={1} />
            <Divider color='black' />

            <Spacing spacing={1} />
            <ActionText color='black'>1. Byns Bistro</ActionText>
            <Spacing spacing={1} />
            <ActionText color='black'>2. Dansken</ActionText>
            <Spacing spacing={1} />
            <ActionText color='black'>3. Tvinky</ActionText>
            <Spacing spacing={1} />
            <ActionText color='black'>4. Le Pub</ActionText>
            <Spacing spacing={1} />
            <ActionText color='black'>5. Made In China</ActionText>
          </Col>
        </Row>
      </GuideContainer>
      <Spacing spacing={4} />

      <Row center='xs'>
        {dogFriendlyBarsList.map((bar) => (
          <BarCard
            bgColor='#F9F871'
            key={bar.name}
            imageSrc={bar.imageSrc}
            name={bar.name}
          />
        ))}
      </Row>
      <Spacing spacing={4} />
    </Content>
  </>
);

export default HundvanligaBarer;
