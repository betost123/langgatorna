import * as React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #003c37;
  width: 100vw;
  padding: 2rem;
  //position: absolute;
  //bottom: 0;
  left: 0;
  color: white;
  min-height: 180px;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
`;

export const Footer: React.FC = () => {
  return <Container>Drick mycket bärs</Container>;
};
