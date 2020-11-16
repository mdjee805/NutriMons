import * as React from 'react';
import { StyleSheet, Image, Button, SafeAreaView, Component, Dimensions, View, Text, TextInput } from 'react-native';
//import { Text, View } from '../components/Themed';
import { FieldError } from 'react-hook-form';
import styles from "../assets/styles/styles";

import { TouchableOpacity } from 'react-native-gesture-handler';

import { useNavigation } from '@react-navigation/native';

import SelectSearch from 'react-select-search'; // npm install react-select-search --save (https://reactjsexample.com/react-powered-select-box-with-filter/)

import cssStyles from '../assets/styles/styles';

const options = [
    {name: 'Aerobic', value: 'Aerobic'},
    {name: 'Basketball', value: 'Basketball'},
    {name: 'Badminton', value: 'Badminton'},
    {name: 'Baseball', value: 'Baseball'},
    {name: 'Bench Press', value: 'Bench Press'},
    {name: 'Bicycling', value: 'Bicycling'},
    {name: 'Boxing', value: 'Boxing'},
    {name: 'Soccer', value: 'Soccer' },
    {name: 'Running', value: 'Running'},
    {name: 'Volleyball', value: 'Volleyball'},
    {name: 'Walking', value: 'Walking'},
];

const Exercise = () => {
  // const for textInput fields
  const [nameOfExerciseValue, nameOfExerciseOnChangeText] = React.useState('Name of exercise...');
  const [caloriesPerUnitValue, caloriesPerUnitOnChangeText] = React.useState('Calories Per Unit');
  const [unitNameValue, unitNameOnChangeText] = React.useState('e.g. "set", "rep"');
  
  const win = Dimensions.get('window');
  const navigation = useNavigation();
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
                <Text style={styles.title}> Exercise </Text>
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
            <View style={{backgroundColor: "lightblue", flex: 0.4}}>  
                <View style={{flex: 0.08, backgroundColor: "#ffa514", justifyContent: 'space-around', padding: 5}}>
                    <Text style={{fontSize: 15, fontWeight: 'bold', color: 'black', textAlign: 'center'}}>Select An Existing Workout</Text>
                </View>
                <View style={{flex: 0.1}}/>
                <View style={{ flex: 0.97, alignItems: 'center'}}>
                    <SelectSearch 
                        className="select-search select-search--multiple"
                        options={options} 
                        multiple
                        search
                        name="exercise" 
                        placeholder="Select your workout" 
                    />
                </View>
            </View>
            <View style={{flex: 0.1}}/>
            <View style={{backgroundColor: "lightblue", flex: 0.4, justifyContent: 'space-evenly', alignItems: 'flex-start'}}>
                <View style={{flex: 0.25, backgroundColor: "#ffa514", justifyContent: 'space-around', padding: 5}}>
                    <Text style={{fontSize: 15, fontWeight: 'bold', color: 'black', textAlign: 'center'}}>Create A New Workout Activity</Text>
                </View>
                <View style={{flex: 0.2}}/>
                <View style={{flex: 0.8}}>
                    <Text style={{fontSize: 15, fontWeight: 'bold'}}>Name of Exercise:                              </Text>
                    <TextInput
                        style={{ height: 40, paddingLeft: 10, borderColor: 'gray', backgroundColor: '#ffffff', borderWidth: 1 }}
                        onChangeText={text => nameOfExerciseOnChangeText(text)}
                        value={nameOfExerciseValue}
                    />
                </View>
                <View style={{flex: 0.8, width: win.width*0.2}}>
                    <Text style={{fontSize: 15, fontWeight: 'bold'}}>Calories/Unit:             </Text>
                    <TextInput
                        style={{ height: 40, paddingLeft: 10, borderColor: 'gray', backgroundColor: '#ffffff', borderWidth: 1 }}
                        onChangeText={text => caloriesPerUnitOnChangeText(text)}
                        value={caloriesPerUnitValue}
                    />
                </View>
                <View style={{flex: 0.8, width: win.width*0.2}}>
                    <Text style={{fontSize: 15, fontWeight: 'bold'}}>Unit Name:       </Text>
                    <TextInput
                        style={{ height: 40, paddingLeft: 10, borderColor: 'gray', backgroundColor: '#ffffff', borderWidth: 1 }}
                        onChangeText={text => unitNameOnChangeText(text)}
                        value={unitNameValue}
                    />
                </View>
                <View style={{flex: 0.5}}>
                    <TouchableOpacity
                        style = {textInputStyles.submitButton}
                        onPress = {
                            () => this.login(this.state.email, this.state.password)
                        }>
                        <Text style = {textInputStyles.submitButtonText}> Submit </Text>
                    </TouchableOpacity>
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
    padding: 30,
    //flexDirection: "row", 
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

const textInputStyles = StyleSheet.create({
   container: {
      paddingTop: 23
   },
   input: {
      margin: 15,
      paddingLeft: 10,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1
   },
   submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      marginTop: 15,
      height: 40,
   },
   submitButtonText:{
      fontWeight: 'bold',
      fontSize: 15, 
      color: 'white',
      textAlign: 'center'
   }
});

export default Exercise;


{
    /*
            <View style={exercise.bottom}>      
            <View style={{backgroundColor: "lightblue", flex: 0.3, flexDirection: "column", justifyContent: 'space-evenly', alignItems: 'flex-start', height: win.height*0.6}}>  
                <View style={{flex: 0.05, backgroundColor: "#2196F3", justifyContent: 'space-around', padding: 5}}>
                    <Text style={{fontSize: 15, fontWeight: 'bold', color: 'white', textAlign: 'center'}}>Select an existing workout</Text>
                </View>
                <View style={{ flex: 1, alignItems: 'center', marginTop: win.height*0.05}}>
                    <SelectSearch 
                        className="select-search select-search--multiple"
                        options={options} 
                        styles={{height: win.height*0.3}}
                        multiple
                        search
                        name="exercise" 
                        placeholder="Select your workout" 
                    />
                </View>
            </View>
            <View style={{backgroundColor: "lightblue", flex: 0.6, flexDirection: "column", justifyContent: 'space-evenly', alignItems: 'flex-start', height: win.height*0.6, marginLeft: 20}}>
                <View style={{flex: 0.25, backgroundColor: "#2196F3", justifyContent: 'space-around', padding: 5}}>
                    <Text style={{fontSize: 15, fontWeight: 'bold', color: 'white', textAlign: 'center'}}>Create A New Workout Activity</Text>
                </View>
                <View style={{flex: 1, width: win.width*0.5, marginTop: win.height*0.05}}>
                    <Text style={{fontSize: 15, fontWeight: 'bold'}}>Name of Exercise:                              </Text>
                    <TextInput
                        style={{ height: 40, paddingLeft: 10, borderColor: 'gray', backgroundColor: '#ffffff', borderWidth: 1 }}
                        onChangeText={text => nameOfExerciseOnChangeText(text)}
                        value={nameOfExerciseValue}
                    />
                </View>
                <View style={{flex: 1, width: win.width*0.2, marginTop: win.height*0.05}}>
                    <Text style={{fontSize: 15, fontWeight: 'bold'}}>Calories/Unit:             </Text>
                    <TextInput
                        style={{ height: 40, paddingLeft: 10, borderColor: 'gray', backgroundColor: '#ffffff', borderWidth: 1 }}
                        onChangeText={text => caloriesPerUnitOnChangeText(text)}
                        value={caloriesPerUnitValue}
                    />
                </View>
                <View style={{flex: 1, width: win.width*0.2, marginTop: win.height*0.05}}>
                    <Text style={{fontSize: 15, fontWeight: 'bold'}}>Unit Name:       </Text>
                    <TextInput
                        style={{ height: 40, paddingLeft: 10, borderColor: 'gray', backgroundColor: '#ffffff', borderWidth: 1 }}
                        onChangeText={text => unitNameOnChangeText(text)}
                        value={unitNameValue}
                    />
                </View>
                <View style={{flex: 0.5, marginTop: win.height*0.05}}>
                    <TouchableOpacity
                        style = {textInputStyles.submitButton}
                        onPress = {
                            () => this.login(this.state.email, this.state.password)
                        }>
                        <Text style = {textInputStyles.submitButtonText}> Submit </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    */
}