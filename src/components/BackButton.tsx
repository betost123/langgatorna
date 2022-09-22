import { Link } from "gatsby";
import * as React from "react";
import styled from "styled-components";
import { MediaQuery } from "../utils/styling-helpers";
import { ButtonText } from "./Typography";

interface BackButtonProps {
  navLink: string;
  buttonText?: string;
  color?: string;
}

const StyledLink = styled(Link)`
  text-decoration: none;
  opacity: 0.5;
`;

const ButtonContainer = styled.div`
  margin-left: 1rem;

  ${MediaQuery.DESKTOP} {
    display: none;
  }
`;

const BackButton: React.FunctionComponent<BackButtonProps> = ({
  navLink,
  buttonText = "Tillbaka",
  color = "white",
}) => (
  <ButtonContainer>
    <StyledLink to={navLink}>
      <ButtonText color={color} textAlign='left'>
        {buttonText}
      </ButtonText>
    </StyledLink>
  </ButtonContainer>
);

export default BackButton;
