import React from "react";
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

interface CarData {
  brand?: string;
  name?: string;
  rent: {
    period?: string;
    price?: number;
  };
  thumbnail?: string;
}

interface Props {
  data: CarData;
}

const Car = ({ data }: Props) => {
  return (
    <Container>
      <Details>
        <Brand>{data.brand}</Brand>
        <Name>{data.name}</Name>

        <About>
          <Rent>
            <Period>{data.rent.period}</Period>
            <Price>{`R$ ${data.rent.price}`}</Price>
          </Rent>

          <Type>
            <Gasoline />
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
