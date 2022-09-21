import * as React from "react";
import styled from "styled-components";

interface HeroBannerProps {
  imageSrc: string;
}

const Container = styled.div`
  width: 100vw;
  height: 80vh;
  margin-top: -6rem;
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const HeroBanner: React.FunctionComponent<HeroBannerProps> = ({ imageSrc }) => (
  <Container>
    <Image src={imageSrc} alt={`Hero banner`} />
  </Container>
);

export default HeroBanner;
