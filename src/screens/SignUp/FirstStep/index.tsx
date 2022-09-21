import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import React from "react";
import BackButton from "../../../components/BackButton";
import Bullet from "../../../components/Bullet";
import Input from "../../../components/Input";

import {
  Container,
  Form,
  FormTitle,
  Header,
  Steps,
  SubTitle,
  Title,
} from "./styles";

const FirstStep = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
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
        <FormTitle>1. Dados</FormTitle>
        <Input iconName="user" placeholder="Nome" />
        <Input iconName="mail" placeholder="Email" />
        <Input iconName="credit-card" placeholder="CNH" />
      </Form>
    </Container>
  );
};

export default FirstStep;
