import * as React from 'react';
import { StyleSheet, Image } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabMinhScreen() {
    return (

        <View style={styles.container}>
            <View style={styles.header}>

                {/* "Nutrimons" header */}
                <View style={styles.bluebox}>
                    <Text style={styles.title}>NutriMons</Text>
                </View>

                {/* "Dashboard" header */}
                <Text style={{ alignItems: 'center' }}>Dashboard</Text>




            </View>
            

            

            <Image style={{ width: 40, height: 40 }} source={require('../assets/images/tamaPic.png')} />

            <div>{/* "Today" header */}</div>
            <View style={{
                width: 2000, height: 30, alignItems: 'center',
                backgroundColor: 'blue'}}>
                <Text style={{ fontSize: 20, fontWeight: 'normal', color: 'white' }}>Today</Text>
            </View>
            

            <div>{/* "Nutrient Overview" header */}</div>
            <Text style={styles.graphTitle}>
                Nutrient Overview</Text>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    header: {
        flex: .1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    footer: {
        flex: .1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    body: {
        flex: .8,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    title: {
        fontSize: 50,
        fontWeight: 'bold',
        color: 'white',
    },
    title1: {
        alignItems: 'center',
        color:'black',
        fontSize: 30,
        fontWeight: 'normal',
    },
    graphTitle: {
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
