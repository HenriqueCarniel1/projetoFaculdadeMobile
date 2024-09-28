import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../pages/Login';
import Home from '../pages/Home';
import Carrinho from '../pages/Carrinho';
import criarConta from '../pages/CriarConta';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator initialRouteName='home' screenOptions={{ headerShown: false }}>
      <Screen
        name="home"
        component={Home}
      />

      <Screen
        name="criarConta"
        component={criarConta}
      />

      <Screen
        name="login"
        component={Login}
      />

      <Screen
        name="carrinho"
        component={Carrinho}
      />
    </Navigator>
  );
}
