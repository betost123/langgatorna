import * as React from "react";
import { Row } from "react-flexbox-grid";
import styled from "styled-components";
import Button from "./Button";
import { Divider } from "./Divider";
import Spacing from "./Spacer";
import { ActionText, Body, H4, SmallBody } from "./Typography";

interface ActivityCardProps {
  title: string;
  date?: string;
  time?: string;
  groupSize?: string;
  description?: string;
  buttonText?: string;
  onClick?: () => void;
}

const Container = styled.div`
  background-color: #99b0a7;
  width: 100%;
  height: 100%;
  padding: 1rem;
`;

const QuickInfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
`;

const DescriptionContainer = styled.div`
  padding: 1rem;
`;

const ActivityCard: React.FunctionComponent<ActivityCardProps> = ({
  title,
  date,
  groupSize,
  time,
  description,
  buttonText,
  onClick,
}) => {
  return (
    <Container>
      <H4>{title}</H4>
      <Divider color='black' />
      <QuickInfoContainer>
        <ActionText color='black'>{date}</ActionText>
        {time && <ActionText color='black'>tid: {time}</ActionText>}
        <ActionText color='black'>{groupSize}</ActionText>
      </QuickInfoContainer>
      <DescriptionContainer>
        <SmallBody color='black'>{description}</SmallBody>
      </DescriptionContainer>
      {buttonText && (
        <Row center='xs'>
          <Spacing spacing={1} />
          <Button onClick={onClick}>{buttonText}</Button>
        </Row>
      )}
    </Container>
  );
};

export default ActivityCard;
