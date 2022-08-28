import React, { useState, useEffect } from "react";
import { useTheme } from "styled-components";
import {
  useNavigation,
  ParamListBase,
  NavigationProp,
} from "@react-navigation/native";

import {
  Container,
  Header,
  Title,
  SubTitle,
  Content,
  Apointments,
  ApontimentTitle,
  ApontimentQuantity,
} from "./styles";

import { StatusBar, FlatList } from "react-native";
import BackButton from "../../components/BackButton";
import { CarDTO } from "../../dtos/CarDTO";
import { api } from "../../services/api";
import Car from "../../components/Car";

const MyCars = () => {
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  const theme = useTheme();

  function handleGoBack() {
    navigation.goBack();
  }

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get("/schedules_byuser_id-1");
        setCars(response.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
  }, []);

  return (
    <Container>
      <Header>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />
        <BackButton onPress={handleGoBack} color={theme.colors.shape} />
        <Title>
          Escolha uma {"\n"} data de início e {"\n"} fim do aluguel
        </Title>
        <SubTitle>Conforto, segurança e praticidade.</SubTitle>
      </Header>
      <Content>
        <Apointments>
          <ApontimentTitle>Agendamentos feitos</ApontimentTitle>
          <ApontimentQuantity>05</ApontimentQuantity>
        </Apointments>

        <FlatList
          data={cars}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <Car data={item} />}
        />
      </Content>
    </Container>
  );
};

export default MyCars;
