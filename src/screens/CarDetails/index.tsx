import React from "react";
import BackButton from "../../components/BackButton";
import ImageSlider from "../../components/ImageSlider";

import { CarImages, Container, Header } from "./styles";

const CarDetails = () => {
  return (
    <Container>
      <Header>
        <BackButton onPress={() => {}} />
      </Header>
      <CarImages>
        <ImageSlider
          imagesUrl={[
            "https://o.remove.bg/downloads/e071665c-d507-40a5-9eb0-d7d489301fa4/audi-png-picture-5a228075ee1b68.9154536215122105499753-removebg-preview.png",
          ]}
        />
      </CarImages>
    </Container>
  );
};

export default CarDetails;
