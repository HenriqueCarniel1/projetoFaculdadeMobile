import React from 'react';
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { Button } from "./style";

type RootStackParamList = {
  home: undefined;
  login: undefined;
  carrinho: undefined;
  criarConta: undefined;
};

interface VoltarBotaoProps {
  rota: keyof RootStackParamList;
}

const VoltarBotao: React.FC<VoltarBotaoProps> = ({ rota }) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <Button onPress={() => navigation.navigate(rota)}>
      <AntDesign name="arrowleft" size={25} />
    </Button>
  );
};

export default VoltarBotao;
