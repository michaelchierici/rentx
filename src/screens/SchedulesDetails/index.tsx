import React, { useEffect, useState } from "react";

import {
  useNavigation,
  ParamListBase,
  NavigationProp,
  useRoute,
} from "@react-navigation/native";

import { Feather } from "@expo/vector-icons";

import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components";

import Acessory from "../../components/Acessory";
import BackButton from "../../components/BackButton";
import ImageSlider from "../../components/ImageSlider";

import {
  CarImages,
  Container,
  Header,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  Acessories,
  RentalPeriod,
  CalendarIcon,
  DateInfo,
  DateTitle,
  DateValue,
  Footer,
  RentalPrice,
  RentalPriceLabel,
  RentalPriceDetails,
  RentalPriceQuota,
  RentalPriceTotal,
} from "./styles";
import Button from "../../components/Button";
import { CarDTO } from "../../dtos/CarDTO";
import { getAccessoriesIcons } from "../../utils/getAccessoriesIcons";
import { format } from "date-fns";
import { getPlatformDate } from "../../utils/getPlataformDate";
import { api } from "../../services/api";

interface Params {
  car: CarDTO;
  dates: string[];
}

interface RentalPeriod {
  start: string;
  end: string;
}

const SchedulesDetails = () => {
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>(
    {} as RentalPeriod
  );
  const theme = useTheme();
  const route = useRoute();
  const { car, dates } = route.params as Params;

  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  async function handleConfirmComplete() {
    const schedulesByCar = await api.get(`/schedules/${car.id}`);

    const unavailable_dates = [
      ...schedulesByCar.data.unavailable_dates,
      ...dates,
    ];

    await api
      .put(`/schedules/${car.id}`, {
        id: car.id,
        unavailable_dates,
      })
      .then(() => navigation.navigate("Complete"))
      .catch((err) => {
        console.log(err);
      });
  }

  function handleGoBack() {
    navigation.goBack();
  }

  const renTotal = Number(dates.length * car.rent.price);

  useEffect(() => {
    setRentalPeriod({
      start: format(getPlatformDate(new Date(dates[0])), "dd/MM/yyyy"),
      end: format(
        getPlatformDate(new Date(dates[dates.length - 1])),
        "dd/MM/yyyy"
      ),
    });
  }, []);

  return (
    <Container>
      <Header>
        <BackButton onPress={handleGoBack} />
      </Header>
      <CarImages>
        <ImageSlider imagesUrl={car.photos} />
      </CarImages>
      <Content>
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Description>
          <Rent>
            <Period>{car.rent.period}</Period>
            <Price>R$ {car.rent.price}</Price>
          </Rent>
        </Details>
        <Acessories>
          {car.accessories.map((accessory) => (
            <Acessory
              key={accessory.type}
              name={accessory.name}
              icon={getAccessoriesIcons(accessory.type)}
            />
          ))}
        </Acessories>

        <RentalPeriod>
          <CalendarIcon>
            <Feather
              name="calendar"
              size={RFValue(24)}
              color={theme.colors.shape}
            />
          </CalendarIcon>
          <DateInfo>
            <DateTitle>De</DateTitle>
            <DateValue>{rentalPeriod.start}</DateValue>
          </DateInfo>
          <Feather
            name="chevron-right"
            size={RFValue(10)}
            color={theme.colors.text}
          />
          <DateInfo>
            <DateTitle>Até</DateTitle>
            <DateValue>{rentalPeriod.end}</DateValue>
          </DateInfo>
        </RentalPeriod>

        <RentalPrice>
          <RentalPriceLabel>{renTotal}</RentalPriceLabel>

          <RentalPriceDetails>
            <RentalPriceQuota>
              `R$ ${car.rent.price} x${dates.length} diárias`
            </RentalPriceQuota>
            <RentalPriceTotal>R$ 2.900</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>
      </Content>

      <Footer>
        <Button
          title="Alugar agora"
          color={theme.colors.sucess}
          onPress={handleConfirmComplete}
        />
      </Footer>
    </Container>
  );
};

export default SchedulesDetails;
