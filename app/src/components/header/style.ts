import styled from "styled-components/native";

export const Container = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: #0d6efd;
    width: 100%;
    padding: 20px;
`;

export const Button = styled.TouchableOpacity`
    width: 50px;
    height: 50px;
    align-items: center;
    justify-content: center;
`;

export const Img = styled.Image`
    width: 50px;
    height: 50px;
`;

export const Input = styled.TextInput`
    background-color: white;
    width: 200px;
    height: 40px;
    padding: 5px;
    border-radius: 5px;
`;

