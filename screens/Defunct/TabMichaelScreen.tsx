import * as React from 'react';
import { Image, Button } from 'react-native';

import { Text, View } from '../components/Themed';

import styles from "../assets/styles/styles";

import { TouchableOpacity } from 'react-native-gesture-handler';

import { useNavigation } from '@react-navigation/native';

export default function TabMichael() {
    const navigation = useNavigation();

    return (

        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => { navigation.navigate("Profile") } }>
                    <Image style={{width:40, height:40}} source={require('../assets/images/profilePic.png')} />
                </TouchableOpacity>
                
                <Text style={styles.title}>Dashboard</Text>
                <TouchableOpacity onPress={() => { navigation.navigate("Tamagotchi") } }>
                   <Image style={{ width: 40, height: 40 }} source={require('../assets/images/tamaPic.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.body}>
                <TouchableOpacity onPress={() => { navigation.navigate("NotFound") }}>
                    <Image style={{ width: 180, height: 120 }} source={require('../assets/images/splash.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.footer}>
                <Button title="Add Meal" onPress={() => navigation.navigate("Nutrient")} />
                <Button title="Add Water" onPress={() => navigation.navigate("Water")} />
                <Button title="Add Exercise" onPress={() => navigation.navigate("Exercise")} />
            </View>
        </View>
  );
}

