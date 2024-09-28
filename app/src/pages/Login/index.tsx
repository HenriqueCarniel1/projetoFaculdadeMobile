import { Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { Button, ContainerForm, ContainerLogin, Input, View, Title, Label, SubmitButton, LinkText, FooterContainer } from "./style";
import { useState } from "react";

function Login() {

  const [email, setEmail] = useState<string>('');
  const [senha, setSenha] = useState<string>('');

  console.log(email,senha);

  const navigation = useNavigation();

  return (
    <View>
      <Button onPress={() => navigation.navigate('home')}>
        <AntDesign name="arrowleft" size={25} />
      </Button>

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

            <TouchableOpacity onPress={() => {}}>
              <LinkText>Não possui conta? Crie uma</LinkText>
            </TouchableOpacity>
          </FooterContainer>

        </ContainerForm>
      </ContainerLogin>
    </View>
  );
}

export default Login;
