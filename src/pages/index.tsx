import * as React from "react";
import type { HeadFC } from "gatsby";
import { Col, Row } from "react-flexbox-grid";
import styled from "styled-components";
import { MediaQuery } from "../utils/styling-helpers";
import Spacing from "../components/Spacer";
import InfoSlide from "../components/InfoSlide";
import andersCubaLibre from "../images/anders-cuba-libre.png";
import rolfRestaurang from "../images/rolf-restaurang.png";
import CallToActionBanner from "../components/CallToActionBanner";
import { BarImages, categoryCardData } from "../utils/data";
import CategoryCard from "../components/CategoryCard";
import { H2, H3 } from "../components/Typography";

const Image = styled.img<{ index: number }>`
  max-width: 100%;
  object-fit: cover;
  z-index: ${(props) => (props.index % 2 === 0 ? 10 : 1)};
`;

const Title = styled.h1`
  font-size: 100px;
  letter-spacing: 10px;

  ${MediaQuery.MOBILE} {
    font-size: 30px;
  }
`;

const IndexPage = () => {
  return (
    <>
      <Row center='xs'>
        <Title>Välkommen till långgatorna</Title>
      </Row>
      <Spacing spacing={4} />
      <InfoSlide
        imageSrc={andersCubaLibre}
        title='Långgatornas bästa cubra libre!'
        text='Anders har gett sig ut för att hitta långgatornas bästa cuba libre. Vilken har helt enkelt bäst APK och smak?'
        buttonText='Läs mer'
        link='/news/anders-testar-cuba-libre'
      />
      <Spacing spacing={4} />
      <CallToActionBanner
        title='Vill du att din bar ska synas här?'
        actionText='Kontakta anders@mail.com'
        mailto='betina@weapp.se'
      />
      <Spacing spacing={4} />

      <Col>
        <H3>Se dagens erbjudanden</H3>
      </Col>
      <Row center='xs'>
        {categoryCardData.map((category) => (
          <CategoryCard
            imageSrc={category.imageSrc}
            title={category.title}
            onClick={() => console.log(category.title)}
          />
        ))}
      </Row>
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
      <Spacing spacing={8} />

      {/*}
      <Row>
        {BarImages.map((image, index) => (
          <Col md={6}>
            <Image src={image.image} alt={image.alt} index={index} />
          </Col>
        ))}
      </Row>
        */}
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Långgatorna</title>;
