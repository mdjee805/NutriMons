import * as React from 'react';
import { StyleSheet, Image } from 'react-native';
import styles from '../assets/styles/styles';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabMinhScreen() {
    return (
        
        <View style={styles.minhsContainer}>
            {/* "NutriMons" header */}
            <View style={{ flex: .1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue' }}>
                <Text style={{ fontSize: 50, color: 'white' }}>NutriMons</Text>
            </View>

            {/* "Dashboard" header */}
            <View style={{ flex: .1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: 'black', fontSize: 40,  }}>Dashboard</Text>
            </View>

            {/* "Today" header */}
            <View style={{ flex: .05, justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue' }}>
                <Text style={{ fontSize: 20, color: 'white' }}>Today</Text>
            </View>  

            {/* Panda bear icon*/}
            <View style={{ flex: .1, justifyContent: 'center', alignItems: 'flex-end' }}>
                <Image style={{ width: 50, height: 50 }} source={require('../assets/images/tamaPic.png')} />
            </View> 

            {/* "Nutrient Overview" header */}
            <View style={{ flex: .05, justifyContent: 'center', alignItems: 'center', }}>
                <Text style={{ fontSize: 20, color: 'black', }}>Nutrient Overview  </Text>
            </View> 
            

            

            

            
            
        </View>
            
    );
}


