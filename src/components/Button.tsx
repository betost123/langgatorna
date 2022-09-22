import * as React from "react";
import styled from "styled-components";
import { ButtonText } from "./Typography";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "tetriary";
}

const SecondaryButton = styled.button`
  padding: 0.5rem 3rem;
  border-radius: 2rem;
  border-color: black;
  border-width: 1px;
  background-color: rgba(0, 0, 0, 0.1);
  width: 100%;
`;

const PrimaryButton = styled.button`
  padding: 0.5rem 3rem;
  border-radius: 2rem;
  background-color: white;
  width: 100%;
`;

const TetriaryButton = styled.button`
  padding: 0.5rem 3rem;
  border-radius: 2rem;
  border-color: #9a9eff;
  border-width: 1px;
  background-color: rgba(0, 0, 0, 0.1);
  width: 100%;
`;

const Button: React.FunctionComponent<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
}) => {
  return (
    <>
      {variant === "primary" ? (
        <PrimaryButton onClick={onClick}>
          <ButtonText>{children}</ButtonText>
        </PrimaryButton>
      ) : variant === "tetriary" ? (
        <TetriaryButton onClick={onClick}>
          <ButtonText color='#9A9EFF'>{children}</ButtonText>
        </TetriaryButton>
      ) : (
        <SecondaryButton onClick={onClick}>
          <ButtonText>{children}</ButtonText>
        </SecondaryButton>
      )}
    </>
  );
};

export default Button;
