import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import TabBryanScreen from '../screens/TabBryanScreen';
import TabAlissaScreen from '../screens/TabAlissaScreen';
import TabMichaelScreen from '../screens/TabMichaelScreen';
import TabMinhScreen from '../screens/TabMinhScreen';
import { BottomTabParamList, TabOneParamList, TabTwoParamList, TabAlissaParamList, TabBryanParamList, TabMichaelParamList, TabMinhParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="TabOne"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabBryan"
        component={TabBryanNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabAlissa"
        component={TabAlissaNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabMichael"
        component={TabMichaelNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabMinh"
        component={TabMinhNavigator}
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
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{ headerTitle: 'Tab One Title' }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </TabTwoStack.Navigator>
  );
}

const TabBryanStack = createStackNavigator<TabBryanParamList>();

function TabBryanNavigator() {
  return (
    <TabBryanStack.Navigator>
      <TabBryanStack.Screen
        name="TabBryanScreen"
        component={TabBryanScreen}
        options={{ headerTitle: 'Tab Bryan Title' }}
      />
    </TabBryanStack.Navigator>
  );
}

const TabAlissaStack = createStackNavigator<TabAlissaParamList>();

function TabAlissaNavigator() {
  return (
    <TabAlissaStack.Navigator>
      <TabAlissaStack.Screen
        name="TabAlissaScreen"
        component={TabAlissaScreen}
        options={{ headerTitle: 'Tab Alissa Title' }}
      />
    </TabAlissaStack.Navigator>
  );
}

const TabMichaelStack = createStackNavigator<TabMichaelParamList>();

function TabMichaelNavigator() {
  return (
    <TabMichaelStack.Navigator>
      <TabMichaelStack.Screen
        name="TabMichaelScreen"
        component={TabMichaelScreen}
        options={{ headerTitle: 'Tab Michael Title' }}
      />
    </TabMichaelStack.Navigator>
  );
}

const TabMinhStack = createStackNavigator<TabMinhParamList>();

function TabMinhNavigator() {
  return (
    <TabMinhStack.Navigator>
      <TabMinhStack.Screen
        name="TabMinhScreen"
        component={TabMinhScreen}
        options={{ headerTitle: 'Tab Minh Title' }}
      />
    </TabMinhStack.Navigator>
  );
}