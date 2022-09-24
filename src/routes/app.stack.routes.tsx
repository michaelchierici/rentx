import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import CarDetails from "../screens/CarDetails";
import Schedules from "../screens/Schedules";
import Confirmation from "../screens/Confirmation";
import SchedulesDetails from "../screens/SchedulesDetails";
import MyCars from "../screens/MyCars";

const { Navigator, Screen } = createNativeStackNavigator();

const AppStackRoutes = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home"
    >
      <Screen name="Home" component={Home} />
      <Screen name="CarDetails" component={CarDetails} />
      <Screen name="Schedules" component={Schedules} />
      <Screen name="Details" component={SchedulesDetails} />
      <Screen name="Confirmation" component={Confirmation} />
      <Screen name="MyCars" component={MyCars} />
    </Navigator>
  );
};

export default AppStackRoutes;
