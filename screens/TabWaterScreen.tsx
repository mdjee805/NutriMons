import * as React from 'react';
import { StyleSheet, Image, Button, SafeAreaView, TextInput } from 'react-native';
import { Text, View } from '../components/Themed';

import styles from "../assets/styles/styles";

import { TouchableOpacity } from 'react-native-gesture-handler';

import { PieChart } from 'react-minimal-pie-chart'; // used fdor pie chart on dashboard
//import * as nutrition from 'nutrition'; // https://www.npmjs.com/package/nutrition

import { useNavigation } from '@react-navigation/native';

export default function TabWater() {
    const navigation = useNavigation();
    const [amountOfWaterValue, amountOfWaterOnChangeText] = React.useState('Amount of water');

    return (
        <View style={styles.container}>
            <View style={dashboard.top}>
                <View style={{ backgroundColor: "rgba(255, 255, 255, 0)", flexDirection: "row", margin: 0 }}>
                    <View style={{ backgroundColor: "rgba(255, 255, 255, 0)", flex: 0.2 }}>
                        <SafeAreaView>
                            <TouchableOpacity onPress={() => { navigation.navigate("Profile") }}>
                                <Image style={{ width: 40, height: 40, flex: 1 }} source={require('../assets/images/profilePic.png')} />
                            </TouchableOpacity>
                        </SafeAreaView>
                    </View>
                    <View style={{ backgroundColor: "rgba(255, 255, 255, 0)", flex: 0.6 }}>
                        <Text style={[dashboard.title, { flex: 1 }]}>
                            Water Tracker
                        </Text>
                    </View>
                    <View style={{ backgroundColor: "rgba(255, 255, 255, 0)", flex: 0.2, alignItems: 'flex-end' }}>
                        <SafeAreaView style={{ flex: 1 }}>
                            <TouchableOpacity onPress={() => { navigation.navigate("Tamagotchi") }}>
                                <Image style={{ width: 40, height: 40, flex: 1 }} source={require('../assets/images/tamaPic.png')} />
                            </TouchableOpacity>
                        </SafeAreaView>
                    </View>
                </View>
            </View>
            <View style={dashboard.middle}>
                <View style={{ backgroundColor: "rgba(255, 255, 255, 0)", flexDirection: "column", flex: 1, padding: 30 }}>
                    <View style={{ backgroundColor: "rgba(255, 255, 255, 0)", flex: 1 }} />
                        <Text style={[dashboard.title, { flex: 1 }]}>
                            Insert visual for tracker here
                        </Text>
                    <View style={{ backgroundColor: "rgba(255, 255, 255, 0)", flexDirection: "row", flex: 1, padding: 30, justifyContent: "space-around" }}>
                        <View style={{ backgroundColor: "lightblue", flex: 0.2 }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Enter the amount of water consumed:             </Text>
                            <TextInput
                                style={{ height: 40, paddingLeft: 10, borderColor: 'gray', backgroundColor: '#ffffff', borderWidth: 1 }}
                                onChangeText={text => amountOfWaterOnChangeText(text)}
                                value={amountOfWaterValue}
                            />
                        </View>
                        <View style={{ backgroundColor: "lightblue", flex: 0.2 }}>
                            <Button title="Water Settings" onPress={() => navigation.navigate("Exercise")} />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}


const dashboard = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontSize: 36,
        fontWeight: 'bold',
        backgroundColor: "rgba(255, 255, 255, 0)",
        flex: 1
    },
    top: {
        backgroundColor: "lightblue",
        margin: 30,
        marginBottom: 0,
        flex: 0.1,
        borderWidth: 2,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    middle: {
        flex: 0.9,
        flexDirection: "row",
        margin: 30,
        borderWidth: 2,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        justifyContent: 'space-evenly',
        backgroundColor: "lightblue"
    },
});