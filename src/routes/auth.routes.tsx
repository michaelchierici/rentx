import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Splash from "../screens/Splash";
import Login from "../screens/Login";
import FirstStep from "../screens/SignUp/FirstStep";
import SecondStep from "../screens/SignUp/SecondStep";
import Confirmation from "../screens/Confirmation";

const { Navigator, Screen } = createNativeStackNavigator();

const AuthRoutes = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Splash"
    >
      <Screen name="Splash" component={Splash} />
      <Screen name="Login" component={Login} />
      <Screen name="FirstStep" component={FirstStep} />
      <Screen name="SecondStep" component={SecondStep} />
      <Screen name="Confirmation" component={Confirmation} />
    </Navigator>
  );
};

export default AuthRoutes;
