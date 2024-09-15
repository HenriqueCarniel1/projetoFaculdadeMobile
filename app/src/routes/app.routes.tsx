import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../pages/Login';
import Home from '../pages/Home';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator initialRouteName='home' screenOptions={{ headerShown: false }}>
      <Screen 
        name="login"
        component={Login}
      />

      <Screen 
        name="home"
        component={Home}
      />
    </Navigator>
  );
}
