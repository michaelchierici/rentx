import React from "react";
import StackRoutes from "./app.stack.routes";
import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "../hooks/auth";
import AppStackRoutes from "./app.stack.routes";
import AuthRoutes from "./auth.routes";
import AppTabRoutes from "./app.tab.routes";

const Routes = () => {
  const { user } = useAuth();
  return (
    <NavigationContainer>
      {user.id ? <AppTabRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
};

export default Routes;
