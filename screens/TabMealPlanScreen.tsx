import * as React from 'react';
import { StyleSheet, Image, Button, SafeAreaView, Component, Dimensions, View, Text } from 'react-native';
//import { Text, View } from '../components/Themed';
import { FieldError } from 'react-hook-form';
import styles from "../assets/styles/styles";

import { TouchableOpacity } from 'react-native-gesture-handler';

import { useNavigation } from '@react-navigation/native';

import  SearchableDropdown from 'react-native-searchable-dropdown';; // npm install --save react-native-searchable-dropdown (https://reactnativeexample.com/searchable-dropdown-help-you-to-search-with-in-the-dropdown/)

export default function TabMeal() {
  const [ data, setData ] = React.useState('Not Found');
  const navigation = useNavigation();
  const win = Dimensions.get('window');
  const ratio = (win.width*0.6)/1280; // actual width of image is 1280

  var  items  = [
	{
		id: 1,
		name: 'Apple pie'
	},
	{
		id: 2,
		name: 'Bread'
	},
	{
		id: 3,
		name: 'Deep-Fried Chicken'
	},
	{
		id: 4,
		name: 'Mongolian Beef'
	},
	{
		id: 5,
		name: 'Pizza'
	},
	{
		id: 6,
		name: 'Cheddar soup'
	},
	{
		id: 7,
		name: 'Tomato Sauce Pasta'
	},
	{
		id: 8,
		name: 'White Rice'
	},
];

  return (
    <View style={styles.container}>
        <View style={mealPlan.top}>
            <View style={{backgroundColor: "rgba(255, 255, 255, 0)", flexDirection: "row", margin: 0}}>
                <View style={{ backgroundColor: "rgba(255, 255, 255, 0)", flex: 0.2 }}>
                    <SafeAreaView>
                        <TouchableOpacity onPress={() => { navigation.navigate("Profile") } }>
                            <Image style={{width: 40, height: 40, flex: 1}} source={require('../assets/images/profilePic.png')} />
                        </TouchableOpacity>
                    </SafeAreaView>
                </View>
                <View style={{ backgroundColor: "rgba(255, 255, 255, 0)", flex: 0.6 }}>
                <Text style={mealPlan.title}>
                    Meal Plan
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
        <View style={mealPlan.bottom}>
            <View style={{ backgroundColor: "lightblue", flex: 1, borderTopLeftRadius: 20, borderTopRightRadius: 20, borderBottomLeftRadius: 20, borderBottomRightRadius: 20}}>
                <View style={{backgroundColor: "rgba(255, 255, 255, 0)", flexDirection: "column", flex: 1, justifyContent: 'space-around'}}>
                    <View style={{backgroundColor: "rgba(255, 255, 255, 0)", flex: 1}} />
                        <View style={{backgroundColor: "lightblue", flex: 1}}>
                            <SearchableDropDown
			                    onTextChange={(text) =>  alert(text)}
			                    onItemSelect={(item) =>  alert(JSON.stringify(item))}
			                    containerStyle={{
				                    padding: 5
			                    }}
			                    textInputStyle={{
				                    padding: 12,
				                    borderWidth: 1,
				                    borderColor: '#ccc',
				                    borderRadius: 5
			                    }}
			                    itemStyle={{
				                    padding: 10,
			                        marginTop: 2,
				                    backgroundColor: '#ddd',
				                    borderColor: '#bbb',
				                    borderWidth: 1,
				                    borderRadius:5
			                    }}
			                    itemTextStyle={{
			                    color: '#222'
			                    }}
			                    itemsContainerStyle={{
				                    maxHeight: 140
			                    }}
			                    items={items}
			                    placeholder="Placeholder."
			                    resetValue={false}
			                    underlineColorAndroid='transparent' />
                        </View>
                        <View style={{backgroundColor: "lightblue", flex: 1}}>
                            
                        </View>
                        <View style={{backgroundColor: "lightblue", flex: 1}}>
                           
                        </View>
                    <View style={{ backgroundColor: "rgba(255, 255, 255, 0)", flex: 1 }} />
                </View>
            </View>
        </View>
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