import { Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

function Login() {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity 
        onPress={() => navigation.navigate('home')}
      >
        <Text style={{ color: '#fff' }}>Clique</Text>
      </TouchableOpacity>
      <Text>Login</Text>
    </View>
  );
}

export default Login;
