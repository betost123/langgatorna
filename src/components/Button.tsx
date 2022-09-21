import * as React from "react";
import styled from "styled-components";
import { ButtonText } from "./Typography";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}

const SecondaryButton = styled.button`
  padding: 0.5rem 3rem;
  border-radius: 2rem;
  border-color: black;
  border-width: 1px;
  background-color: rgba(0, 0, 0, 0.1);
`;

const PrimaryButton = styled.button`
  padding: 0.5rem 3rem;
  border-radius: 2rem;
  background-color: white;
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
      ) : (
        <SecondaryButton onClick={onClick}>
          <ButtonText>{children}</ButtonText>
        </SecondaryButton>
      )}
    </>
  );
};

export default Button;
