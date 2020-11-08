import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';

import styles from "../assets/styles/styles";

export default function TabBryanScreen() {
    return (
        
        <View style={bbStyle.bbContainer}>

            {/* Dashboard box */}
            <View style={bbStyle.topBox}>
                <Text style={bbTextStyle.DashBoard}>Dashboard</Text>
            </View>

            {/* Button box */}
            <View style={bbStyle.botBox}>
                <Text style={bbTextStyle.buttons}>Button 1</Text>
                <Text style={bbTextStyle.buttons}>Button 2</Text>
                <Text style={bbTextStyle.buttons}>Button 3</Text>
            </View>
            
        </View>
    );
};

var bbTextStyle = StyleSheet.create({
    DashBoard: {
        fontSize: 40,
        color: 'black',
        fontWeight: "bold"
    },
    buttons: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        borderColor: 'lightgreen',
        borderWidth: 4, 
    }
})

var bbStyle = StyleSheet.create({
    bbContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'lightblue',
        justifyContent: 'space-between',
        padding: 20,
        margin: 10,
        borderWidth: 5,
    },
    topBox: {
        flex: .1,
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderWidth: 5,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
    },

    botBox: {
    
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        paddingLeft: 20,
    }
});
