import { Link } from "gatsby";
import * as React from "react";
import { Col } from "react-flexbox-grid";
import styled, { keyframes } from "styled-components";
import { MediaQuery } from "../utils/styling-helpers";
import { Body, InfoText } from "./Typography";

interface CategoryCardProps {
  imageSrc: string;
  title: string;
  navLink: string;
}

const Container = styled.div`
  background-color: #77a758;
  border-radius: 12px;
`;

const Overlay = styled.div`
  visibility: hidden;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex: 1;
  background-color: rgba(20, 20, 20, 0.6);
`;

const fadeIn = keyframes`
  0% {opacity: 0}
  100%{opacity : 1}
`;

const CardContainer = styled.div`
  position: relative;

  :hover {
    ${Overlay} {
      animation: 0.4s ${fadeIn} ease-in;
      visibility: visible;
    }
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  padding: 0 8px;
  text-align: center;
  width: 100%;
`;

const Column = styled(Col)`
  padding: 1rem;
  width: 100%;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 12px;
`;

const CategoryCard: React.FunctionComponent<CategoryCardProps> = ({
  imageSrc,
  title,
  navLink,
}) => (
  <Column md={4}>
    <CardContainer>
      <StyledImage src={imageSrc} alt={title} />
      <Link to={navLink}>
        <Overlay>
          <Content>
            <InfoText>{title}</InfoText>
          </Content>
        </Overlay>
      </Link>
    </CardContainer>
  </Column>
);

export default CategoryCard;
