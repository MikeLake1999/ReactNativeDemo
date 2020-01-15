import HomeScreen from "./screens/home";
import DrinksScreen from "./screens/drinks";
import OrdersScreen from "./screens/orders";

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Drinks: {
    screen: DrinksScreen,
  },
  Orders: {
    screen: OrdersScreen,
  }
});
export default createAppContainer(AppNavigator);