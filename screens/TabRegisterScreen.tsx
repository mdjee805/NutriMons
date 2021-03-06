import React, { useState } from 'react';
import { StyleSheet, Image, Button, SafeAreaView, Component, Dimensions, View, Text, TextInput, CheckBox } from 'react-native';
//import { Text, View } from '../components/Themed';
import { FieldError } from 'react-hook-form';
import styles from "../assets/styles/styles";

import { TouchableOpacity } from 'react-native-gesture-handler';

import { useNavigation } from '@react-navigation/native';

// will use this import later once I figure out how to reformat the input fields and create a heading for them
// import DocForm from "react-cross-form";; // npm i react-cross-form --save (https://reactnativeexample.com/easy-form-for-react-and-react-native-apps-with-validation/)

const Register = () => {
  //const [usernameValue, usernameOnChangeText] = React.useState('Enter a valid email address');
  //const [passwordValue, passwordOnChangeText] = React.useState('*******');
  const [ data, setData ] = React.useState('Not Found');
  const navigation = useNavigation();
  const win = Dimensions.get('window');
  const [isSelected, setSelection] = useState(false);

  return (
            <View style={styles.container}>
                <View style={register.register}>
                    <View style={{flex: 0.4, backgroundColor: "#ffa514", padding: 5, width: win.width*0.8}}>
                        <Text style={{fontSize: 15, fontWeight: 'bold', color: 'black', textAlign: 'center'}}>Registration</Text>
                    </View>
                    <View style={{flex: 0.5, width: win.width*0.8}}>
                        <Text style={{fontSize: 15, fontWeight: 'bold'}}>Username:                              </Text>
                    </View>
                    <View style={{flex: 0.5, width: win.width*0.8, marginBottom: 10}}>
                        <TextInput style={textInputStyles.registrationBox} placeholder="Enter a valid email address" underlineColorAndroid="transparent"></TextInput>
                    </View>
                    <View style={{flex: 0.5, width: win.width*0.8}}>
                        <Text style={{fontSize: 15, fontWeight: 'bold'}}>Re-enter Username:                              </Text>
                    </View>
                    <View style={{flex: 0.5, width: win.width*0.8, marginBottom: 10}}>
                        <TextInput style={textInputStyles.registrationBox} placeholder="Enter a valid email address" underlineColorAndroid="transparent"></TextInput>
                    </View>
                    <View style={{flex: 0.5, width: win.width*0.8}}>
                        <Text style={{fontSize: 15, fontWeight: 'bold'}}>Password:             </Text>
                        {/*<TextInput
                            style={{ height: 40, paddingLeft: 10, borderColor: 'gray', backgroundColor: '#ffffff', borderWidth: 1 }}
                            onChangeText={text => passwordOnChangeText(text)}
                            value={passwordValue}
                        />*/}
                    </View>
                    <View style={{flex: 0.5, width: win.width*0.8, marginBottom: 10}}>
                        <TextInput style={textInputStyles.registrationBox} placeholder="*******" underlineColorAndroid="transparent"></TextInput>
                        {/*<TextInput
                            style={{ height: 40, paddingLeft: 10, borderColor: 'gray', backgroundColor: '#ffffff', borderWidth: 1 }}
                            onChangeText={text => passwordOnChangeText(text)}
                            value={passwordValue}
                        />*/}
                    </View>
                    <View style={{flex: 0.5, width: win.width*0.8}}>
                        <Text style={{fontSize: 15, fontWeight: 'bold'}}>Re-enter Password:             </Text>
                        {/*<TextInput
                            style={{ height: 40, paddingLeft: 10, borderColor: 'gray', backgroundColor: '#ffffff', borderWidth: 1 }}
                            onChangeText={text => passwordOnChangeText(text)}
                            value={passwordValue}
                        />*/}
                    </View>
                    <View style={{flex: 0.5, width: win.width*0.8, marginBottom: 10}}>
                        <TextInput style={textInputStyles.registrationBox} placeholder="*******" underlineColorAndroid="transparent"></TextInput>
                        {/*<TextInput
                            style={{ height: 40, paddingLeft: 10, borderColor: 'gray', backgroundColor: '#ffffff', borderWidth: 1 }}
                            onChangeText={text => passwordOnChangeText(text)}
                            value={passwordValue}
                        />*/}
                    </View>
                    <View style={{flex: 1.5, width: win.width*0.8, flexDirection: "row"}}>
                        <View style={checkbox.checkboxContainer}>
                            <CheckBox
                                value={isSelected}
                                onValueChange={setSelection}
                                style={checkbox.checkbox}
                            />
                            <Text style={checkbox.label}>Do you agree with the Terms and Conditions?</Text>
                        </View>
                    </View>
                    <View style={{flex: 0.15, width: win.width*0.5, marginBottom: 10}}>
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
  );
}

export default Register;


const register = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 36,
    fontWeight: 'bold',
    backgroundColor: "rgba(255, 255, 255, 0)",
    flex: 1
  },
  register: {
    flex: 1,  
    margin: 15, 
    padding: 30,
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

const checkbox = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
    marginTop: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    fontSize: 15,
    margin: 3,
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
      height: 40,
   },
   submitButtonText:{
      color: 'white',
      textAlign: 'center'
   },
   registrationBox: {
      height: 40,
      borderColor: "black",
      borderWidth: 2,
      backgroundColor: '#ffffff',
      paddingLeft: 10,
    },
});