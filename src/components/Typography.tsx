import styled from "styled-components";
import * as React from "react";
import { MediaQuery } from "../utils/styling-helpers";

interface TextProps {
  children: React.ReactNode;
  color?: string;
}

const BigTitleStyle = styled.h1<{ color?: string }>`
  font-size: 100px;
  letter-spacing: 10px;

  ${MediaQuery.MOBILE} {
    font-size: 30px;
  }
`;

const H2Style = styled.h2<{ color?: string }>`
  font-size: 60px;
  font-weight: 400;
  color: ${(props) => props.color ?? "white"};
  ${MediaQuery.MOBILE} {
    font-size: 30px;
  }
`;

const H3Style = styled.h2<{ color?: string }>`
  font-size: 36px;
  font-weight: 400;
  color: ${(props) => props.color ?? "white"};
  ${MediaQuery.MOBILE} {
    font-size: 24px;
  }
`;

const BodyStyle = styled.h2<{ color?: string }>`
  font-size: 16px;
  color: ${(props) => props.color ?? "white"};
  ${MediaQuery.MOBILE} {
    font-size: 14px;
  }
`;

const InfoTextStyle = styled.h2<{ color?: string }>`
  font-size: 24px;
  font-weight: 500;
  color: ${(props) => props.color ?? "white"};
  ${MediaQuery.MOBILE} {
    font-size: 20px;
  }
`;

const ButtonTextStyle = styled.p`
  text-align: center;
  font-size: 11px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: black;
`;

export const H2: React.FunctionComponent<TextProps> = ({ children, color }) => (
  <H2Style color={color}>{children}</H2Style>
);

export const H3: React.FunctionComponent<TextProps> = ({ children, color }) => (
  <H3Style color={color}>{children}</H3Style>
);

export const Body: React.FunctionComponent<TextProps> = ({
  children,
  color,
}) => <BodyStyle color={color}>{children}</BodyStyle>;

export const InfoText: React.FunctionComponent<TextProps> = ({
  children,
  color,
}) => <InfoTextStyle color={color}>{children}</InfoTextStyle>;

export const ButtonText: React.FunctionComponent<TextProps> = ({
  children,
}) => <ButtonTextStyle>{children}</ButtonTextStyle>;
