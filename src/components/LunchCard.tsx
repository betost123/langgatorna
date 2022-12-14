import * as React from "react";
import styled from "styled-components";
import { LunchCardModel } from "../utils/models";
import Button from "./Button";
import { navigate } from "gatsby";
import { Divider } from "./Divider";
import Spacing from "./Spacer";
import { H4, SmallBody } from "./Typography";
import MangoIcon from "./icons/MangoIcon";
import PeachIcon from "./icons/PeachIcon";
import GlutenIcon from "./icons/GlutenIcon";
import MilkIcon from "./icons/MilkIcon";

const Container = styled.div`
  background-color: #9eadbd;
  height: 95%;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const DishTitleStyle = styled.h1`
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 600;
  text-align: center;
  letter-spacing: 2px;
`;

const IconsSection = styled.div`
  display: flex;
  justify-content: space-around;
`;

const LunchCard: React.FunctionComponent<LunchCardModel> = ({
  restaurant,
  lunchItems,
  navLink,
  optionalInfo,
}) => {
  const onClickVisitWebsite = () => {
    navLink && navigate(navLink);
  };

  const Icons: React.FunctionComponent<{ allergies: Array<string> }> = ({
    allergies,
  }) => (
    <IconsSection>
      {allergies.includes("vegetarian") && <MangoIcon />}
      {allergies.includes("vegan") && <PeachIcon />}
      {allergies.includes("lactose") && <MilkIcon />}
      {allergies.includes("gluten") && <GlutenIcon />}
    </IconsSection>
  );

  return (
    <Container>
      <div>
        <H4 color='white'>{restaurant}</H4>
        {optionalInfo && (
          <SmallBody color='#385772' textAlign='center'>
            {optionalInfo}
          </SmallBody>
        )}

        <Spacing spacing={1} />
        <Divider />
        <Spacing spacing={1} />

        {lunchItems.map((item, index) => (
          <div key={item.nameOfDish + index}>
            <DishTitleStyle>
              {item.nameOfDish}
              <span style={{ color: "#385772" }}>
                {item.cost && ` - ${item.cost}kr`}
              </span>
            </DishTitleStyle>
            <SmallBody color='#385772' textAlign='center'>
              {item.info}
            </SmallBody>
            {item.allergies && <Icons allergies={item.allergies} />}
            <Spacing spacing={1} />
          </div>
        ))}
        <Spacing spacing={2} />
      </div>
      {navLink && (
        <Button onClick={onClickVisitWebsite} variant='secondary'>
          Bes??k Hemsida
        </Button>
      )}
    </Container>
  );
};

export default LunchCard;
