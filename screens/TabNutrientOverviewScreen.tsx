import * as React from 'react';
import { StyleSheet, Image, Button, SafeAreaView, Dimensions, TextInput } from 'react-native';
import { Text, View } from '../components/Themed';

import styles from "../assets/styles/styles";

import { TouchableOpacity } from 'react-native-gesture-handler';

import { PieChart } from 'react-minimal-pie-chart'; // used fdor pie chart on dashboard
//import * as nutrition from 'nutrition'; // https://www.npmjs.com/package/nutrition

import { useNavigation } from '@react-navigation/native';

export default function TabNutrientOverview() {
    const navigation = useNavigation();
    const [amountOfWaterValue, amountOfWaterOnChangeText] = React.useState('Amount of water');
    const win = Dimensions.get('window');
    const ratio = (win.width * 0.7) / 350; // actual width of image is 305

    return (
        <View style={styles.container}>
            <View style={dashboard.top}>
                <View style={{backgroundColor: "", flexDirection: "row", margin: 0}}>
                    <View style={{ backgroundColor: "", flex: 0.15, alignItems: 'flex-start', justifyContent: 'center' }}>
                        <TouchableOpacity onPress={() => { navigation.navigate("TabProfile") } }>
                            <Image style={{width: 40, height: 40, flex: 1}} source={require('../assets/images/profilePic.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ backgroundColor: "", flex: 0.7 }}>
                    <Text style={[styles.title, { textAlign: 'center', flex: 1 }]}>
                        Nutrient Overview
                    </Text>
                    </View>
                    <View style={{ backgroundColor: "", flex: 0.15, alignItems: 'flex-end', justifyContent:'center' }}>
                        <TouchableOpacity onPress={() => { navigation.navigate("TabTamagotchi") } }>
                            <Image style={{ width: 40, height: 40, flex: 1 }} source={require('../assets/images/tamaPic.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={dashboard.middle}>
                <View style={{ backgroundColor: "rgba(255, 255, 255, 0)", flex: 0.2, alignItems: 'center' }}>
                    <Image style={{ height: 207 * ratio, width: win.width * 0.7 }} source={require('../assets/images/nutGraph.jpg')} />
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
        justifyContent: 'space-around',
        alignContent: "center",
        backgroundColor: "lightblue"
    },
});