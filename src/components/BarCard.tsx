import * as React from "react";
import { Col } from "react-flexbox-grid";
import styled from "styled-components";
import { MediaQuery } from "../utils/styling-helpers";
import { Body, H4, InfoText } from "./Typography";

interface BarCardProps {
  imageSrc: string;
  name: string;
  bgColor?: string;
}

const Image = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const TextContainer = styled.div<{ bgColor?: string }>`
  background-color: ${(props) => (props.bgColor ? props.bgColor : "#7fa6db")};
  margin-top: -1rem;
  padding: 1rem;
  margin-bottom: 1rem;
`;

const BarCard: React.FunctionComponent<BarCardProps> = ({
  imageSrc,
  name,
  bgColor,
}) => {
  return (
    <Col md={4} xs={12}>
      <Image src={imageSrc} alt={name} />
      <TextContainer bgColor={bgColor}>
        <H4 color='black'>{name}</H4>
      </TextContainer>
    </Col>
  );
};

export default BarCard;
