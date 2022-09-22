import { navigate } from "gatsby";
import * as React from "react";
import { Row } from "react-flexbox-grid";
import styled from "styled-components";
import Button from "./Button";
import { Divider } from "./Divider";
import Spacing from "./Spacer";
import { Body, H4, SmallBody } from "./Typography";

interface GamePlayCardProps {
  text: string;
  bgColor?: string;
}

const Container = styled.div<{ bgColor: string }>`
  background-color: ${(props) => props.bgColor};
  width: 100%;
  height: 100%;
  padding: 2rem 1rem 0 1rem;
`;

const GamePlayCard: React.FunctionComponent<GamePlayCardProps> = ({
  text,
  bgColor = "#f9f871",
}) => {
  return (
    <Container bgColor={bgColor}>
      <Divider color='black' />
      <Spacing spacing={2} />
      <Row center='xs'>
        <Body color='black'>{text}</Body>
      </Row>
      <Spacing spacing={2} />
      <Divider color='black' />
    </Container>
  );
};

export default GamePlayCard;
