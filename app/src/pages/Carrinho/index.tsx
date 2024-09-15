import { Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { Button } from "./style";

function Login() {
  const navigation = useNavigation();

  return (
    <View>
      <Button 
        onPress={() => navigation.navigate('home')}
      >
        <AntDesign name="arrowleft" size={25}/>
      </Button>
      <Text>Carrinho</Text>
    </View>
  );
}

export default Login;
