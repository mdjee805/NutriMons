import * as React from 'react';
import { StyleSheet, Image, Button, SafeAreaView, Component, Dimensions, View, Text } from 'react-native';
//import { Text, View } from '../components/Themed';
import { FieldError } from 'react-hook-form';
import styles from "../assets/styles/styles";

import { TouchableOpacity } from 'react-native-gesture-handler';

import { useNavigation } from '@react-navigation/native';

import SelectSearch from 'react-select-search'; // npm install react-select-search --save (https://reactjsexample.com/react-powered-select-box-with-filter/)

import '../assets/styles/style.css';

const options = [
    {name: 'Aerobic'},
    {name: 'Basketball'},
    {name: 'Badminton'},
    {name: 'Baseball'},
    {name: 'Bench Press'},
    {name: 'Boxing'},
    {name: 'Running'},
    {name: 'Walking'},
];

export default function TabExercise() {
  const navigation = useNavigation();
  const win = Dimensions.get('window');
  const ratio = (win.width*0.6)/1280; // actual width of image is 1280

  return (
    <View style={styles.container}>
        <View style={exercise.top}>
            <View style={{backgroundColor: "rgba(255, 255, 255, 0)", flexDirection: "row", margin: 0}}>
                <View style={{ backgroundColor: "rgba(255, 255, 255, 0)", flex: 0.2 }}>
                    <SafeAreaView>
                        <TouchableOpacity onPress={() => { navigation.navigate("Profile") } }>
                            <Image style={{width: 40, height: 40, flex: 1}} source={require('../assets/images/profilePic.png')} />
                        </TouchableOpacity>
                    </SafeAreaView>
                </View>
                <View style={{ backgroundColor: "rgba(255, 255, 255, 0)", flex: 0.6 }}>
                <Text style={exercise.title}>
                    Exercise
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
        <View style={exercise.bottom}>  
            <View style={{backgroundColor: "lightblue", flex: 1, borderTopLeftRadius: 20, borderTopRightRadius: 20, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, justifyContent: 'space-evenly', alignItems: 'center' }}>      
                <View style={{backgroundColor: "lightblue", flex: 1, alignItems: 'center'}}>      
                    <SelectSearch 
                        className="select-search select-search--multiple"
                        options={options} 
                        multiple
                        search
                        name="exercise" 
                        placeholder="Select your workout" 
                    />
                </View>
                <View style={{backgroundColor: "lightblue", flex: 1, marginBottom: win.height*0.05}}/>
                <View style={{backgroundColor: "lightblue", flex: 1, alignItems: 'center'}}>
                    <View style={{backgroundColor: "lightblue", flex: 1}}>
                        <Button title="Create A New Workout Activity" onPress={() => navigation.navigate("MealPlan")} />
                    </View>
                </View>
            </View>
        </View>
    </View>
  );
}

const exercise = StyleSheet.create({
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
    flexDirection: "row", 
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
