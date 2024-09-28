import styled from "styled-components/native";
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

export const Button = styled.TouchableOpacity`
    position: absolute;
    top: 40px;
    left: 20px;
`;

export const View = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const ContainerLogin = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const ContainerForm = styled.View`
    padding: 20px;
    border: 1px solid gray;
    border-radius: 8px;
    width: 300px;
`;

export const Title = styled.Text`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
    text-align: center;
`;

export const Label = styled.Text`
    font-size: 16px;
    margin-bottom: 5px;
`;

export const Input = styled.TextInput`
    border: 1px solid gray;
    padding: 10px;
    margin-bottom: 15px;
    border-radius: 5px;
    width: 100%;
`;

export const SubmitButton = styled.TouchableOpacity`
    background-color: #007BFF;
    width: 100%;
    padding: 15px;
    align-items: center;
    border-radius: 5px;
    margin-top: 20px;
`;

export const FooterContainer = styled.View`
    margin-top: 20px;
    align-items: center;
`;

export const LinkText = styled.Text`
    color: #007BFF;
    margin-top: 10px;
    text-decoration: none;
`;
