import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabMinhScreen() {
    return (

        <View style={styles.container}>

            <View style={styles.bluebox}>
                <Text style={styles.title}>NutriMons</Text>
            </View>

            <Text style={styles.title1}>Dashboard</Text>

            <View style={{
                width: 3000, height: 30, alignItems: 'center',
                backgroundColor: 'blue'
            }}>
                <Text style={{ fontSize: 20, fontWeight: 'normal', color: 'white' }}>Today</Text>
            </View>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <EditScreenInfo path="/screens/TabMinhScreen.js" />


            <Text style={styles.graphTitle}>
                Nutrient Overview</Text>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {

        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 50,
        fontWeight: 'bold',
        color: 'white',
    },
    title1: {
        fontSize: 30,
        fontWeight: 'normal',
    },
    graphTitle: {
        marginVertical: 800,
        fontSize: 30,
        fontWeight: 'normal',
    },
    bluebox: {
        width: 3000,
        height: 80,
        alignItems: 'center',
        backgroundColor: 'blue'
    },
    separator: {

        height: 1,
        width: '80%',
    },
});
