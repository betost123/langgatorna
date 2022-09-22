import * as React from "react";
import { Col, Grid, Row } from "react-flexbox-grid";
import styled from "styled-components";
import { Divider } from "../../components/Divider";
import HeroBanner from "../../components/HeroBanner";
import Spacing from "../../components/Spacer";
import {
  ActionText,
  Body,
  H2,
  H4,
  InfoText,
  SmallBody,
} from "../../components/Typography";
import barrundaImage from "../../images/barrunda.jpg";
import medelrundan from "../../images/medelrundan.jpg";
import difficultRunda from "../../images/hardrunda.jpg";
import roffeLukasRunda from "../../images/roffe-lukas-runda.jpg";
import expertRound from "../../images/expert-round.jpg";
import { MediaQuery } from "../../utils/styling-helpers";
import CallToActionBanner from "../../components/CallToActionBanner";

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

const allBarsList = [
  "Brygghuset",
  "Soho",
  "Kick off",
  "Street Life",
  "Down Under",
  "Dansken",
  "9:ans Ölhall",
  "Ölstugan Tullen",
  "Tvinky",
  "Lucky Burger",
  "Le Pub",
  "Holy Moly",
  "Göteburgare",
  "Bivac",
  "Sejdeln",
  "The Abyss",
  "Kellys",
  "Kings Head",
  "Queens Head",
  "Hops",
];

const BarrundaGuide: React.FunctionComponent = () => {
  return (
    <>
      <Spacing spacing={5} />
      <HeroBanner imageSrc={roffeLukasRunda} />
      <Content>
        <Col>
          <H2>Guiden till rundorna på 2a lång!</H2>
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
        <GuideContainer bgColor='#002A42'>
          <Row>
            <Col md={6} style={{ padding: "1rem", paddingLeft: "2rem" }}>
              <H4 color='white'>Medelsvåra barrundan</H4>
              <Body>
                Rundan för dig som vill bli full, ha en go kväll, men ändå inte
                spendera så mycket pengar! Det krävs vissa förkunskaper, men för
                den vane blir det skoj!
              </Body>
              <Spacing spacing={1} />
              <Divider />

              <Spacing spacing={1} />
              <ActionText>1. Hops</ActionText>
              <Spacing spacing={1} />
              <ActionText>2. Kings Head</ActionText>
              <Spacing spacing={1} />
              <ActionText>3. The Abyss</ActionText>
              <Spacing spacing={1} />
              <ActionText>4. Sejdeln</ActionText>
              <Spacing spacing={1} />
              <ActionText>5. Queens Head</ActionText>
              <Spacing spacing={1} />
              <ActionText>6. Bivac</ActionText>
              <Spacing spacing={1} />
              <ActionText>7. Dansken</ActionText>
              <Spacing spacing={1} />
              <ActionText>8. Göteburgare</ActionText>
              <Spacing spacing={1} />
              <ActionText>9. Down Under</ActionText>
              <Spacing spacing={1} />
              <ActionText>10. Kick Off</ActionText>
              <Spacing spacing={1} />
              <ActionText>11. Brygghuset</ActionText>
            </Col>
            <Col md={6}>
              <StyledImage height={750} src={medelrundan} />
            </Col>
          </Row>
        </GuideContainer>

        <Spacing spacing={4} />
        <GuideContainer bgColor='#F9F871'>
          <Row>
            <Col md={6}>
              <StyledImage src={difficultRunda} />
            </Col>
            <Col md={6} style={{ padding: "1rem" }}>
              <H4 color='black'>Fina drinkrundan</H4>
              <Body color='black'>
                En liten minirunda med lite goa drinkar! Vi tar även en liten
                sväng in på tredje lång här.
              </Body>
              <Spacing spacing={1} />
              <Divider color='black' />

              <Spacing spacing={1} />
              <ActionText color='black'>1. Hops</ActionText>
              <Spacing spacing={1} />
              <ActionText color='black'>2. Tvinky</ActionText>
              <Spacing spacing={1} />
              <ActionText color='black'>3. Made In China</ActionText>
              <Spacing spacing={1} />
              <ActionText color='black'>4. Contrast</ActionText>
            </Col>
          </Row>
        </GuideContainer>

        <Spacing spacing={4} />

        <GuideContainer bgColor='#D2E4D6'>
          <Row>
            <Col md={6} style={{ padding: "1rem", paddingLeft: "2rem" }}>
              <H4 color='black'>Expertrundan</H4>
              <Spacing spacing={1} />
              <Divider />
              <Spacing spacing={1} />

              <Row start='xs'>
                {allBarsList.map((bar, index) => (
                  <Col key={index} md={4}>
                    <ActionText color='black' textAlign='left'>{`${
                      index + 1
                    }. ${bar}`}</ActionText>
                  </Col>
                ))}
              </Row>
            </Col>
            <Col md={6}>
              <StyledImage height={450} src={expertRound} />
            </Col>
          </Row>
        </GuideContainer>

        <Spacing spacing={4} />
        <GuideContainer bgColor='#7FA6DB'>
          <Row>
            <Col md={6}>
              <StyledImage src={roffeLukasRunda} />
            </Col>
            <Col md={6} style={{ padding: "1rem" }}>
              <H4 color='white'>Lätta barrundan</H4>
              <Body color='black'>
                Perfekta barrundan för att upptäcka det bästa med andra lång,
                samtidigt som man kan sitta länga och bara njuta på baren utan
                att hetsa iväg.
              </Body>
              <Spacing spacing={2} />
              <Divider />

              <ActionText color='black'>1. Kings Head</ActionText>
              <SmallBody color='black'>
                Alla börjar på Kings Head. Min första upplevelse av andra lång
                va på kings head. Det är alltid här man ska börja när man är ny!
                Så fördrink - en Falcon. Dessutom har de oftast buffé om man
                kommer tidigt.
              </SmallBody>
              <Divider />

              <ActionText color='black'>2. Dansken</ActionText>
              <SmallBody color='black'>
                Alla hipsters hipster-ställe! En Tuborg på Dansken är den
                obligatoriska andra-stället-drinken.
              </SmallBody>
              <Divider />

              <ActionText color='black'>3. Down Under</ActionText>
              <SmallBody color='black'>
                En sån australiensk bar på långgatan. Här måste man köpa snacks!
                Man får en korg och det för en direkt tillbaka till barndomen!
                Ölen är okej, men de har en riktigt god shot som heter Tim Tam
                och smakar choklad!
              </SmallBody>
              <Divider />

              <ActionText color='black'>4. Tvinky</ActionText>
              <SmallBody color='black'>
                Dags för fantstiska drinkar och god mat. Det är lite mer ett
                tredje långställe fast på andra långgatan. Passa på att lyxa
                till det på Tvinky med en drink - Tvinkylini eller Salty Boomer
                och mat - kroketter eller råbiff.
              </SmallBody>
              <Divider />

              <ActionText color='black'>5. Ölstugan Tullen</ActionText>
              <SmallBody color='black'>
                Tullen borde vara med i alla barrundor, de har ju även en egen
                Ölstugan Tullen barrunda! Tullen är grundad av en riktigt go
                brud, och de har alltid massa spännande craft beers att prova!
                Perfekt efter maten med en suröl!
              </SmallBody>
              <Divider />

              <ActionText color='black'>6. Brygghuset</ActionText>
              <SmallBody color='black'>
                Man måste besöka Brygghuset minst en gång! Brygghuset har öppet
                allra längst så det är perfekta baren att avsluta rundan med.
                Här hittar du goa bartenders, billiga och goa snacks, och
                spännande folk. Avsluta som du började med en stor stark!
              </SmallBody>
              <Divider />
            </Col>
          </Row>
        </GuideContainer>

        <Spacing spacing={4} />
      </Content>

      <CallToActionBanner
        title='Tips på rundor?'
        actionText='Skicka in dina rundor till anders@mail.se'
        mailto='betina@weapp.se'
      />

      <Content>
        <Spacing spacing={4} />
        <GuideContainer bgColor='#C4C4FF'>
          <Row>
            <Col md={6} style={{ padding: "1rem", paddingLeft: "2rem" }}>
              <H4 color='black'>Matrundan</H4>
              <Body color='black'>
                Frukost, snacks, pommes, middag. Här kommer en guide för blandat
                gött käk under en runda! Även här kikar vi in på tredje lång.
              </Body>
              <Spacing spacing={1} />
              <Divider />

              <Spacing spacing={1} />
              <ActionText color='black'>
                1. Byns Bistro - Kaffe(-drink)
              </ActionText>
              <Spacing spacing={1} />
              <ActionText color='black'>2. Kafé Magasinet - Fika</ActionText>
              <Spacing spacing={1} />
              <ActionText color='black'>3. Papa Mastani - Crépes</ActionText>
              <Spacing spacing={1} />
              <ActionText color='black'>
                4. Ölkompaniet - Pommes med dip
              </ActionText>
              <Spacing spacing={1} />
              <ActionText color='black'>
                5. Made In China - Smårätter
              </ActionText>
              <Spacing spacing={1} />
              <ActionText color='black'>6. Dansken - Smörrebröd</ActionText>
              <Spacing spacing={1} />
              <ActionText color='black'>
                7. 7 eleven - Kaffe och korv!
              </ActionText>
              <Spacing spacing={1} />
              <ActionText color='black'>
                8. Olssons Vin - Ost- och charkbricka
              </ActionText>
              <Spacing spacing={1} />
              <ActionText color='black'>
                9. Contrast - Middag och vin
              </ActionText>
            </Col>
            <Col md={6}>
              <StyledImage src={barrundaImage} />
            </Col>
          </Row>
        </GuideContainer>
      </Content>

      <Spacing spacing={8} />
    </>
  );
};

export default BarrundaGuide;
