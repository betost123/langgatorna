import * as React from "react";
import { Col, Row } from "react-flexbox-grid";
import styled from "styled-components";
import { Divider } from "../../components/Divider";
import HeroBanner from "../../components/HeroBanner";
import Spacing from "../../components/Spacer";
import { ActionText, H2, H4, InfoText } from "../../components/Typography";
import andersCubaLibre from "../../images/anders-cuba-libre.png";
import { MediaQuery } from "../../utils/styling-helpers";
import andersGuide from "../../images/anders-guide.png";

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

const AndersGuide: React.FunctionComponent = () => {
  return (
    <>
      <Spacing spacing={5} />
      <HeroBanner imageSrc={andersGuide} />
      <Content>
        <Col>
          <H2>Anders nybörjarguide till långgatorna!</H2>
        </Col>
        <Col md={8}>
          <InfoText>
            Omg, wow! Kul att du hittade hit. Det finns x antal barer på andra
            lång men det är vissa man ska gå i i en viss ordning för att
            verkligen uppleva barrundan på rätt sätt. Dessutom finns det olika
            varianter, och vi har listat dem!
          </InfoText>
        </Col>

        <Spacing spacing={4} />
        <GuideContainer bgColor='#F9F871'>
          <Row>
            <Col md={6} style={{ padding: "1rem", paddingLeft: "2rem" }}>
              <H4 color='black'>Praktiskt info</H4>

              <Spacing spacing={1} />
              <Divider color='black' />

              <Spacing spacing={1} />
              <ActionText color='black'>1. När ska man vara här?</ActionText>
              <Spacing spacing={1} />
              <ActionText color='black'>2. Hur hittar man hit?</ActionText>
              <Spacing spacing={1} />
              <ActionText color='black'>3. Vad kostar det?</ActionText>
            </Col>
            <Col md={6}>
              <StyledImage src='https://images.squarespace-cdn.com/content/v1/5ffdba592534fa7c03859816/1610547255194-O36GBTYVXWQ544HKLNBH/VbAu-P8xGAilp4g6ckLhNyNJNNM.jpg' />
            </Col>
          </Row>
        </GuideContainer>

        <Spacing spacing={4} />
        <GuideContainer bgColor='#F9F871'>
          <Row>
            <Col md={6}>
              <StyledImage src='https://media-cdn.tripadvisor.com/media/photo-s/11/18/b7/e2/naromrade-tredje-langgatan.jpg' />
            </Col>
            <Col md={6} style={{ padding: "1rem" }}>
              <H4 color='black'>Vad kan man göra?</H4>
              <Spacing spacing={1} />
              <Divider color='black' />

              <Spacing spacing={1} />
              <ActionText color='black'>1. Barerna</ActionText>
              <Spacing spacing={1} />
              <ActionText color='black'>2. Maten</ActionText>
              <Spacing spacing={1} />
              <ActionText color='black'>3. Quizzen</ActionText>
              <Spacing spacing={1} />
              <ActionText color='black'>4. Matcherna</ActionText>
              <Spacing spacing={1} />
              <ActionText color='black'>4. Brudarna</ActionText>
            </Col>
          </Row>
        </GuideContainer>

        <Spacing spacing={4} />
        <GuideContainer bgColor='#F9F871'>
          <Row>
            <Col md={6} style={{ padding: "1rem", paddingLeft: "2rem" }}>
              <H4 color='black'>Vad man inte får missa enligt Anders</H4>

              <Spacing spacing={1} />
              <Divider color='black' />

              <Spacing spacing={1} />
              <ActionText color='black'>2. Billigaste ölen</ActionText>
              <Spacing spacing={1} />
              <ActionText color='black'>3. Billigaste maten</ActionText>
              <Spacing spacing={1} />
              <ActionText color='black'>
                4. Barägarna man kan charma för gratis öl
              </ActionText>
              <Spacing spacing={1} />
              <ActionText color='black'>5. Shots för fattiga</ActionText>
              <Spacing spacing={1} />
              <ActionText color='black'>6. Konst för sossar</ActionText>
              <Spacing spacing={1} />

              <ActionText color='black'>7. Hundbarerna</ActionText>
            </Col>
            <Col md={6}>
              <StyledImage src='https://media-exp1.licdn.com/dms/image/C4E12AQEZoUCb_vmg1Q/article-cover_image-shrink_720_1280/0/1626969707137?e=2147483647&v=beta&t=byEveh0sk0MIBMs4T7v4SjPA1Vs-mOOuaMGBEB6DYuw' />
            </Col>
          </Row>
        </GuideContainer>

        <Spacing spacing={4} />
        <GuideContainer bgColor='#F9F871'>
          <Row>
            <Col md={6}>
              <StyledImage src={andersCubaLibre} height={400} />
            </Col>
            <Col md={6} style={{ padding: "1rem" }}>
              <H4 color='black'>Hur Anders spenderar en dag på lången</H4>
              <Spacing spacing={1} />
              <Divider color='black' />

              <Spacing spacing={1} />
              <ActionText color='black'>1. Kick Off</ActionText>
              <Spacing spacing={1} />
              <ActionText color='black'>2. Hemköp</ActionText>
              <Spacing spacing={1} />
              <ActionText color='black'>3. Afghan Livs</ActionText>
              <Spacing spacing={1} />
              <ActionText color='black'>4. Byns Bistro</ActionText>
              <Spacing spacing={1} />
              <ActionText color='black'>5. Göteburgare</ActionText>
            </Col>
          </Row>
        </GuideContainer>
      </Content>
    </>
  );
};

export default AndersGuide;
