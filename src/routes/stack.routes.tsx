import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import CarDetails from "../screens/CarDetails";
import Schedules from "../screens/Schedules";
import Confirmation from "../screens/Confirmation";
import SchedulesDetails from "../screens/SchedulesDetails";
import MyCars from "../screens/MyCars";
import Splash from "../screens/Splash";
import Login from "../screens/Login";
import FirstStep from "../screens/SignUp/FirstStep";
import SecondStep from "../screens/SignUp/SecondStep";

const { Navigator, Screen } = createNativeStackNavigator();

const StackRoutes = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Login"
    >
      <Screen name="Login" component={Login} />

      <Screen
        name="Home"
        component={Home}
        options={{ gestureEnabled: false }}
      />
      <Screen name="FirstStep" component={FirstStep} />
      <Screen name="SecondStep" component={SecondStep} />
      <Screen name="CarDetails" component={CarDetails} />
      <Screen name="Schedules" component={Schedules} />
      <Screen name="Details" component={SchedulesDetails} />
      <Screen name="Confirmation" component={Confirmation} />
      <Screen name="MyCars" component={MyCars} />
    </Navigator>
  );
};

export default StackRoutes;
