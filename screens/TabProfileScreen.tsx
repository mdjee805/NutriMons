import * as React from 'react';
import { StyleSheet, Image } from 'react-native';

import { Text, View } from '../components/Themed';

import styles from "../assets/styles/styles";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={{width:40, height:40}} source={require('../assets/images/profilePic.png')} />
        <Text style={styles.title}>ProfileScreen</Text>
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