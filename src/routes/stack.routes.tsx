import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import CarDetails from "../screens/CarDetails";
import Schedules from "../screens/Schedules";
import ScheduleComplete from "../screens/ScheduleComplete";
import SchedulesDetails from "../screens/SchedulesDetails";
import MyCars from "../screens/MyCars";

const { Navigator, Screen } = createNativeStackNavigator();

const StackRoutes = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="CarDetails" component={CarDetails} />
      <Screen name="Schedules" component={Schedules} />
      <Screen name="Details" component={SchedulesDetails} />
      <Screen name="Complete" component={ScheduleComplete} />
      <Screen name="MyCars" component={MyCars} />
    </Navigator>
  );
};

export default StackRoutes;
