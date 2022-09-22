import * as React from "react";
import { Col, Grid, Row } from "react-flexbox-grid";
import styled from "styled-components";
import HeroBanner from "../../components/HeroBanner";
import Spacing from "../../components/Spacer";
import { ActionText, H2, H4, SmallBody } from "../../components/Typography";
import { MediaQuery } from "../../utils/styling-helpers";
import allDayLangImage from "../../images/all-day-lang-image.jpg";
import breakfastImage from "../../images/breakfast-image.jpg";
import noonImage from "../../images/noon-image.jpg";
import prepartyImage from "../../images/preparty.jpg";
import eveningHangImage from "../../images/evening-hang.jpg";
import efterfestImage from "../../images/efterfest.jpg";
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

const HeldagPaLangen: React.FunctionComponent = () => (
  <>
    <Spacing spacing={5} />
    <HeroBanner imageSrc={allDayLangImage} />
    <Grid>
      <Content>
        <Col>
          <H2>Heldag på lången</H2>
        </Col>
        <Spacing spacing={4} />

        <GuideContainer bgColor='#AAD9C8'>
          <Row>
            <Col md={6}>
              <StyledImage src={breakfastImage} height={400} />
            </Col>
            <Col md={6} style={{ padding: "1rem" }}>
              <H4 color='black'>Morgon 07.30 - 11.00</H4>
              <Spacing spacing={1} />
              <Divider color='black' />

              <Spacing spacing={1} />
              <ActionText color='black'>
                Espresso House / Kafé Magasinet
              </ActionText>
              <SmallBody color='black' textAlign='center'>
                Vi börjar med frukost och gratis WiFi! Espresso House är alltid
                trevligt med vi rekommenderar ett besök hos Kafé Magasinet, ta
                en kaffe eller frukostkit i deras orangeri! Dra fram datorn
                eller en bok och njut!
              </SmallBody>
              <Spacing spacing={1} />
              <ActionText color='black'>Shopping i Haga och Arkivet</ActionText>
              <SmallBody color='black' textAlign='center'>
                Efter frukosten, om man har lite tid över rekommenderar vi ett
                besök i Haga. På vägen till Haga bör man kolla in Arkivet vid
                Järntorget. Här säljs lyxig second hand.Haga är perfekt för att
                strosa och kolla in mysiga gamla butiker och fik.
              </SmallBody>
              <Spacing spacing={1} />
            </Col>
          </Row>
        </GuideContainer>
        <Spacing spacing={4} />

        <GuideContainer bgColor='#7DAB9A'>
          <Row>
            <Col md={6} style={{ padding: "1rem" }}>
              <H4>Förmiddag 11.00 - 15.00</H4>
              <Spacing spacing={1} />
              <Divider color='white' />

              <Spacing spacing={1} />
              <ActionText>Lunch</ActionText>
              <SmallBody color='black' textAlign='center'>
                Det börjar bli dags för lunch! Det finns några riktiga
                lunchpärlor vid långgatorna. För billig lunch kan du gå till
                Bangkok Kitchen eller Sushi Vimi. Favoritlunchen hittar du på
                Tvinky, eller i Saluhallen Briggen - där finns pasta, asiatiskt
                och sallad. Sugen på något mer basic? Kolla in Brödernas, Made
                in China, eller Tacos o Tequila. Lyx finnes på Coco Orangeri.
              </SmallBody>
              <Spacing spacing={1} />
              <ActionText>Lunchpromenixen</ActionText>
              <SmallBody color='black' textAlign='center'>
                Efter lunch är det dags att sträcka på sig! Det finns tre fina
                kyrkor att utforska, kort, medel och längre väg - nämnligen
                Oscar Fredriks Kyrka, Masthuggskyrkan (finast utsikt!) och
                Hagakyrkan.
              </SmallBody>
              <Spacing spacing={1} />
              <ActionText>Skapa minnen</ActionText>
              <SmallBody color='black' textAlign='center'>
                Innan vi går på bärsen är det dags att skapa minnen! Vi springer
                in till Andra Lång Tattoo för att ta en drop in-tatuering. Har
                de fullt finns även en studio på Första lång - Valento. Känner
                du för ett mindre committment? Shoppa kläder på Shelta och
                Sneakers Corner. Kolla inredning på Svenssons i Lammhult.
              </SmallBody>
              <Spacing spacing={1} />
            </Col>
            <Col md={6}>
              <StyledImage src={noonImage} height={450} />
            </Col>
          </Row>
        </GuideContainer>

        <Spacing spacing={4} />

        <GuideContainer bgColor='#537E6F'>
          <Row>
            <Col md={6}>
              <StyledImage src={prepartyImage} height={380} />
            </Col>
            <Col md={6} style={{ padding: "1rem" }}>
              <H4>Förfest 15.00 - 18.30</H4>
              <Spacing spacing={1} />
              <Divider color='black' />

              <Spacing spacing={1} />
              <ActionText>Ring alla polare</ActionText>
              <SmallBody textAlign='center'>
                wow, äntligen dags för öl! Efter en ordentlig grund, och lite
                motion, shopping och spillt blod är det dags att unna sig. Det
                är alltid skönt att börja med ett glas vin. På tisdagar går man
                till Olssons vin, då de har Canvas o Cava. Andra dagar springer
                man till Contrast som har mängder med stand up, sällskapsspel
                och TV-spel. Perfekt för gött uppvärmningshäng. Även Ölkompaniet
                har spel och öl.
              </SmallBody>
            </Col>
          </Row>
        </GuideContainer>

        <Spacing spacing={4} />

        <GuideContainer bgColor='#2A5547'>
          <Row>
            <Col md={6} style={{ padding: "1rem" }}>
              <H4>Kväll 18.30 - 23.00</H4>
              <Spacing spacing={1} />
              <Divider />

              <Spacing spacing={1} />
              <ActionText>Chill häng</ActionText>
              <SmallBody textAlign='center'>
                Alla älskar quiz. Vässa till hjärnan och njut av sällskapet!
                Bästa quizzet hittar du på Byns Bistro på tisdagar. På onsdagar
                kör Ölkompaniet, och övriga dagar brukar Göteburgare hålla quiz.
                Fredagar hittar vi quiz på Kick Off, och söndagar på Kellys och
                Notting Hill. Livemusik på Byns fredag och lördag. Stand up
                måndagar på The Abyss och onsdagar på Annapurna Nepal. Man kan
                alltid beställa in lite snacks!
              </SmallBody>
              <Spacing spacing={1} />
              <ActionText>Gött tugg</ActionText>
              <SmallBody textAlign='center'>
                Vill du bara hänga, prata och kanske äta lite samtidigt? För dig
                som vill sitta med sharing-koncept rekommenderas Made In China,
                Tacos o Tequila och Tvinky. För billigt käk och bra stämning
                rekommenderas Kings Head, Ölkompaniet och Göteburgare. En annan
                favorit är halv special hos Kick Off, guld, särskilt om man fått
                i sig en för många öl.
              </SmallBody>
              <Spacing spacing={1} />
              <ActionText>Häng för den fine</ActionText>
              <SmallBody textAlign='center'>
                It's cool man, I got u. Här är de fina ställena på långgatorna
                där pengar kan spenderas: Taverna Averna, Made In China, Tvinky
                och Tant Anton i Stan.
              </SmallBody>
              <Spacing spacing={1} />
            </Col>
            <Col md={6}>
              <StyledImage src={eveningHangImage} height={480} />
            </Col>
          </Row>
        </GuideContainer>
        <Spacing spacing={4} />

        <GuideContainer bgColor='#002E22'>
          <Row>
            <Col md={6}>
              <StyledImage src={efterfestImage} height={350} />
            </Col>
            <Col md={6} style={{ padding: "1rem" }}>
              <H4>Party 23.00 - sent</H4>
              <Spacing spacing={1} />
              <Divider />

              <Spacing spacing={1} />
              <ActionText>Kort sammanfattning</ActionText>
              <SmallBody textAlign='center'>
                Brygghuset på långgatorna har öppet längst. Efteråt rör man sig
                lite snett utåt, Folk, Pustervik (som har massa goa spelningar)
                och Irish Embassy har öppet till sent. Det är stabilt, billigt
                och blandat folk, inget avenyn här! Behövs efterfest? Skriv i
                gästboken eller fråga efter Turbo.
              </SmallBody>
            </Col>
          </Row>
        </GuideContainer>

        <Spacing spacing={4} />
      </Content>
    </Grid>
  </>
);

export default HeldagPaLangen;
