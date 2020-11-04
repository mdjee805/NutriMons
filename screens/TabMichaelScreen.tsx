import * as React from 'react';
import { StyleSheet, Image } from 'react-native';

import { Text, View } from '../components/Themed';

export default function TabMichael() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={{width:40, height:40}} source={require('../assets/images/profilePic.png')} />
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
    flexDirection:'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  body: {
    flex: .8,
    flexDirection:'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
