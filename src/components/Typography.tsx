import styled from "styled-components";
import * as React from "react";
import { MediaQuery } from "../utils/styling-helpers";

interface TextProps {
  children: React.ReactNode;
  color?: string;
  textAlign?: string;
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

const H3Style = styled.h2<{ color?: string; textAlign?: string }>`
  font-size: 36px;
  font-weight: 400;
  text-align: ${(props) => props.textAlign};
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

const InfoTextStyle = styled.h2<{ color?: string; textAlign?: string }>`
  font-size: 24px;
  font-weight: 500;
  text-align: ${(props) => props.textAlign};
  color: ${(props) => props.color ?? "white"};
  ${MediaQuery.MOBILE} {
    font-size: 20px;
  }
`;

const ButtonTextStyle = styled.p`
  text-align: center;
  font-size: 12px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: black;
`;

const ActionTextStyle = styled.p<{ color?: string; textAlign?: string }>`
  text-align: ${(props) => (props.textAlign ? props.textAlign : "center")};
  font-size: 12px;
  letter-spacing: 2px;
  font-weight: 400;
  text-transform: uppercase;
  color: ${(props) => props.color ?? "white"};
`;

const H4Style = styled.h2<{ color?: string; textAlign?: string }>`
  font-size: 18px;
  font-weight: 500;
  text-align: ${(props) => props.textAlign ?? "center"};
  color: ${(props) => props.color ?? "white"};
  letter-spacing: 2px;
  text-transform: uppercase;
  ${MediaQuery.MOBILE} {
    font-size: 16px;
  }
`;

const SmallBodyStyle = styled.h2<{ color?: string }>`
  font-size: 12px;
  color: ${(props) => props.color ?? "white"};
  font-weight: 400;
  ${MediaQuery.MOBILE} {
    font-size: 11px;
  }
`;

export const H2: React.FunctionComponent<TextProps> = ({ children, color }) => (
  <H2Style color={color}>{children}</H2Style>
);

export const H3: React.FunctionComponent<TextProps> = ({
  children,
  color,
  textAlign,
}) => (
  <H3Style color={color} textAlign={textAlign}>
    {children}
  </H3Style>
);

export const Body: React.FunctionComponent<TextProps> = ({
  children,
  color,
}) => <BodyStyle color={color}>{children}</BodyStyle>;

export const SmallBody: React.FunctionComponent<TextProps> = ({
  children,
  color,
}) => <SmallBodyStyle color={color}>{children}</SmallBodyStyle>;

export const InfoText: React.FunctionComponent<TextProps> = ({
  children,
  color,
  textAlign,
}) => (
  <InfoTextStyle color={color} textAlign={textAlign}>
    {children}
  </InfoTextStyle>
);

export const H4: React.FunctionComponent<TextProps> = ({
  children,
  color,
  textAlign,
}) => (
  <H4Style color={color} textAlign={textAlign}>
    {children}
  </H4Style>
);

export const ActionText: React.FunctionComponent<TextProps> = ({
  children,
  color,
  textAlign,
}) => (
  <ActionTextStyle color={color} textAlign={textAlign}>
    {children}
  </ActionTextStyle>
);

export const ButtonText: React.FunctionComponent<TextProps> = ({
  children,
}) => <ButtonTextStyle>{children}</ButtonTextStyle>;
