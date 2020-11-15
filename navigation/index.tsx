import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';

import ProfileScreen from '../screens/TabProfileScreen';
import LoginScreen from '../screens/TabLoginScreen';
import RegisterScreen from '../screens/TabRegisterScreen';
import TamagotchiScreen from '../screens/TabTamagotchiScreen';
import WaterScreen from '../screens/TabWaterScreen';
import MealScreen from '../screens/TabMealScreen';
import AddMealScreen from '../screens/TabAddMealScreen';
import MealPlanScreen from '../screens/TabMealPlanScreen';
import BarcodeScreen from '../screens/TabScanBarcodeScreen';
//import NutrientScreen from '../screens/TabNutrientScreen';
import ExerciseScreen from '../screens/TabExerciseScreen';



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
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Tamagotchi" component={TamagotchiScreen} />
      <Stack.Screen name="Water" component={WaterScreen} />
      <Stack.Screen name="Meal" component={MealScreen} />
      <Stack.Screen name="AddMeal" component={AddMealScreen} />
      <Stack.Screen name="MealPlan" component={MealPlanScreen} />
      <Stack.Screen name="Barcode" component={BarcodeScreen} />
      {/*<Stack.Screen name="Nutrient" component={NutrientScreen} />*/}
      <Stack.Screen name="Exercise" component={ExerciseScreen} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}
