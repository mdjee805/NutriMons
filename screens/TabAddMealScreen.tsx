import * as React from 'react';
import { StyleSheet, Image, Button, SafeAreaView, Component, Dimensions, View, Text, TextInput } from 'react-native';
//import { Text, View } from '../components/Themed';
import { FieldError } from 'react-hook-form';
import styles from "../assets/styles/styles";

import { TouchableOpacity } from 'react-native-gesture-handler';

import { useNavigation } from '@react-navigation/native';

// will use this import later once I figure out how to reformat the input fields and create a heading for them
// import DocForm from "react-cross-form";; // npm i react-cross-form --save (https://reactnativeexample.com/easy-form-for-react-and-react-native-apps-with-validation/)

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
    padding: 60,
    borderWidth: 2, 
    borderTopLeftRadius: 20, 
    borderTopRightRadius: 20, 
    borderBottomLeftRadius: 20, 
    borderBottomRightRadius: 20,
    justifyContent: 'space-evenly', 
    alignItems: 'left',
    backgroundColor: "lightblue"
  },
});

{
/* this is a class made for using the form feature - is not completed yet
const FORM_FIELDS = [
  {
    key: "nameOfFood",
    label: "Name of Food",
    placeholder: "Type the food name...",
    component: TextInput,
    validators: { presence: { message: "is required" } }
  },
  {
    key: "servingSize",
    label: "Serving Size",
    placeholder: "Serving Size",
    component: TextInput,
    validators: { numericality: {noStrings: true}}
  },
  {
    key: "servingWeight",
    label: "Serving Weight",
    placeholder: "Serving Weight (in grams)",
    component: TextInput,
    validators: { numericality: {noStrings: true}}
  },
  {
    key: "calories",
    label: "Calories",
    placeholder: "Calories Per Serving",
    component: TextInput,
    validators: { numericality: {noStrings: true}}
  }
];


export default class App extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			form: {
				nameOfFood: null,
                servingSize: null,
                servingWeight: null,
                calories: null
			},
			isValid: false
		};
		this.onChange = this.onChange.bind(this)
	}
	onChange({updateData}){
		this.setState({ form: updateData })
	}

    render() {
        const { form, isFormValid } = this.state;

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
                            Add Custom Meal
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
                {
                    <View style={{flex: 0.8}}>
                        <form>
                            <DocForm
                                fields={FORM_FIELDS}
                                data={this.state.form}
                                onChange={this.onChange}
                                validateType="all"
                                onValidateStateChanged={({ isValid }) => {
                                this.setState({ isFormValid: isValid });
                                }}
                            />
                        </form>
                    </View>
                }
                    <View style={{}}>
                        <Button
                            disabled={!this.state.isFormValid}
                            title={'Submit'}
                            onPress={() => alert(JSON.stringify(this.state.form))}
                        />
                    </View>
                </View>
            </View>
        )
    }
    _onFormRef = e => {
        this.form = e
    }

    onChange = (values) => {
        this.setState(values)
    }

    onSubmit = (values) => {
        Alert.alert('Submitted: ' + JSON.stringify(values))
    }

    validate = (values) => {
        const ret = Object.keys(this.state).reduce((m, v) => {
            if (!values[v] || !values[v].length) {
            m[v] = Form.VALIDATION_RESULT.MISSING
            }
            return m
    }, {})

    if (!ret.age && isNaN(values.age)) {
        ret.age = Form.VALIDATION_RESULT.INCORRECT
    }

    return ret
    }
}
*/
}

const MealPlan = () => {
  const [nameOfFoodValue, nameOfFoodOnChangeText] = React.useState('Type the food name...');
  const [servingSizeValue, servingSizeOnChangeText] = React.useState('Serving Size');
  const [servingWeightValue, servingWeightOnChangeText] = React.useState('Serving Weight (in grams)');
  const [caloriesValue, caloriesOnChangeText] = React.useState('Calories Per Serving');
  const win = Dimensions.get('window');

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
                            Add Custom Meal
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
                    <View style={{flex: 0.15, width: win.width*0.5}}>
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Name of Food:                              </Text>
                        <TextInput
                            style={{ height: 40, paddingLeft: 10, borderColor: 'gray', backgroundColor: '#ffffff', borderWidth: 1 }}
                            onChangeText={text => nameOfFoodOnChangeText(text)}
                            value={nameOfFoodValue}
                        />
                    </View>
                    <View style={{flex: 0.15, width: win.width*0.2}}>
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Serving Size:             </Text>
                        <TextInput
                            style={{ height: 40, paddingLeft: 10, borderColor: 'gray', backgroundColor: '#ffffff', borderWidth: 1 }}
                            onChangeText={text => servingSizeOnChangeText(text)}
                            value={servingSizeValue}
                        />
                    </View>
                    <View style={{flex: 0.15, width: win.width*0.2}}>
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Serving Weight:       </Text>
                        <TextInput
                            style={{ height: 40, paddingLeft: 10, borderColor: 'gray', backgroundColor: '#ffffff', borderWidth: 1 }}
                            onChangeText={text => servingWeightOnChangeText(text)}
                            value={servingWeightValue}
                        />
                    </View>
                    <View style={{flex: 0.15, width: win.width*0.2}}>
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Calories:                   </Text>
                        <TextInput
                            style={{ height: 40, paddingLeft: 10, borderColor: 'gray', backgroundColor: '#ffffff', borderWidth: 1 }}
                            onChangeText={text => caloriesOnChangeText(text)}
                            value={caloriesValue}
                        />
                    </View>
                    <View style={{flex: 0.15}}>
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

export default MealPlan;

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
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: 'white',
      textAlign: 'center'
   }
});