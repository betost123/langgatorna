import { Link } from "gatsby";
import * as React from "react";
import { Col, Grid, Row } from "react-flexbox-grid";
import styled from "styled-components";
import { ActionText, H4 } from "./Typography";
import swishQrCode from "../images/swish-qr.png";
import Spacing from "./Spacer";

const Container = styled.div`
  color: white;
  padding: 1rem;
`;

const StyledMailto = styled.a`
  text-decoration: none;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledImage = styled.img`
  width: 130px;
`;

export const Footer: React.FC = () => {
  return (
    <Grid>
      <Row end='xs'>
        <Col md={3} xs={6}>
          <H4 textAlign='left'>Kontakt</H4>
          <StyledMailto href='mailto:betina@weapp.se'>
            <ActionText textAlign='left'>Anders (CEO)</ActionText>
          </StyledMailto>
          <StyledMailto href='mailto:betina@weapp.se'>
            <ActionText textAlign='left'>Rolf (CMO)</ActionText>
          </StyledMailto>
          <Spacing spacing={2} />
          <ActionText textAlign='left'>Nordhemsgatan 18B</ActionText>
          <ActionText textAlign='left'>413 06 Göteborg</ActionText>
        </Col>

        <Col md={3} xs={6}>
          <H4 textAlign='left'>Sociala Medier</H4>
          <StyledLink to='https://instagram.com/enlitenrolf'>
            <ActionText textAlign='left'>Instagram</ActionText>
          </StyledLink>
          <StyledLink to='https://instagram.com/enlitenrolf'>
            <ActionText textAlign='left'>TikTok</ActionText>
          </StyledLink>
          <StyledLink to='https://instagram.com/enlitenrolf'>
            <ActionText textAlign='left'>Encrochat</ActionText>
          </StyledLink>
        </Col>

        <Col md={3} xs={6}>
          <H4 textAlign='left'>Genvägar</H4>
          <StyledLink to='/news'>
            <ActionText textAlign='left'>Jobba hos oss</ActionText>
          </StyledLink>
          <StyledLink to='/news'>
            <ActionText textAlign='left'>Företagsinfo</ActionText>
          </StyledLink>
        </Col>

        <Col md={3} xs={6}>
          <H4 textAlign='right'>Stötta oss</H4>
          <StyledImage src={swishQrCode} />
        </Col>
      </Row>
    </Grid>
  );
};
