import { navigate } from "gatsby";
import * as React from "react";
import { Col, Row } from "react-flexbox-grid";
import styled from "styled-components";
import { MediaQuery } from "../utils/styling-helpers";
import Button from "./Button";
import Spacing from "./Spacer";
import { Body, H2, H3, InfoText } from "./Typography";

interface InfoSlideProps {
  imageSrc: string;
  title: string;
  text: string;
  buttonText: string;
  link: string;
}

const Container = styled.div`
  width: 100%;
  background-color: #f9f871;
`;

const StyledImage = styled.img`
  object-fit: cover;
  width: 100%;
  max-height: 600px;
  margin-bottom: -4px;

  ${MediaQuery.MOBILE} {
    max-height: 450px;
    margin-top: -1rem;
  }
`;

const TextSection = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  text-align: right;
`;

const InfoSlide: React.FunctionComponent<InfoSlideProps> = ({
  imageSrc,
  title,
  text,
  buttonText,
  link,
}) => {
  const onClickButton = () => navigate(link);

  return (
    <Container>
      <Row>
        <Col md={6}>
          <StyledImage src={imageSrc} alt={title} />
        </Col>
        <Col md={6}>
          <TextSection>
            <Spacing spacing={2} />

            <H3 color='#000000'>{title}</H3>
            <Spacing spacing={2} />
            <Col md={8} mdOffset={4}>
              <InfoText color='black'>{text}</InfoText>
            </Col>
            <Spacing spacing={4} />
            <Button variant='secondary' onClick={onClickButton}>
              {buttonText}
            </Button>
          </TextSection>
        </Col>
      </Row>
    </Container>
  );
};

export default InfoSlide;
