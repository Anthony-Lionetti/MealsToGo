import styled from "styled-components/native";
import { ImageBackground } from "react-native";
import AccountImage from "../../../../assets/home_bg.jpg";
import { colors } from "../../../infrastructure/theme/colors";
import { Button } from "react-native-paper";

export const AccountBackground = styled(ImageBackground).attrs({
  source: AccountImage,
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const AccountContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${(props) => props.theme.space[4]};
  margin-top: ${(props) => props.theme.space[2]};
`;

export const AuthButton = styled(Button).attrs({
  buttonColor: colors.brand.primary,
})`
  padding: ${(props) => props.theme.space[2]};
`;
