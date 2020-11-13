import * as React from 'react';
import { StyleSheet, Image, Button, SafeAreaView } from 'react-native';
import { Text, View } from '../components/Themed';

import styles from "../assets/styles/styles";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function TabMichael() {
    const navigation = useNavigation();
    return (
        
        <View style={[styles.container, { justifyContent: 'flex-start', backgroundColor: 'lightgreen' }]}>
            {//Top
            }
            <View style={tamagotchi.top}>
                <Text style={tamagotchi.title}>NutriMons</Text>
            </View>

            <Text style={[tamagotchi.petName]}>Bobby</Text>
            <Text style={[tamagotchi.petLevel]}>Level 1000</Text>
            <Text style={[tamagotchi.petMood]}>Sad</Text>

            {//Middle
            }
            <View style={tamagotchi.middle}>
                <View style={{ alignItems: 'center', margin: 70, }}>
                    <Image style={{ width: 300, height: 325 }} source={require('../assets/images/tamaPic.png')} />
                </View>
            </View>

            {//Bottom
            }
            <View style={[tamagotchi.bottom, ]}>

                <TouchableOpacity
                    style={tamagotchi.buttoms}
                    activeOpacity={.5}
                    onPress={() => navigation.navigate("Nutrient")}>
                        <Text style={{ textAlign: 'center', fontSize: 20 }}>Feed</Text>  
                </TouchableOpacity>

                <TouchableOpacity
                    style={tamagotchi.buttoms}
                    activeOpacity={.5}
                    onPress={() => navigation.navigate("Nutrient")}>
                    <Text style={{ textAlign: 'center', fontSize: 20 }}>Water</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={tamagotchi.buttoms}
                    activeOpacity={.5}
                    onPress={() => navigation.navigate("Nutrient")}>
                    <Text style={{ textAlign: 'center', fontSize: 20 }}>Touch</Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                    style={tamagotchi.buttoms}
                    activeOpacity={.5}
                    onPress={() => navigation.navigate("Nutrient")}>
                    <Text style={{ textAlign: 'center', fontSize: 20 }}>Hat</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={tamagotchi.buttoms}
                    activeOpacity={.5}
                    onPress={() => navigation.navigate("Nutrient")}>
                    <Text style={{ textAlign: 'center', fontSize: 20 }}>Pet</Text>
                </TouchableOpacity>

            </View>





          

    </View>
  );
}

const tamagotchi = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontSize: 40,
        fontWeight: 'bold',
        flex: 1
    },
    top: {
        backgroundColor: "lightblue",
        margin: 15,
        marginBottom: 0,
        flex: 0.1,
        borderWidth: 2,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    petName: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',

    },
    petLevel: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black',
    },
    petMood: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black',
    },
    middle: {
        flex: 0.7,
        flexDirection: "row",
        margin: 20,
        marginTop: 10,
        marginBottom: 0,
        borderWidth: 2,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        justifyContent: 'space-evenly',
        backgroundColor: "lightblue"
    },
    bottom: {
        margin: 5,
        marginTop: 20,
        marginBottom: 0,
        flex: 0.15,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: "lightblue",
        borderWidth: 2,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    buttoms: {
        marginTop: 20,
        marginBottom: 10,

        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 7,
        paddingRight: 7,
        backgroundColor: 'red',
        borderRadius: 50,
        borderWidth: 1,
        borderColor: 'purple'
    },
    feedButtom: {
        marginTop: 20,
        marginBottom: 10,
        
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 7,
        paddingRight: 7,
        backgroundColor: 'red',
        borderRadius: 50,
        borderWidth: 1,
        borderColor: 'purple'
    },
    waterButtom: {
        
        marginTop: 20,
        marginBottom: 20,
        
        
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 7,
        paddingRight: 7,
        backgroundColor: 'red',
        borderRadius: 50,
        borderWidth: 1,
        borderColor: 'purple'
    },
    pettingButtom: {

        marginTop: 20,
        marginBottom: 20,
        

        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 7,
        paddingRight: 7,
        backgroundColor: 'red',
        borderRadius: 50,
        borderWidth: 1,
        borderColor: 'purple'
    },
    hatButtom: {

        marginTop: 20,
        marginBottom: 20,
        

        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 7,
        paddingRight: 7,
        backgroundColor: 'red',
        borderRadius: 50,
        borderWidth: 1,
        borderColor: 'purple'
    },
    petsButtom: {

        marginTop: 20,
        marginBottom: 20,
        

        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: 'red',
        borderRadius: 50,
        borderWidth: 1,
        borderColor: 'purple'
    },






});