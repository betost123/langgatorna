import * as React from "react";
import { Col, Row } from "react-flexbox-grid";
import styled from "styled-components";

import { ActionText, H4 } from "../components/Typography";

import MangoIcon from "../components/icons/MangoIcon";
import PartyHatIcon from "../components/icons/PartyHatIcon";
import DogIcon from "../components/icons/DogIcon";
import BeerIcon from "../components/icons/BeerIcon";
import PillIcon from "../components/icons/PillIcon";
import RestroomIcon from "../components/icons/RestroomIcon";

interface BarFilterContainerProps {
  onClickFilter: (filterProp: string) => void;
  filter: Array<string>;
}

const IconGuideContainer = styled.div`
  padding: 1rem;
  background-color: white;
`;

const IconColumn = styled(Col)<{ isSelected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${(props) => (props.isSelected ? 1 : 0.5)};
  cursor: pointer;
  border-width: 1px;
  border-style: none none solid none;
  border-color: ${(props) => (props.isSelected ? "#9A9EFF" : "transparent")};
`;

const HorizontalSpacer = styled.div`
  width: 0.5rem;
`;

const BarFilterContainer: React.FunctionComponent<BarFilterContainerProps> = ({
  filter,
  onClickFilter,
}) => {
  return (
    <IconGuideContainer>
      <Row center='xs'>
        <Col xs={12}>
          <H4 color='black'>Filter</H4>
        </Col>
        <IconColumn
          md={4}
          xs={6}
          isSelected={filter.includes("vegetarian")}
          onClick={() => onClickFilter("vegetarian")}
        >
          <MangoIcon />
          <HorizontalSpacer />
          <ActionText color='black'>Bra vegetariskt</ActionText>
        </IconColumn>
        <IconColumn
          md={4}
          xs={6}
          isSelected={filter.includes("activityHost")}
          onClick={() => onClickFilter("activityHost")}
        >
          <PartyHatIcon /> <HorizontalSpacer />
          <ActionText color='black'>Aktiviteter</ActionText>
        </IconColumn>
        <IconColumn
          md={4}
          xs={6}
          isSelected={filter.includes("dogFriendly")}
          onClick={() => onClickFilter("dogFriendly")}
        >
          <DogIcon /> <HorizontalSpacer />
          <ActionText color='black'>Hundvänligt</ActionText>
        </IconColumn>
        <IconColumn
          md={4}
          xs={6}
          isSelected={filter.includes("greatBeers")}
          onClick={() => onClickFilter("greatBeers")}
        >
          <BeerIcon /> <HorizontalSpacer />
          <ActionText color='black'>Bra ölutbud</ActionText>
        </IconColumn>
        <IconColumn
          md={4}
          xs={6}
          isSelected={filter.includes("gangFavorite")}
          onClick={() => onClickFilter("gangFavorite")}
        >
          <PillIcon /> <HorizontalSpacer />
          <ActionText color='black'>Favoritbar</ActionText>
        </IconColumn>
        <IconColumn
          md={4}
          xs={6}
          isSelected={filter.includes("goodBathrooms")}
          onClick={() => onClickFilter("goodBathrooms")}
        >
          <RestroomIcon /> <HorizontalSpacer />
          <ActionText color='black'>Fräsch toa</ActionText>
        </IconColumn>
      </Row>
    </IconGuideContainer>
  );
};

export default BarFilterContainer;
