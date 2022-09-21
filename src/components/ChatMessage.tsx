import * as React from "react";
import { Col, Row } from "react-flexbox-grid";
import styled from "styled-components";
import { Divider } from "./Divider";
import { ActionText, SmallBody } from "./Typography";

interface ChatMessageProps {
  message: string;
  date: string;
}

const Container = styled.div`
  width: 100%;
  min-height: 56px;
  padding: 1rem;
  margin-bottom: 1rem;
  margin-right: 1rem;
`;

const ChatMessage: React.FunctionComponent<ChatMessageProps> = ({
  message,
  date,
}) => (
  <Container>
    <Divider color='#7FA6DB' />
    <Row>
      <Col xs={10}>
        <SmallBody>{message}</SmallBody>
      </Col>
      <Col xs={2}>
        <ActionText textAlign='right'>{date}</ActionText>
      </Col>
    </Row>
  </Container>
);

export default ChatMessage;
