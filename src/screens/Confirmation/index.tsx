import React from "react";
import {
  useNavigation,
  ParamListBase,
  NavigationProp,
  useRoute,
} from "@react-navigation/native";
import { StatusBar, useWindowDimensions } from "react-native";

import LogoSvg from "../../assets/logo_background_gray.svg";
import DoneSvg from "../../assets/done.svg";

import { Container, Content, Title, Message, Footer } from "./styles";
import ConfirmButton from "../../components/ConfirmButton";

interface Params {
  title: string;
  message: string;
  nextScreenRoute: string;
}

const Confirmation = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const { width } = useWindowDimensions();
  const route = useRoute();
  const { title, message, nextScreenRoute } = route.params as Params;

  function handleConfirm() {
    navigation.navigate(nextScreenRoute);
  }

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <LogoSvg width={width} />
      <Content>
        <DoneSvg width={80} height={80} />
        <Title>{title}</Title>
        <Message>{message}</Message>
      </Content>

      <Footer>
        <ConfirmButton title="ok" onPress={handleConfirm} />
      </Footer>
    </Container>
  );
};

export default Confirmation;
