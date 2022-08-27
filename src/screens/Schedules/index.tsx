import React from "react";
import { useTheme } from "styled-components";
import {
  useNavigation,
  ParamListBase,
  NavigationProp,
} from "@react-navigation/native";

import BackButton from "../../components/BackButton";

import ArrowSvg from "../../assets/arrow.svg";

import {
  Container,
  Header,
  Title,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
  Content,
  Footer,
} from "./styles";
import { StatusBar } from "react-native";
import Button from "../../components/Button";
import Calendars from "../../components/Calendars";

const Schedules = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  function handleConfirmDetails() {
    navigation.navigate("Details");
  }
  const theme = useTheme();
  return (
    <Container>
      <Header>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />
        <BackButton onPress={() => {}} color={theme.colors.shape} />
        <Title>
          Escolha uma {"\n"} data de início e {"\n"} fim do aluguel
        </Title>
        <RentalPeriod>
          <DateInfo>
            <DateTitle>De</DateTitle>
            <DateValue />
          </DateInfo>
          <ArrowSvg />
          <DateInfo>
            <DateTitle>Até</DateTitle>
            <DateValue />
          </DateInfo>
        </RentalPeriod>
      </Header>
      <Content>
        <Calendars />
      </Content>
      <Footer>
        <Button title="confirmar" onPress={handleConfirmDetails} />
      </Footer>
    </Container>
  );
};

export default Schedules;
