import * as React from 'react';
import { StyleSheet, Image, Button, SafeAreaView, Component, Dimensions, View, Text, TextInput } from 'react-native';
//import { Text, View } from '../components/Themed';
import { FieldError } from 'react-hook-form';
import styles from "../assets/styles/styles";

import { TouchableOpacity } from 'react-native-gesture-handler';

import { useNavigation } from '@react-navigation/native';

// will use this import later once I figure out how to reformat the input fields and create a heading for them
// import DocForm from "react-cross-form";; // npm i react-cross-form --save (https://reactnativeexample.com/easy-form-for-react-and-react-native-apps-with-validation/)

const Login = () => {
  const [usernameValue, usernameOnChangeText] = React.useState('Enter username');
  const [passwordValue, passwordOnChangeText] = React.useState('*******');
  const win = Dimensions.get('window');

  return (
            <View style={styles.container}>
                <View style={loginStyle.login}>
                    <View style={{flex: 0.03, backgroundColor: "#ffa514", justifyContent: 'space-around', padding: 5, width: win.width*0.8}}>
                        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black', textAlign: 'center'}}>Login</Text>
                    </View>
                    <View style={{flex: 0.01, width: win.width*0.8, alignItems: 'center',}}/>
                    <View style={{flex: 0.15, width: win.width*0.8}}>
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Username:                              </Text>
                        <TextInput
                            style={{ height: 40, paddingLeft: 10, borderColor: 'gray', backgroundColor: '#ffffff', borderWidth: 1 }}
                            onChangeText={text => usernameOnChangeText(text)}
                            value={usernameValue}
                        />
                    </View>
                    <View style={{flex: 0.15, width: win.width*0.8}}>
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Password:             </Text>
                        <TextInput
                            style={{ height: 40, paddingLeft: 10, borderColor: 'gray', backgroundColor: '#ffffff', borderWidth: 1 }}
                            onChangeText={text => passwordOnChangeText(text)}
                            value={passwordValue}
                        />
                    </View>
                    <View style={{flex: 0.15, width: win.width*0.8}}>
                        <TouchableOpacity
                            style = {textInputStyles.submitButton}
                            onPress = {
                                () => this.login(this.state.email, this.state.password)
                            }>
                            <Text style = {textInputStyles.submitButtonText}> Login </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex: 0.03, width: win.width*0.8, alignItems: 'center',}}>
                        <Text style={{fontSize: 15, fontWeight: 'bold'}}>Forgot Username / Password?</Text>
                    </View>
                    <View style={{flex: 0.15, width: win.width*0.8, alignItems: 'center',}}/>
                    <View style={{flex: 0.03, width: win.width*0.3, justifyContent: 'center'}}>
                        <TouchableOpacity
                            style = {textInputStyles.submitButton}
                            onPress = {
                                () => navigation.navigate("Register")
                            }>
                            <Text style = {textInputStyles.submitButtonText}> Create Your Account </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
  );
}

export default Login;


const loginStyle = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 36,
    fontWeight: 'bold',
    backgroundColor: "rgba(255, 255, 255, 0)",
    flex: 1
  },
  login: {
    flex: 1,  
    margin: 30, 
    padding: 60,
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
      height: 40,
   },
   submitButtonText:{
      color: 'white',
      textAlign: 'center'
   }
});