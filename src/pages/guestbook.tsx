import * as React from "react";
import { Col, Grid, Row } from "react-flexbox-grid";
import styled from "styled-components";
import Button from "../components/Button";
import ChatMessage from "../components/ChatMessage";
import HeroBanner from "../components/HeroBanner";
import Spacing from "../components/Spacer";
import { Body, H2 } from "../components/Typography";

const Content = styled.div`
  padding: 1rem;
`;

const messagesList = [
  {
    message: "Jag vill jobba på andr alång",
    date: "Ons 22/9",
  },
  {
    message:
      "Hej, nån som vill dricka bärs med oss på Dansken? Vi sitter fyra goa gubbs här",
    date: "Tis 21/9",
  },
  {
    message:
      "Omg vilken fet hemsida, har aldrig varit på andra lång innan och nu tycker jag det är fett coolt yao.",
    date: "Mån 20/9",
  },
];

const TextArea = styled.textarea`
  font-size: 16px;
  width: 90%;
  background-color: #7fa6db;
  border: none;
  color: white;
  padding: 1rem;
  font-family: -apple-system, Roboto, sans-serif, serif;

  ::placeholder {
    color: rgba(238, 230, 230, 0.7);
    word-break: break-word;
  }
`;

const initialFormValues = {
  message: "",
};

const GuestBook: React.FunctionComponent = () => {
  const today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0");

  const [values, setValues] = React.useState(initialFormValues);

  const handleInputs = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const [messages, setMessages] = React.useState(messagesList);

  const handleSubmit = () => {
    const date = `${dd} / ${mm}`;
    const newMessage = { message: values.message, date };
    setMessages([newMessage, ...messages]);
    setValues(initialFormValues);
  };

  return (
    <>
      <Spacing spacing={5} />
      <HeroBanner imageSrc='https://www.gp.se/image/policy:1.74192116:1654355402/lCCF05qs932pVHNRQF_RbwtHySM.jpg?f=Regular&w=960&$p$f$w=31e06ff' />
      <Grid>
        <Content>
          <Col>
            <H2>Gästbok</H2>
          </Col>
          <Col md={12}>
            <Body>Här kan du lämna meddelanden i gästboken!</Body>
            <Spacing spacing={2} />
            <Row around='xs'>
              <Col md={8}>
                <TextArea
                  name='message'
                  placeholder='Skriv inget taskigt'
                  onChange={handleInputs}
                />
              </Col>
              <Col md={4}>
                <Button onClick={handleSubmit}>Skicka</Button>
              </Col>
            </Row>
          </Col>
          <Spacing spacing={3} />
          {messages.map((message, index) => (
            <ChatMessage key={index} {...message} />
          ))}
          <Spacing spacing={8} />
        </Content>
      </Grid>
    </>
  );
};

export default GuestBook;
