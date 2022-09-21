import { navigate } from "gatsby";
import * as React from "react";
import styled from "styled-components";
import Button from "./Button";
import { Divider } from "./Divider";
import Spacing from "./Spacer";
import { H4, SmallBody } from "./Typography";

interface GameCardProps {
  title: string;
  description?: string;
  navLink?: string;
}

const Container = styled.div`
  background-color: #f9f871;
  width: 100%;
  height: 100%;
  padding: 1rem;
`;

const DescriptionContainer = styled.div`
  padding: 1rem;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const GameCard: React.FunctionComponent<GameCardProps> = ({
  title,
  description,
  navLink,
}) => {
  return (
    <Container>
      <H4 color='black'>{title}</H4>
      <Divider color='black' />
      <Spacing spacing={1} />
      <DescriptionContainer>
        <SmallBody color='black'>{description}</SmallBody>
      </DescriptionContainer>
      {navLink && (
        <ButtonContainer>
          <Button onClick={() => navigate(navLink)}>Spela</Button>
        </ButtonContainer>
      )}
    </Container>
  );
};

export default GameCard;
