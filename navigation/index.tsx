import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';

/*import ProfileScreen from '../screens/ProfileScreen';
import TamagotchiScreen from '../screens/TamagotchiScreen';
import WaterScreen from '../screens/WaterScreen';
import NutrientScreen from '../screens/NutrientScreen';
import ExerciseScreen from '../screens/ExerciseScreen';*/

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Root" component={BottomTabNavigator} />
      {/*<Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Tamagotchi" component={TamagotchiScreen} />
      <Stack.Screen name="Water" component={WaterScreen} />
      <Stack.Screen name="Nutrient" component={NutrientScreen} />
      <Stack.Screen name="Exercise" component={ExerciseScreen} />*/}
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}
