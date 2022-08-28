import React from "react";

import { Container } from "./styles";
import LottieView from "lottie-react-native";
import load_animation from "../../assets/load_animation.json";

const LoadAnimation = () => {
  return (
    <Container>
      <LottieView
        source={load_animation}
        autoPlay
        style={{ height: 200 }}
        resizeMode="contain"
        loop
      />
    </Container>
  );
};

export default LoadAnimation;
