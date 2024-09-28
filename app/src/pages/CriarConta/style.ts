import styled from "styled-components/native";

// Estilos para o contêiner principal
export const View = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9;
`;

export const Container = styled.View`
  padding: 20px;
  border: 1px solid gray;
  border-radius: 8px;
  width: 90%;
  max-width: 400px;
  background-color: #ffffff;
`;

export const Title = styled.Text`
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  color: #333;
`;

export const Label = styled.Text`
  font-size: 16px;
  margin-bottom: 5px;
`;

export const Button = styled.TouchableOpacity`
  background-color: #007bff;
  width: 100%;
  padding: 15px;
  align-items: center;
  border-radius: 5px;
  margin-top: 20px;
`;

export const ButtonText = styled.Text`
  color: #ffffff;
  font-size: 16px;
`;

export const ErrorText = styled.Text`
  color: red;
  text-align: center;
  margin-bottom: 10px;
`;

export const ContainerForm = styled.View`
  padding: 20px;
  border: 1px solid gray;
  border-radius: 8px;
  width: 90%;
  background-color: #fff;
  margin-top: 15px;
`;

export const Input = styled.TextInput`
  border-width: 1px;
  border-color: gray;
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 5px;
  font-size: 16px;
  width: 100%;
`;

export const StyledButton = styled.TouchableOpacity`
  background-color: #007bff;
  width: 100%;
  padding: 15px;
  align-items: center;
  border-radius: 5px;
  margin-top: 20px;
`;