import * as React from 'react';
import { StyleSheet, Image, Button, SafeAreaView, Component, Dimensions, StyleProp,
  ViewStyle, Text, View } from 'react-native';
import styles from "../assets/styles/styles";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { MenuContext, Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu'; // npm install react-native-popup-menu --save (https://www.npmjs.com/package/react-native-popup-menu)

 
export default function TabMeal() {
  const [ data, setData ] = React.useState('Not Found');
  const navigation = useNavigation();
  const win = Dimensions.get('window');
  const ratio = (win.height*0.3)/704; // actual height of image is 704

  return (
    <View style={styles.container}>
        <View style={meal.top}>
            <View style={{backgroundColor: "rgba(255, 255, 255, 0)", flexDirection: "row", margin: 0}}>
                <View style={{ backgroundColor: "rgba(255, 255, 255, 0)", flex: 0.2 }}>
                    <SafeAreaView>
                        <TouchableOpacity onPress={() => { navigation.navigate("Profile") } }>
                            <Image style={{width: 40, height: 40, flex: 1}} source={require('../assets/images/profilePic.png')} />
                        </TouchableOpacity>
                    </SafeAreaView>
                </View>
                <View style={{ backgroundColor: "rgba(255, 255, 255, 0)", flex: 0.6 }}>
                <Text style={meal.title}>
                    Meal
                </Text>
                </View>
                <View style={{ backgroundColor: "rgba(255, 255, 255, 0)", flex: 0.2, alignItems: 'flex-end'}}>
                    <SafeAreaView style={{ flex: 1 }}>
                        <TouchableOpacity onPress={() => { navigation.navigate("Tamagotchi") } }>
                            <Image style={{width: 40, height: 40, flex: 1 }} source={require('../assets/images/tamaPic.png')} />
                        </TouchableOpacity>
                    </SafeAreaView>
                </View>
            </View>
        </View>
        <View style={meal.bottom}>
            <View style={{ backgroundColor: "lightblue", flex: 1, borderTopLeftRadius: 20, borderTopRightRadius: 20, borderBottomLeftRadius: 20, borderBottomRightRadius: 20}}>
                <View style={{backgroundColor: "rgba(255, 255, 255, 0)", flexDirection: "column", flex: 1, justifyContent: 'space-around'}}>
                    <View style={{backgroundColor: "rgba(255, 255, 255, 0)", flex: 1}} />
                        <View style={{backgroundColor: "lightblue", flex: 1, marginBottom: 20}}>
                            <Button title="Scan Barcode" onPress={() => navigation.navigate("Barcode")} />
                            <SafeAreaView style = {{marginTop: 20, justifyContent: "center", alignItems: "center"}}>
                                <TouchableOpacity onPress={() => navigation.navigate("Barcode") }>
                                    <Image style={{width: (1280*0.5)*ratio, height: win.height*0.3, flex: 1 }} source={require('../assets/images/barcode.png')} />
                                </TouchableOpacity>
                            </SafeAreaView>
                        </View>
                        <View style={{backgroundColor: "lightblue", flex: 0.2}}/>
                        <View style={{backgroundColor: "lightblue", flex: 1}}>
                            <Button title="Manually Add Meal" onPress={() => navigation.navigate("AddMeal")} />
                        </View>
                        <View style={{backgroundColor: "lightblue", flex: 1}}>
                            <Button title="Create Meal Plan" onPress={() => navigation.navigate("MealPlan")} />
                        </View>
                    <View style={{ backgroundColor: "rgba(255, 255, 255, 0)", flex: 1 }} />
                </View>
            </View>
        </View>
    </View>
  );
}





const meal = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 36,
    fontWeight: 'bold',
    backgroundColor: "rgba(255, 255, 255, 0)",
    flex: 1
  },
  top: {
    backgroundColor: "rgba(255, 255, 255, 0)",
    margin: 30,
    marginBottom: 0,
    flex: 0.1,
    borderWidth: 2,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  bottom: {
    flex: 0.9, 
    flexDirection: "row", 
    margin: 30, 
    borderWidth: 2, 
    borderTopLeftRadius: 20, 
    borderTopRightRadius: 20, 
    borderBottomLeftRadius: 20, 
    borderBottomRightRadius: 20,
    justifyContent: 'space-evenly', 
    backgroundColor: "rgba(255, 255, 255, 0)"
  },
});