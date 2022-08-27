import React from "react";

import { Container, Title } from "./styles";

interface Props {
  title: string;
  onPress?: () => void;
}

const ConfirmButton = ({ title, onPress }: Props) => {
  return (
    <Container onPress={onPress}>
      <Title>{title}</Title>
    </Container>
  );
};

export default ConfirmButton;
