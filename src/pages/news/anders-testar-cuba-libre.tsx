import * as React from "react";
import { Col, Row } from "react-flexbox-grid";
import styled from "styled-components";
import BarCard from "../../components/BarCard";
import HeroBanner from "../../components/HeroBanner";
import Spacing from "../../components/Spacer";
import { H2, H4 } from "../../components/Typography";
import andersCubaLibre from "../../images/anders-cuba-libre.png";

const Content = styled.div`
  padding: 1rem;
`;

const GuideContainer = styled.div<{ bgColor: string }>`
  width: 98%;
  background-color: ${(props) => props.bgColor};
  padding: 1rem;
`;

const AndersCubaLibre: React.FunctionComponent = () => (
  <>
    <Spacing spacing={5} />
    <HeroBanner imageSrc={andersCubaLibre} />
    <Content>
      <Col>
        <H2>Anders har testat långgatornas cuba libres!</H2>
      </Col>
      <Spacing spacing={4} />

      <GuideContainer bgColor='#F9F871'>
        <H4 color='black'>Följ Anders på tiktok för att se alla betyg</H4>
        <Spacing spacing={2} />
        <Row center='xs'>
          <iframe
            width='90%'
            height='500'
            src='https://youtu.be/iuQHys0oJGk'
          ></iframe>
        </Row>
      </GuideContainer>
      <Spacing spacing={4} />
      <Spacing spacing={4} />
    </Content>
  </>
);

export default AndersCubaLibre;
