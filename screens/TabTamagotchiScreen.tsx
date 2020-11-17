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
            {//Top2
            }
            <View style={tamagotchi.top2}>

                <View style={{ flex: .2, backgroundColor: 'green' }}>
                {//Left button
                }
                <TouchableOpacity
                    style={{backgroundColor: "pink", padding: 10, borderRadius: 10, marginTop: 25, }}
                    activeOpacity={.5}
                    onPress={() => console.log("mom")}>
                    <Text style={{ textAlign: 'center', fontSize: 20 }}>Store</Text>
                </TouchableOpacity> 
                </View>

                {//Text in the middle 
                }
                <View style={[tamagotchi.middleVectical, { flex: .6 }]}>
                    <Text style={[tamagotchi.petName, { backgroundColor: 'red' }]}>Minh</Text>
                    <Text style={[tamagotchi.petLevel, { backgroundColor: 'blue', }]}>Level 1000 </Text>
                    <Text style={[tamagotchi.petMood, { backgroundColor: 'purple' }]}>Sad</Text>
                </View>

                <View style={{ flex: .2, backgroundColor: 'green' }}>
                {//Right button
                }
                <TouchableOpacity
                    style={{ backgroundColor: "pink", padding: 10, borderRadius: 10, marginTop: 25, }}
                    activeOpacity={.5}
                    onPress={() => console.log("mom2")}>
                    <Text style={{ textAlign: 'center', fontSize: 20 }}>X</Text>
                </TouchableOpacity>
                </View>
                
            </View>
            {/*
                <Text style={[tamagotchi.petName]}>Bobby</Text>
                <Text style={[tamagotchi.petLevel]}>Level 1000</Text>
                <Text style={[tamagotchi.petMood]}>Sad</Text>
            */}
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
                    style={tamagotchi.button}
                    activeOpacity={.5}
                    onPress={() => console.log("Feed")}>
                        <Text style={{ textAlign: 'center', fontSize: 20 }}>Feed</Text>  
                </TouchableOpacity>

                <TouchableOpacity
                    style={tamagotchi.button}
                    activeOpacity={.5}
                    onPress={() => console.log("Water")}>
                    <Text style={{ textAlign: 'center', fontSize: 20 }}>Water</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={tamagotchi.button}
                    activeOpacity={.5}
                    onPress={() => console.log("Touch")}>
                    <Text style={{ textAlign: 'center', fontSize: 20 }}>Touch</Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                    style={tamagotchi.button}
                    activeOpacity={.5}
                    onPress={() => console.log("Hat")}>
                    <Text style={{ textAlign: 'center', fontSize: 20 }}>Hat</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={tamagotchi.button}
                    activeOpacity={.5}
                    onPress={() => console.log("Pet")}>
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
    top2: {
        flex: .1,
        backgroundColor: 'lightgreen',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        
    },
    leftTopButt: {
        backgroundColor: "blue",
        marginBottom: 25,
        marginLeft: 10,
        padding: 10,
        borderRadius: 10,
        marginTop: 25,
        

    },
    rightTopButt: {
        backgroundColor: 'red',
        marginBottom: 25,
        marginRight:10,
        padding: 10,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 10,
        marginTop: 25,

    },
    middleVectical: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'yellow',
        alignItems: 'center',
        marginTop: 10,
        
        
    },
    petName: {
        textAlign: 'center',
        fontSize: 15,
        color: 'black',
        
        
    },
    petLevel: {
        textAlign: 'center',
        fontSize: 10,
        color: 'black',
        
        
    },
    petMood: {
        textAlign: 'center',
        fontSize: 10,
        color: 'black',
    },
    middle: {
        flex: 0.7,
        flexDirection: "row",
        margin: 20,
        marginTop: 10,
        marginBottom: 0,
        
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        justifyContent: 'space-evenly',
        backgroundColor: "lightgreen"
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
    
    button: {
        backgroundColor: "red",
        padding: 10,
        borderRadius: 10,
        marginTop: 25,
        
    },
    buttonText: {
        color: "white"
    }






});