import { navigate } from "gatsby";
import * as React from "react";
import styled from "styled-components";
import { MediaQuery } from "../utils/styling-helpers";
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
  height: 90%;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const DescriptionContainer = styled.div`
  padding: 0 1rem;
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
      <div>
        <H4 color='black'>{title}</H4>
        <Divider color='black' />
        <Spacing spacing={0.5} />
        <DescriptionContainer>
          <SmallBody color='black' textAlign='center'>
            {description}
          </SmallBody>
        </DescriptionContainer>
      </div>
      {navLink && (
        <ButtonContainer>
          <Button onClick={() => navigate(navLink)}>Spela</Button>
        </ButtonContainer>
      )}
    </Container>
  );
};

export default GameCard;
