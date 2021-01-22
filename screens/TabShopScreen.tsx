import * as React from 'react';
import { StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

import { Text, View } from '../components/Themed';

import styles from "../assets/styles/styles";

export default function Shop() {
    return (
        <View style={tamaStore.container}>

            <View style={tamaStore.topContainer}>
                <TouchableOpacity activeOpacity={.5}
                    onPress={() => console.log("Back to tama")}>
                    <Image style={{ width: 50, height: 50 }} source={require('../assets/images/arrow.png')} />
                </TouchableOpacity>
                <Text style={{ fontSize: 30, }}>Coins: 69</Text>
                
            </View>

            <View style={tamaStore.middleContainer}>
                <View style={tamaStore.categoryContainer}>

                    <TouchableOpacity style={tamaStore.button} activeOpacity={.5}
                        onPress={() => console.log("Hats")}>
                        <Text style={{ fontSize: 30, color: 'black',  }}>Hats</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={tamaStore.button} activeOpacity={.5}
                        onPress={() => console.log("Toys")}>
                        <Text style={{ fontSize: 30, color: 'black', }}>Toys</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={tamaStore.button} activeOpacity={.5}
                        onPress={() => console.log("Food")}>
                        <Text style={{  fontSize: 30, color: 'black', }}>Food</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={tamaStore.button} activeOpacity={.5}
                        onPress={() => console.log("Pets")}>
                        <Text style={{ fontSize: 30, color: 'black', }}>Pets</Text>
                    </TouchableOpacity>


                </View>
                <ScrollView style={{ flex: 1 }}>
                    <View style={tamaStore.itemRow}>
                       
                       <Image style={{ width: 200, height: 200 }} source={require('../assets/images/transFat.jpg')} />
                        <Image style={{ width: 200, height: 200 }} source={require('../assets/images/protein.png')} />

                    </View>
                </ScrollView>


            </View>
            

        </View>
  );
}

const tamaStore = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'yellow',
    },
    
    topContainer: {
        flex: .1,
        flexDirection: 'row',
        backgroundColor: 'lightgreen',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    middleContainer: {
        flex: 1,
        backgroundColor: 'blue',
        margin: 15,
    },
    categoryContainer: {
        flex: .1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'pink',
        alignItems: 'center',

    },
    button: {
        backgroundColor: "red",
        flex: 1,
        flexDirection: 'row',
        textAlign: 'center',

    },
    itemRow: {
        flex: .2,
        flexDirection: 'row',
        backgroundColor: 'green',
        justifyContent: 'space-around',
    },
    
    itemContainer: {

    },

})
