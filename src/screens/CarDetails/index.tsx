import React from "react";
import {
  useNavigation,
  ParamListBase,
  NavigationProp,
  useRoute,
} from "@react-navigation/native";
import Acessory from "../../components/Acessory";
import BackButton from "../../components/BackButton";
import ImageSlider from "../../components/ImageSlider";

import {
  CarImages,
  Container,
  Header,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  About,
  Acessories,
  Footer,
} from "./styles";

import Button from "../../components/Button";
import { CarDTO } from "../../dtos/CarDTO";
import { getAccessoriesIcons } from "../../utils/getAccessoriesIcons";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { StatusBar } from "react-native";

interface Params {
  car: CarDTO;
}

const CarDetails = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const route = useRoute();
  const { car } = route.params as Params;

  const scrollY = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
  });

  const headerStyle = useAnimatedStyle(() => {
    return {
      height: interpolate(
        scrollY.value,
        [0, 200],
        [200, 70],
        Extrapolate.CLAMP
      ),
    };
  });

  const sliderCarsStyleAnimation = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollY.value, [0, 150], [1, 0], Extrapolate.CLAMP),
    };
  });

  function handleConfirmRental() {
    navigation.navigate("Schedules", { car });
  }

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <Animated.View style={[headerStyle]}>
        <Header>
          <BackButton onPress={handleGoBack} />
        </Header>
      </Animated.View>

      <Animated.View style={sliderCarsStyleAnimation}>
        <CarImages>
          <ImageSlider imagesUrl={car.photos} />
        </CarImages>
      </Animated.View>

      <Animated.ScrollView
        contentContainerStyle={{
          paddingHorizontal: 24,
          alignItems: "center",
        }}
        onScroll={scrollHandler}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
      >
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Description>
          <Rent>
            <Period>{car.period}</Period>
            <Price>R${car.price}</Price>
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

        <About>{car.about}</About>
        <About>{car.about}</About>
        <About>{car.about}</About>
        <About>{car.about}</About>
      </Animated.ScrollView>

      <Footer>
        <Button
          title="Escolher período do aluguel"
          onPress={handleConfirmRental}
        />
      </Footer>
    </Container>
  );
};

export default CarDetails;

// const styles = StyleSheet.create({
//   header: {
//     position: "absolute",
//     overflow: "hidden",
//     zIndex: 1,
//   },
//   back: {
//     marginTop: 24,
//   },
// });
