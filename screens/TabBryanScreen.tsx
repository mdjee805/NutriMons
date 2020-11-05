import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';

import styles from "../assets/styles/styles";

export default function TabBryan() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TabBryanScreen</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </View>
  );
}
