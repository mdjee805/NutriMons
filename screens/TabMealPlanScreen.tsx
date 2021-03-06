import * as React from 'react';
import { StyleSheet, Image, Button, SafeAreaView, Component, Dimensions, View, Text } from 'react-native';
//import { Text, View } from '../components/Themed';
import { FieldError } from 'react-hook-form';
import styles from "../assets/styles/styles";

import { TouchableOpacity } from 'react-native-gesture-handler';

import { useNavigation } from '@react-navigation/native';

import SelectSearch from 'react-select-search'; // npm install react-select-search --save (https://reactjsexample.com/react-powered-select-box-with-filter/)

import cssStyles from '../assets/styles/styles';

const options = [
    {name: 'Apple Pie'},
    {name: 'Banana'},
    {name: 'Chicken Noodle Soup'},
    {name: 'Eggs'},
    {name: 'Greek Yogurt'},
    {name: 'Tomato Sauce Pasta'},
    {name: 'White Rice'},
];

export default function TabMeal() {
  const navigation = useNavigation();
  const win = Dimensions.get('window');
  const ratio = (win.width*0.6)/1280; // actual width of image is 1280

  return (
    <View style={styles.container}>
          {/*<View style={mealPlan.top}>
            <View style={{backgroundColor: "", flexDirection: "row", margin: 0}}>
                <View style={{ backgroundColor: "", flex: 0.15, alignItems: 'flex-start', justifyContent: 'center' }}>
                    <TouchableOpacity onPress={() => { navigation.navigate("TabProfile") } }>
                        <Image style={{width: 40, height: 40, flex: 1}} source={require('../assets/images/profilePic.png')} />
                    </TouchableOpacity>
                </View>
                <View style={{ backgroundColor: "", flex: 0.7 }}>
                <Text style={[mealPlan.title, { textAlign: 'center', flex: 1 }]}>
                    Meal Plan
                </Text>
                </View>
                <View style={{ backgroundColor: "", flex: 0.15, alignItems: 'flex-end', justifyContent:'center' }}>
                    <TouchableOpacity onPress={() => { navigation.navigate("TabTamagotchi") } }>
                        <Image style={{ width: 40, height: 40, flex: 1 }} source={require('../assets/images/tamaPic.png')} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        <View style={mealPlan.bottom}>   
            <View style={{backgroundColor: "lightblue", flex: 0.2, alignItems: 'center'}}>
                <SelectSearch 
                    className="select-search select-search--multiple"
                    options={options} 
                    multiple
                    search
                    name="meal" 
                    placeholder="Select your breakfast" 
                />
            </View>
            <View style={{backgroundColor: "lightblue", flex: 0.2, alignItems: 'center'}}>
                <SelectSearch 
                    className="select-search select-search--multiple"
                    options={options} 
                    multiple
                    search
                    name="meal" 
                    placeholder="Select your lunch" 
                />
            </View>
            <View style={{backgroundColor: "lightblue", flex: 0.2, alignItems: 'center'}}>
                <SelectSearch 
                    className="select-search select-search--multiple"
                    options={options} 
                    multiple
                    search
                    name="meal" 
                    placeholder="Select your dinner" 
                />
            </View>
            <View style={{backgroundColor: "lightblue", flex: 0.2, alignItems: 'center'}}>      
                <SelectSearch 
                    className="select-search select-search--multiple"
                    options={options} 
                    multiple
                    search
                    name="meal" 
                    placeholder="Select your snacks" 
                />
            </View>
        </View>*/}
    </View>
  );
}

const mealPlan = StyleSheet.create({
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
    margin: 30, 
    borderWidth: 2, 
    borderTopLeftRadius: 20, 
    borderTopRightRadius: 20, 
    borderBottomLeftRadius: 20, 
    borderBottomRightRadius: 20,
    justifyContent: 'space-evenly', 
    alignItems: 'center',
    backgroundColor: "lightblue"
  },
});
