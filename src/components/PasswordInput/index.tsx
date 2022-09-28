import React, { useState } from "react";
import { TextInputProps } from "react-native";
import { useTheme } from "styled-components";
import { Feather } from "@expo/vector-icons";

import {
  Container,
  IconConainter,
  InputText,
  VisibilityButton,
} from "./styles";

interface InputProps extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>["name"];
  value?: string;
}

const InputPassword = ({ iconName, value, ...rest }: InputProps) => {
  const [isVisible, setIsVisible] = useState(true);
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

  function handleVisibleChange() {
    setIsVisible((prevState) => !prevState);
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
        focused={focus}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...rest}
        secureTextEntry={isVisible}
        autoCorrect={false}
      />

      <VisibilityButton onPress={handleVisibleChange}>
        <IconConainter>
          <Feather
            name={isVisible ? "eye" : "eye-off"}
            size={24}
            color={theme.colors.text_detail}
          />
        </IconConainter>
      </VisibilityButton>
    </Container>
  );
};

export default InputPassword;
