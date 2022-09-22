import * as React from "react";
import { Col, Grid, Row } from "react-flexbox-grid";
import styled from "styled-components";
import HeroBanner from "../components/HeroBanner";
import Spacing from "../components/Spacer";
import { H2, InfoText } from "../components/Typography";
import BarCard from "../components/BarCard";
import InfoSlide from "../components/InfoSlide";
import andersGuide from "../images/anders-guide.png";
import { barerLista } from "../utils/data";
import BarFilterContainer from "../components/BarFilterComponent";

const Content = styled.div`
  padding: 1rem;
`;

const Bars: React.FunctionComponent = () => {
  const [filter, setFilter] = React.useState([]);

  const onClickFilter = (filterProp: string) => {
    if (filter.includes(filterProp)) {
      setFilter(filter.filter((x) => x !== filterProp));
    } else {
      //setFilter([...filter, filterProp]);
      setFilter([filterProp]);
    }
  };

  const filteredBars = barerLista.filter((x) =>
    x.filters?.includes(filter.toString())
  );

  const bars = filteredBars.length > 0 ? filteredBars : barerLista;

  return (
    <>
      <Spacing spacing={5} />
      <HeroBanner imageSrc='https://images.pexels.com/photos/1876878/pexels-photo-1876878.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
      <Grid>
        <Content>
          <Col>
            <H2>Barer</H2>
          </Col>
          <Col md={8}>
            <InfoText>
              Här kommer en lista över barer och restauranger du kan hitta på
              långgatorna! Har vi missat någon? Hör isåfall av dig.
            </InfoText>
          </Col>
          <Spacing spacing={4} />
          <BarFilterContainer onClickFilter={onClickFilter} filter={filter} />
          <Spacing spacing={2} />
          <Row center='xs'>
            {bars.map((bar) => (
              <BarCard key={bar.name} {...bar} bgColor='white' />
            ))}
          </Row>
          <Spacing spacing={4} />
          <InfoSlide
            imageSrc={andersGuide}
            title='Ny på långgatorna?'
            text='Är du ny till långgatorna? Låt Anders guida dig för en perfekt första upplevelse! Anders har si sådär 20+ års erfarenhet, så han kan skapa en riktigt go kväll.'
            buttonText='Läs mer'
            link='/news/anders-guide-till-beginners'
          />
        </Content>
      </Grid>
    </>
  );
};

export default Bars;
