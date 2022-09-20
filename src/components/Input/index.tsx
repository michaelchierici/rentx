import React, { useState } from "react";
import { TextInputProps } from "react-native";
import { useTheme } from "styled-components";
import { Feather } from "@expo/vector-icons";

import { Container, IconConainter, InputText } from "./styles";

interface InputProps extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>["name"];
  value?: string;
}

const Input = ({ iconName, value, ...rest }: InputProps) => {
  const [focus, setFocus] = useState(false);
  const [filled, setFilled] = useState(false);
  const theme = useTheme();

  function handleFocus() {
    setFocus(true);
  }

  function handleBlur() {
    setFocus(false);
    setFilled(!!value);
  }

  return (
    <Container>
      <IconConainter>
        <Feather
          name={iconName}
          size={24}
          color={focus || filled ? theme.colors.main : theme.colors.text_detail}
        />
      </IconConainter>
      <InputText
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...rest}
        focused={focus}
      />
    </Container>
  );
};

export default Input;
