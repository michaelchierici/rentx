import React, { useState } from "react";

import {
  NavigationProp,
  ParamListBase,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { useTheme } from "styled-components";
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import BackButton from "../../../components/BackButton";
import Bullet from "../../../components/Bullet";
import Button from "../../../components/Button";

import {
  Container,
  Form,
  FormTitle,
  Header,
  Steps,
  SubTitle,
  Title,
} from "./styles";

import InputPassword from "../../../components/PasswordInput";

interface Params {
  user: {
    name: string;
    email: string;
    driverLicense: string;
  };
}

const SecondStep = () => {
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const theme = useTheme();
  const route = useRoute();

  const { user } = route.params as Params;

  function handleGoBack() {
    navigation.goBack();
  }

  function register() {
    if (!password || !passwordConfirm) {
      return Alert.alert("Informe sua senha e a confirmação");
    }

    if (password !== passwordConfirm) {
      return Alert.alert("Senhas não são iguais");
    }
    navigation.navigate("Confirmation", {
      nextScreenRoute: "Login",
      title: "Conta Criada",
      message: "Agora é só fazer login\ne aproveitar!",
    });
  }

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Header>
            <BackButton onPress={handleGoBack} />
            <Steps>
              <Bullet active />
              <Bullet />
            </Steps>
          </Header>

          <Title>Crie sua {"\n"} conta</Title>
          <SubTitle>Faça seu cadastro de{"\n"}forma rápida e fácil</SubTitle>

          <Form>
            <FormTitle>2. Senha</FormTitle>

            <InputPassword
              iconName="lock"
              placeholder="Senha"
              onChangeText={setPassword}
              value={password}
            />
            <InputPassword
              iconName="lock"
              placeholder="Repetir senha"
              onChangeText={setPasswordConfirm}
              value={passwordConfirm}
            />
          </Form>

          <Button
            title="Cadastrar"
            enabled
            color={theme.colors.sucess}
            onPress={register}
          />
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default SecondStep;
