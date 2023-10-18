import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {HomeScreen} from '../screens/HomeScreen';
import {FavouriteScreen} from '../screens/FavouriteScreen';
import {DetailsScreen} from '../screens/DetailsScreen';
import {CustomTabBar} from '../components/ui/CustomTabBar';
import {Data} from '../screens/HomeScreen/HomeScreen.props';

const Stack = createStackNavigator<AppStackParamList>();
const Tab = createBottomTabNavigator<RootStackParamList>();

export type RootStackParamList = {
  Home: undefined;
  Favourite: undefined;
};
export type AppStackParamList = {
  HomeStack: undefined;
  Details: {data: Data};
};

const AppNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeStack"
        component={MainScreens}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

const MainScreens = () => {
  return (
    <Tab.Navigator tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: 'Favourite',
        }}
        name="Favourite"
        component={FavouriteScreen}
      />
    </Tab.Navigator>
  );
};
export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  );
};
