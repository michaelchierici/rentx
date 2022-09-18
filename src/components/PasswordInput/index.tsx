import React from "react";
import { TextInputProps } from "react-native";
import { useTheme } from "styled-components";
import { Feather } from "@expo/vector-icons";

import { Container, IconConainter, InputText } from "./styles";

interface InputProps extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>["name"];
}

const InputPassword = ({ iconName, ...rest }: InputProps) => {
  const theme = useTheme();

  return (
    <Container>
      <IconConainter>
        <Feather name={iconName} size={24} color={theme.colors.text_detail} />
      </IconConainter>
      <InputText {...rest} />
    </Container>
  );
};

export default InputPassword;
