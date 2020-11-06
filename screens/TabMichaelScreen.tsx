import * as React from 'react';
import { StyleSheet, Image, Button } from 'react-native';

import { Text, View } from '../components/Themed';

import styles from "../assets/styles/styles";

import { TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler';

import { useNavigation } from '@react-navigation/native';

export default function TabMichael() {
    const navigation = useNavigation();

    return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => { navigation.navigate("Profile") } }>
          <Image style={{width:40, height:40}} source={require('../assets/images/profilePic.png')} />
        </TouchableOpacity>
                <TouchableHighlight onPress={() => { navigation.navigate('Profile') }} >
          <Text> Move</Text>
        </TouchableHighlight>
        <Button title="test" onPress={() => navigation.navigate("Profile")} />
        <Text style={styles.title}>TabMichaelScreen</Text>
        <Image style={{width:40, height:40}} source={require('../assets/images/tamaPic.png')} />
      </View>
      <View style={styles.body}>
        <Image style={{width:180, height:120}} source={require('../assets/images/splash.png')} />
      </View>
      <View style={styles.footer}>
        <Text>button1</Text>
        <Text>button2</Text>
        <Text>button3</Text>
      </View>
    </View>
  );
}

