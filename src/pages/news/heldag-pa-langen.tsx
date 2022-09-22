import * as React from "react";
import { Col, Row } from "react-flexbox-grid";
import styled from "styled-components";
import BarCard from "../../components/BarCard";
import Spacing from "../../components/Spacer";
import { ActionText, H2, H4 } from "../../components/Typography";
import { dogFriendlyBarsList } from "../../utils/data";
import { MediaQuery } from "../../utils/styling-helpers";
import { Divider } from "../../components/Divider";

const Content = styled.div`
  padding: 1rem;
`;

const GuideContainer = styled.div<{ bgColor: string }>`
  width: 100%;
  background-color: ${(props) => props.bgColor};
`;

const StyledImage = styled.img<{ height?: number }>`
  object-fit: cover;
  width: 100%;
  max-height: ${(props) => (props.height ? `${props.height}px` : "650px")};
  margin-bottom: -4px;

  ${MediaQuery.MOBILE} {
    max-height: 450px;
    margin-top: -1rem;
  }
`;

const HeldagPaLangen: React.FunctionComponent = () => (
  <>
    <Spacing spacing={3} />
    <Content>
      <Col>
        <H2>Heldag på lången</H2>
      </Col>
      <Spacing spacing={4} />

      <Spacing spacing={4} />
    </Content>
  </>
);

export default HeldagPaLangen;
