import React from "react";
import theme from "../../styles/theme";

import { Container, Title } from "./styles";
import { ActivityIndicator } from "react-native";

interface Props {
  title: string;
  color?: string;
  onPress?: () => void;
  enabled?: boolean;
  loading?: boolean;
  light?: boolean;
}

const Button = ({
  title,
  color,
  onPress,
  enabled = false,
  loading = false,
  light = false,
  ...rest
}: Props) => {
  return (
    <Container
      {...rest}
      color={color}
      onPress={onPress}
      enabled={enabled}
      style={{ opacity: enabled === false || loading === true ? 0.5 : 1 }}
      loading={loading}
    >
      {loading ? (
        <ActivityIndicator color={theme.colors.shape} />
      ) : (
        <Title light={light}>{title}</Title>
      )}
    </Container>
  );
};

export default Button;
