import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabDashboardScreen from '../screens/TabDashboardScreen';
import TabProfileScreen from '../screens/TabProfileScreen';
import TabLoginScreen from '../screens/TabLoginScreen';
import TabRegisterScreen from '../screens/TabRegisterScreen';
import TabTamagotchiScreen from '../screens/TabTamagotchiScreen';
import TabWaterScreen from '../screens/TabWaterScreen';
import TabMealScreen from '../screens/TabMealScreen';
import TabAddMealScreen from '../screens/TabAddMealScreen';
import TabMealPlanScreen from '../screens/TabMealPlanScreen';
import TabBarcodeScreen from '../screens/TabScanBarcodeScreen';
import TabExerciseScreen from '../screens/TabExerciseScreen';

import TabNutrientInformationScreen from '../screens/TabNutrientInformationScreen';
import TabNutrientOverviewScreen from '../screens/TabNutrientOverviewScreen';
import TabShopScreen from '../screens/TabShopScreen';
import { BottomTabParamList, TabDashboardParamList, TabProfileParamList, TabLoginParamList, TabRegisterParamList, TabTamagotchiParamList, TabMealParamList, TabAddMealParamList, TabMealPlanParamList, TabBarcodeParamList, TabWaterParamList, TabExerciseParamList, TabNutrientInformationParamList, TabNutrientOverviewParamList, TabShopParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
    const colorScheme = useColorScheme();

    return (
        <BottomTab.Navigator
            initialRouteName="TabDashboard"
            tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
            <BottomTab.Screen
                name="TabDashboard"
                component={TabDashboardNavigator}
                options={{
                    tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
                }}
            />
            <BottomTab.Screen
                name="TabProfile"
                component={TabProfileNavigator}
                options={{
                    tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
                }}
            />
            <BottomTab.Screen
                name="TabLogin"
                component={TabLoginNavigator}
                options={{
                    tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
                }}
            />
            <BottomTab.Screen
                name="TabRegister"
                component={TabRegisterNavigator}
                options={{
                    tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
                }}
            />
            <BottomTab.Screen
                name="TabTamagotchi"
                component={TabTamagotchiNavigator}
                options={{
                    tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
                }}
            />
            <BottomTab.Screen
                name="TabMeal"
                component={TabMealNavigator}
                options={{
                    tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
                }}
            />
            <BottomTab.Screen
                name="TabAddMeal"
                component={TabAddMealNavigator}
                options={{
                    tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
                }}
            />
            <BottomTab.Screen
                name="TabMealPlan"
                component={TabMealPlanNavigator}
                options={{
                    tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
                }}
            />
            <BottomTab.Screen
                name="TabBarcode"
                component={TabBarcodeNavigator}
                options={{
                    tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
                }}
            />
            <BottomTab.Screen
                name="TabWater"
                component={TabWaterNavigator}
                options={{
                    tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
                }}
            />
            <BottomTab.Screen
                name="TabExercise"
                component={TabExerciseNavigator}
                options={{
                    tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
                }}
            />
            <BottomTab.Screen
                name="TabNutrientInformation"
                component={TabNutrientInformationNavigator}
                options={{
                    tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
                }}
            />
            <BottomTab.Screen
                name="TabNutrientOverview"
                component={TabNutrientOverviewNavigator}
                options={{
                    tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
                }}
            />
            <BottomTab.Screen
                name="TabShop"
                component={TabShopNavigator}
                options={{
                    tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
                }}
            />
        </BottomTab.Navigator>
    );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabDashboardStack = createStackNavigator<TabDashboardParamList>();

function TabDashboardNavigator() {
    return (
        <TabDashboardStack.Navigator>
            <TabDashboardStack.Screen
                name="TabDashboardScreen"
                component={TabDashboardScreen}
                options={{ headerTitle: 'Dashboard' }}
            />
        </TabDashboardStack.Navigator>
    );
}

const TabProfileStack = createStackNavigator<TabProfileParamList>();

function TabProfileNavigator() {
    return (
        <TabProfileStack.Navigator>
            <TabProfileStack.Screen
                name="TabProfileScreen"
                component={TabProfileScreen}
                options={{ headerTitle: 'Profile' }}
            />
        </TabProfileStack.Navigator>
    );
}

const TabLoginStack = createStackNavigator<TabLoginParamList>();

function TabLoginNavigator() {
    return (
        <TabLoginStack.Navigator>
            <TabLoginStack.Screen
                name="TabLoginScreen"
                component={TabLoginScreen}
                options={{ headerTitle: 'Login' }}
            />
        </TabLoginStack.Navigator>
    );
}
const TabRegisterStack = createStackNavigator<TabRegisterParamList>();

function TabRegisterNavigator() {
    return (
        <TabRegisterStack.Navigator>
            <TabRegisterStack.Screen
                name="TabRegisterScreen"
                component={TabRegisterScreen}
                options={{ headerTitle: 'Registration' }}
            />
        </TabRegisterStack.Navigator>
    );
}

const TabTamagotchiStack = createStackNavigator<TabTamagotchiParamList>();

function TabTamagotchiNavigator() {
    return (
        <TabTamagotchiStack.Navigator>
            <TabTamagotchiStack.Screen
                name="TabTamagotchiScreen"
                component={TabTamagotchiScreen}
                options={{ headerTitle: 'Tamagotchi' }}
            />
        </TabTamagotchiStack.Navigator>
    );
}

const TabMealStack = createStackNavigator<TabMealParamList>();

function TabMealNavigator() {
    return (
        <TabMealStack.Navigator>
            <TabMealStack.Screen
                name="TabMealScreen"
                component={TabMealScreen}
                options={{ headerTitle: 'Meal' }}
            />
        </TabMealStack.Navigator>
    );
}

const TabAddMealStack = createStackNavigator<TabAddMealParamList>();

function TabAddMealNavigator() {
    return (
        <TabAddMealStack.Navigator>
            <TabAddMealStack.Screen
                name="TabAddMealScreen"
                component={TabAddMealScreen}
                options={{ headerTitle: 'Add New Meal' }}
            />
        </TabAddMealStack.Navigator>
    );
}

const TabMealPlanStack = createStackNavigator<TabMealPlanParamList>();

function TabMealPlanNavigator() {
    return (
        <TabMealPlanStack.Navigator>
            <TabMealPlanStack.Screen
                name="TabMealPlanScreen"
                component={TabMealPlanScreen}
                options={{ headerTitle: 'Meal Plan' }}
            />
        </TabMealPlanStack.Navigator>
    );
}

const TabBarcodeStack = createStackNavigator<TabBarcodeParamList>();

function TabBarcodeNavigator() {
    return (
        <TabBarcodeStack.Navigator>
            <TabBarcodeStack.Screen
                name="TabBarcodeScreen"
                component={TabBarcodeScreen}
                options={{ headerTitle: 'Scan Barcode' }}
            />
        </TabBarcodeStack.Navigator>
    );
}
const TabWaterStack = createStackNavigator<TabWaterParamList>();

function TabWaterNavigator() {
    return (
        <TabWaterStack.Navigator>
            <TabWaterStack.Screen
                name="TabWaterScreen"
                component={TabWaterScreen}
                options={{ headerTitle: 'Water' }}
            />
        </TabWaterStack.Navigator>
    );
}

const TabExerciseStack = createStackNavigator<TabExerciseParamList>();

function TabExerciseNavigator() {
    return (
        <TabExerciseStack.Navigator>
            <TabExerciseStack.Screen
                name="TabExerciseScreen"
                component={TabExerciseScreen}
                options={{ headerTitle: 'Exercises' }}
            />
        </TabExerciseStack.Navigator>
    );
}

const TabNutrientInformationStack = createStackNavigator<TabNutrientInformationParamList>();

function TabNutrientInformationNavigator() {
    return (
        <TabNutrientInformationStack.Navigator>
            <TabNutrientInformationStack.Screen
                name="TabNutrientInformationScreen"
                component={TabNutrientInformationScreen}
                options={{ headerTitle: 'Nutrient Information' }}
            />
        </TabNutrientInformationStack.Navigator>
    );
}

const TabNutrientOverviewStack = createStackNavigator<TabNutrientOverviewParamList>();

function TabNutrientOverviewNavigator() {
    return (
        <TabNutrientOverviewStack.Navigator>
            <TabNutrientOverviewStack.Screen
                name="TabNutrientOverviewScreen"
                component={TabNutrientOverviewScreen}
                options={{ headerTitle: 'Nutrient Overview' }}
            />
        </TabNutrientOverviewStack.Navigator>
    );
}

const TabShopStack = createStackNavigator<TabShopParamList>();

function TabShopNavigator() {
    return (
        <TabShopStack.Navigator>
            <TabShopStack.Screen
                name="TabShopScreen"
                component={TabShopScreen}
                options={{ headerTitle: 'Shop' }}
            />
        </TabShopStack.Navigator>
    );
}