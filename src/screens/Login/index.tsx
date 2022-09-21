import React, { useState } from "react";
import * as Yup from "yup";
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  StatusBar,
  TouchableWithoutFeedback,
} from "react-native";
import { Container, Footer, Form, Header, SubTitle, Title } from "./styles";
import { useTheme } from "styled-components";
import Button from "../../components/Button";
import Input from "../../components/Input";
import InputPassword from "../../components/PasswordInput";
import {
  useNavigation,
  ParamListBase,
  NavigationProp,
} from "@react-navigation/native";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const theme = useTheme();
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  async function login() {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .required("E-mail obrigatório")
          .email("Digite um e-mail válido"),
        password: Yup.string().required("Senha é obrigatória"),
      });

      await schema.validate({ email, password });
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        return Alert.alert("erro");
      }
    }
  }

  function newAccount() {
    navigation.navigate("FirstStep");
  }

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <StatusBar
            barStyle="dark-content"
            translucent
            backgroundColor="transparent"
          />
          <Header>
            <Title>Estamos {"\n"}quase lá</Title>
            <SubTitle>
              Faça seu login para começar {"\n"}um experiência incrível
            </SubTitle>
          </Header>
          <Form>
            <Input
              iconName="mail"
              placeholder="E-mail"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={setEmail}
              value={email}
            />
            <InputPassword
              iconName="lock"
              placeholder="Senha"
              onChangeText={setPassword}
              value={password}
            />
          </Form>
          <Footer>
            <Button
              title="Login"
              onPress={() => {
                login();
              }}
              enabled={true}
            />
            <Button
              title="Criar conta gratuita"
              onPress={() => {
                newAccount();
              }}
              loading={false}
              enabled={true}
              color={theme.colors.background_secondary}
              light
            />
          </Footer>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Login;
