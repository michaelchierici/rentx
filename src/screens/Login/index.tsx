import React from "react";
import { StatusBar } from "react-native";
import { Container, Footer, Form, Header, SubTitle, Title } from "./styles";
import { useTheme } from "styled-components";
import Button from "../../components/Button";
import Input from "../../components/Input";
import InputPassword from "../../components/PasswordInput";

const Login: React.FC = () => {
  const theme = useTheme();
  return (
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
        />
        <InputPassword iconName="lock" placeholder="Senha" />
      </Form>
      <Footer>
        <Button title="Login" onPress={() => {}} loading={false} />
        <Button
          title="Criar conta gratuita"
          onPress={() => {}}
          loading={false}
          color={theme.colors.background_secondary}
          light
        />
      </Footer>
    </Container>
  );
};

export default Login;
