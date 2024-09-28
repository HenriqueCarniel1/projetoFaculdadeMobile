import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import { View, Container, Title, Label, ErrorText, Input, StyledButton, ButtonText } from "./style";
import { useNavigation } from "@react-navigation/native";
import VoltarBotao from "../../components/voltarHome";

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

  const handleChange = (name: keyof FormData, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    if (formData.senha !== formData.confirmarSenha) {
      Alert.alert("Erro", "As senhas não coincidem");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/send/register/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          RegisterName: formData.nome,
          RegisterEmail: formData.email,
          RegisterPassword: formData.senha,
        }),
      });

      const data = await response.json();
      console.log(data);

    } catch (error) {
      console.error(error);
    }

    useEffect(() => {
        handleSubmit();
    })
  };

  return (
    <View>
    <VoltarBotao rota="home"/>

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
