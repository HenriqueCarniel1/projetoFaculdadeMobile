import { Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ContainerForm, ContainerLogin, Input, View, Title, Label, SubmitButton, LinkText, FooterContainer } from "./style";
import { useState } from "react";
import VoltarBotao from "../../components/voltarHome";

function Login() {

  const [email, setEmail] = useState<string>('');
  const [senha, setSenha] = useState<string>('');

  console.log(email,senha);

  const navigation = useNavigation();

  return (
    <View>
      <VoltarBotao rota="home"/>

      <ContainerLogin>
        <ContainerForm>
          <Title>Login</Title>

          <Label>Email:</Label>
          <Input placeholder="Digite seu email"      
          onChangeText={setEmail} 
          />

          <Label>Senha:</Label>
          <Input placeholder="Digite sua senha" secureTextEntry={true} 
          onChangeText={setSenha} 
          />

          <SubmitButton onPress={() => console.log("Login Pressionado")}>
            <Text style={{ color: '#fff', fontSize: 16 }}>Entrar</Text>
          </SubmitButton>

          <FooterContainer>
            <TouchableOpacity onPress={() => {}}>
              <LinkText>Esqueceu a senha?</LinkText>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {navigation.navigate('criarConta')}}>
              <LinkText>Não possui conta? Crie uma</LinkText>
            </TouchableOpacity>
          </FooterContainer>

        </ContainerForm>
      </ContainerLogin>
    </View>
  );
}

export default Login;
