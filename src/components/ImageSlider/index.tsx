import React from "react";
import { FlatList } from "react-native";
import {
  Container,
  ImagesIndex,
  ImageIndex,
  CarImageWrapper,
  CarImage,
} from "./styles";

interface Props {
  imagesUrl: string[];
}

const ImageSlider = ({ imagesUrl }: Props) => {
  return (
    <Container>
      <ImagesIndex>
        {imagesUrl.map((_, index) => (
          <ImageIndex key={String(index)} active={true} />
        ))}
      </ImagesIndex>

      <FlatList
        data={imagesUrl}
        keyExtractor={(key) => key}
        renderItem={({ item }) => (
          <CarImageWrapper>
            <CarImage source={{ uri: item }} resizeMode="contain" />
          </CarImageWrapper>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </Container>
  );
};

export default ImageSlider;
