import React, { useState } from "react";
import { Text, Alert, TouchableOpacity } from "react-native";
import { View, Container, Title, Label, Button, ButtonText, ErrorText, Input, StyledButton } from "./style";
import { useNavigation } from "@react-navigation/native";

interface FormData {
  nome: string;
  email: string;
  senha: string;
  confirmarSenha: string;
}

const FormCreate: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    email: "",
    senha: "",
    confirmarSenha: "",
  });

  const [errorMessage, setErrorMessage] = useState<string>("");

  const navigation = useNavigation();

  const handleChange = (name: keyof FormData, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    if (formData.senha !== formData.confirmarSenha) {
      Alert.alert("Erro", "As senhas não coincidem");
      return;
    }
    Alert.alert("Sucesso", "Usuário criado com sucesso!");
    setErrorMessage("");
    navigation.navigate('home');
  };

  return (
    <View>
      <Container>
        <Title>Criar Conta</Title>

        <Label>Nome:</Label>
        <Input
          placeholder="Digite seu nome"
          value={formData.nome}
          onChangeText={(value) => handleChange("nome", value)}
        />

        <Label>Email:</Label>
        <Input
          placeholder="Digite seu email"
          value={formData.email}
          onChangeText={(value) => handleChange("email", value)}
          keyboardType="email-address"
        />

        <Label>Senha:</Label>
        <Input
          placeholder="Crie uma senha"
          value={formData.senha}
          onChangeText={(value) => handleChange("senha", value)}
          secureTextEntry
        />

        <Label>Confirmar Senha:</Label>
        <Input
          placeholder="Confirme a senha"
          value={formData.confirmarSenha}
          onChangeText={(value) => handleChange("confirmarSenha", value)}
          secureTextEntry
        />

        {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}

        <StyledButton onPress={handleSubmit}>
          <ButtonText>Criar Conta</ButtonText>
        </StyledButton>

      </Container>
    </View>
  );
};

export default FormCreate;
