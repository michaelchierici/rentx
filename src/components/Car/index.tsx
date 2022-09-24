import React from "react";
import { CarDTO } from "../../dtos/CarDTO";

import Gasoline from "../../assets/gasoline.svg";
import {
  About,
  Brand,
  CarImage,
  Container,
  Details,
  Name,
  Period,
  Price,
  Rent,
  Type,
} from "./styles";
import { getAccessoriesIcons } from "../../utils/getAccessoriesIcons";

interface Props {
  data: CarDTO;
  onPress?: () => void;
}

const Car = ({ data, onPress, ...rest }: Props) => {
  const MotorIcon = getAccessoriesIcons(data.fuel_type);
  return (
    <Container {...rest} onPress={onPress}>
      <Details>
        <Brand>{data.brand}</Brand>
        <Name>{data.name}</Name>

        <About>
          <Rent>
            <Period>{data.period}</Period>
            <Price>{`R$ ${data.price}`}</Price>
          </Rent>

          <Type>
            <MotorIcon />
          </Type>
        </About>
      </Details>

      <CarImage
        source={{
          uri: data.thumbnail,
        }}
      />
    </Container>
  );
};

export default Car;
