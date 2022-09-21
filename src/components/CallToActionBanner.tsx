import * as React from "react";
import styled from "styled-components";
import { ActionText, Body, ButtonText, H2 } from "./Typography";

interface CallToActionProps {
  title: string;
  actionText: string;
  mailto?: string;
  onClick?: () => void;
}

const Container = styled.div`
  background-color: #99b0a7;
  width: 100vw;
  height: 210px;
  display: flex;
  padding: 1rem;
  justify-content: center;
  margin-left: -8px;
  flex-direction: column;
  text-align: center;
`;

const MailtoLink = styled.a`
  text-decoration: none;
`;

const CallToActionBanner: React.FunctionComponent<CallToActionProps> = ({
  title,
  actionText,
  mailto,
  onClick,
}) => (
  <Container>
    <H2 color='black'>{title}</H2>
    <MailtoLink href={`mailto:${mailto}`}>
      <ActionText color='black'>{actionText}</ActionText>
    </MailtoLink>
  </Container>
);

export default CallToActionBanner;
