import * as React from "react";
import type { HeadFC } from "gatsby";
import { Col, Row } from "react-flexbox-grid";
import styled from "styled-components";
import { MediaQuery } from "../utils/styling-helpers";
import Spacing from "../components/Spacer";
import InfoSlide from "../components/InfoSlide";
import andersCubaLibre from "../images/anders-cuba-libre.png";

const images = [
  {
    image:
      "https://images.pexels.com/photos/274192/pexels-photo-274192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "image1",
  },
  {
    image:
      "https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "image2",
  },
  {
    image:
      "https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "image3",
  },
  {
    image:
      "https://images.pexels.com/photos/1089930/pexels-photo-1089930.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "image4",
  },
  {
    image:
      "https://images.pexels.com/photos/1876878/pexels-photo-1876878.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "image5",
  },
];

const Image = styled.img<{ index: number }>`
  max-width: 100%;
  object-fit: cover;
  z-index: ${(props) => (props.index % 2 === 0 ? 10 : 1)};
`;

const NameContainer = styled.div`
  width: 100%,
  margin-top: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 20;

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
      <Row center='md'>
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

      <Row>
        {images.map((image, index) => (
          <Col md={6}>
            <Image src={image.image} alt={image.alt} index={index} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Långgatorna</title>;
