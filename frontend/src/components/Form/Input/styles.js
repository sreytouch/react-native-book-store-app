import { TextInput } from "react-native";
import styled from "styled-components/native";
import { COLORS } from "../../../constants";

export const Container = styled.View`
  width: 100%;
  margin-bottom: 25px;
`;

export const ErrorMessage = styled.Text`
  font-size: 12px;
  color: ${COLORS.danger};
`; 

export const CustomTextInput = styled(TextInput).attrs({
  placeholderTextColor: COLORS.gray500
})`
  width: 100%;
  padding: 15px 16px;
  background-color: ${COLORS.secondary};
  color: ${COLORS.light};
  border-radius: 10px;
  font-size: 14px;
`;

