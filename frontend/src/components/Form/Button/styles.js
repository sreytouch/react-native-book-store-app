import styled from "styled-components/native";
import { COLORS } from "../../../constants";

export const Container = styled.TouchableOpacity`
  width: 100%;
  align-items: center;
  background-color: ${(disabled) => 
    disabled ? COLORS.gray500 : COLORS.primary
  };
  border-radius: 5px;
  padding: 18px;
  margin-top: 16px;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: ${COLORS.dark};
  font-weight: bold;
`;

export const CustomActivityIndicator = styled.ActivityIndicator.attrs(() => ({
  size: 25,
  color: COLORS.dark,
}))``;