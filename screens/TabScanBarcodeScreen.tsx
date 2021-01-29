import * as React from 'react';
import { StyleSheet, Image, Button, SafeAreaView, /*Component*/  } from 'react-native';
import { Text, View } from '../components/Themed';

import styles from "../assets/styles/styles";

import { TouchableOpacity } from 'react-native-gesture-handler';

import { useNavigation } from '@react-navigation/native';
import bs from './BarcodeScanner';

import BarcodeScannerComponent from "react-webcam-barcode-scanner"; // npm i react-webcam-barcode-scanner (https://www.npmjs.com/package/react-webcam-barcode-scanner)

export default function TabScanBarcode() {
  const [ data, setData ] = React.useState('Not Found');
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <View style={meal.top}>
            <View style={{backgroundColor: "", flexDirection: "row", margin: 0}}>
                <View style={{ backgroundColor: "", flex: 0.15, alignItems: 'flex-start', justifyContent: 'center' }}>
                    <TouchableOpacity onPress={() => { navigation.navigate("TabProfile") } }>
                        <Image style={{width: 40, height: 40, flex: 1}} source={require('../assets/images/profilePic.png')} />
                    </TouchableOpacity>
                </View>
                <View style={{ backgroundColor: "", flex: 0.7 }}>
                <Text style={[styles.title, { textAlign: 'center', flex: 1 }]}>
                    Scan Barcode
                </Text>
                </View>
                <View style={{ backgroundColor: "", flex: 0.15, alignItems: 'flex-end', justifyContent:'center' }}>
                    <TouchableOpacity onPress={() => { navigation.navigate("TabTamagotchi") } }>
                        <Image style={{ width: 40, height: 40, flex: 1 }} source={require('../assets/images/tamaPic.png')} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        <View style={meal.bottom}>
            <View style={{ backgroundColor: "lightblue", flex: 1, borderTopLeftRadius: 20, borderTopRightRadius: 20, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, justifyContent: 'center', alignItems: 'center'}}>
                {/*<BarcodeScannerComponent
                    style={{borderWidth: 2, borderTopLeftRadius: 20, borderTopRightRadius: 20, borderBottomLeftRadius: 20, borderBottomRightRadius: 20}}
                    onUpdate={(err, result) => {
                        if (result) setData(result.text)
                        else setData('Not Found')
                    }}
                />
                <p>{data}</p>*/}
                {bs()}
            </View>
        </View>
    </View>
  );
}



const meal = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 36,
    fontWeight: 'bold',
    backgroundColor: "rgba(255, 255, 255, 0)",
    flex: 1
  },
  top: {
    backgroundColor: "rgba(255, 255, 255, 0)",
    margin: 30,
    marginBottom: 0,
    flex: 0.1,
    borderWidth: 2,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  bottom: {
    flex: 0.9, 
    flexDirection: "row", 
    margin: 30, 
    borderWidth: 2, 
    borderTopLeftRadius: 20, 
    borderTopRightRadius: 20, 
    borderBottomLeftRadius: 20, 
    borderBottomRightRadius: 20,
    justifyContent: 'space-evenly', 
    backgroundColor: "rgba(255, 255, 255, 0)"
  },
});