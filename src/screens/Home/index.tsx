import React, { useEffect, useState } from "react";
import { useTheme } from "styled-components";
import {
  useNavigation,
  ParamListBase,
  NavigationProp,
} from "@react-navigation/native";
import { StatusBar, BackHandler } from "react-native";
import {
  CarList,
  Container,
  Header,
  HeaderContent,
  MyCarsButton,
  TotalCars,
} from "./styles";
import Logo from "../../assets/logo.svg";
import { RFValue } from "react-native-responsive-fontsize";
import Car from "../../components/Car";
import { api } from "../../services/api";
import { CarDTO } from "../../dtos/CarDTO";
import Load from "../../components/Load";
import { Ionicons } from "@expo/vector-icons";
import LoadAnimation from "../../components/LoadAnimation";
export default function Home() {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);
  const theme = useTheme();

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get("/cars");
        setCars(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchCars();
  }, []);

  function handleCartDetails(car: CarDTO) {
    navigation.navigate("CarDetails", { car });
  }

  function handleOpenMyCars() {
    navigation.navigate("MyCars");
  }

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", () => {
      return true;
    });
  }, []);

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          {!loading && <TotalCars>Total de {cars.length} carros</TotalCars>}
        </HeaderContent>
      </Header>

      {loading ? (
        <LoadAnimation />
      ) : (
        <CarList
          data={cars}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Car data={item} onPress={() => handleCartDetails(item)} />
          )}
        />
      )}
      <MyCarsButton onPress={() => handleOpenMyCars()}>
        <Ionicons name="ios-car-sport" size={38} color={theme.colors.shape} />
      </MyCarsButton>
    </Container>
  );
}
