import React, { useContext } from "react";

import AppNavigator from "./app.navigator";
import { NavigationContainer } from "@react-navigation/native";
import { AccountNavigator } from "./account.navigator";
import { AuthenticationContext } from "../../services/auth/authentication.context";

export default function Navigation() {
  const { isAuthenticated } = useContext(AuthenticationContext);
  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
}
