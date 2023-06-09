import React from "react";
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
} from "../components/account.styles";
import { Spacer } from "../../../components/spacer/spacer.components";

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />
      <AccountContainer>
        <AuthButton
          icon={"lock-open-outline"}
          mode="contained"
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </AuthButton>
        <Spacer size="large">
          <AuthButton
            icon={"mail"}
            mode="contained"
            onPress={() => navigation.navigate("Register")}
          >
            Register
          </AuthButton>
        </Spacer>
      </AccountContainer>
    </AccountBackground>
  );
};
