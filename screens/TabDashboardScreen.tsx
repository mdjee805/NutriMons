﻿import * as React from 'react';
import { StyleSheet, Image, Button, SafeAreaView } from 'react-native';
import { Text, View } from '../components/Themed';

import styles from "../assets/styles/styles";

import { TouchableOpacity } from 'react-native-gesture-handler';

import { PieChart } from 'react-minimal-pie-chart'; // used fdor pie chart on dashboard
//import * as nutrition from 'nutrition'; // https://www.npmjs.com/package/nutrition

import { useNavigation } from '@react-navigation/native';

export default function TabDashboard() {
  const navigation = useNavigation();

    return (
    <View style={[styles.container, { backgroundColor: 'white' }]}>
      <View style={dashboard.top}>
          <View style={{backgroundColor: "", flexDirection: "row", margin: 0}}>
              <View style={{ backgroundColor: "", flex: 0.15, alignItems: 'flex-start', justifyContent: 'center' }}>
                  <TouchableOpacity onPress={() => { navigation.navigate("TabProfile") } }>
                      <Image style={{width: 40, height: 40, flex: 1}} source={require('../assets/images/profilePic.png')} />
                  </TouchableOpacity>
              </View>
              <View style={{ backgroundColor: "", flex: 0.7 }}>
                <Text style={[dashboard.title, { textAlign: 'center', flex: 1 }]}>
                    Dashboard
                </Text>
              </View>
              <View style={{ backgroundColor: "", flex: 0.15, alignItems: 'flex-end', justifyContent:'center' }}>
                  <TouchableOpacity onPress={() => { navigation.navigate("TabTamagotchi") } }>
                      <Image style={{ width: 40, height: 40, flex: 1 }} source={require('../assets/images/tamaPic.png')} />
                  </TouchableOpacity>
              </View>
          </View>
      </View>
      <View style={dashboard.middle}>
          <View style={{ backgroundColor: "", flex: 0.3, borderTopLeftRadius: 20, borderTopRightRadius: 20, borderBottomLeftRadius: 20, borderBottomRightRadius: 20}}>
              <View style={{backgroundColor: "", flexDirection: "column", flex: 1, justifyContent: 'space-around'}}>
                  <View style={{backgroundColor: "", flex: 1}} />
                  <View style={{backgroundColor: "", flex: 1}}>
                      <Button title="Add Meal" onPress={() => navigation.navigate("Meal")} />
                  </View>
                  <View style={{backgroundColor: "", flex: 1}}>
                      <Button title="Add Water" onPress={() => navigation.navigate("Water")} />
                  </View>
                  <View style={{backgroundColor: "", flex: 1}}>
                      <Button title="Add Exercise" onPress={() => navigation.navigate("Exercise")} />
                  </View>
                  <View style={{ backgroundColor: "rgba(255, 255, 255, 0)", flex: 1 }} />
              </View>
          </View>
          <View style={{ backgroundColor: "", flex: 0.7}}>
              <Text style={{fontSize: 20, fontWeight: 'bold',  textAlign: 'center', color: '#0400ff'}}>
                  Target Calories: 2000
              </Text>
              <Text style={{fontSize: 20, fontWeight: 'bold',  textAlign: 'center'}}>
                  Calories Needed: 400
              </Text>
              {/*{<PieChart
              data={[
                {title: 'Consumed', value: 1600, color: '#36A832'},
                {title: 'Needed', value: 400, color: '#C13C37'},
                ]}
              labelStyle={{
                fontSize: 10,
                textAlign: 'center'
              }}
              label={({ dataEntry }) => `${Math.round(dataEntry.percentage)} %`}
              />}*/}
              <Text style={{fontSize: 20, fontWeight: 'bold',  textAlign: 'center'}}>
                  Calories Consumed: 1600
              </Text>
          </View>
      </View>
      <View style={dashboard.bottom}>
        <Text style={{fontSize: 16, fontWeight: 'bold',  textAlign: 'center', color: '#0400ff', flex: .4}}>
            Today's Fun Fact
        </Text>
        <Text style={{fontSize: 10, fontWeight: 'bold',  textAlign: 'left', padding: 5, flex: .3}}>
            Did you know that ........................
        </Text>
        <Text style={{fontSize: 10, fontWeight: 'bold',  textAlign: 'left', padding: 5, flex: .3}}>
            To learn more go to [website]
        </Text>
      </View>
    </View>
  );
}


const dashboard = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 36,
    fontWeight: 'bold',
    backgroundColor: "rgba(255, 255, 255, 0)",
    flex: 1
  },
  top: {
    backgroundColor: "lightblue",
    margin: 10,
    marginBottom: 0,
    padding: 10,
    flex: 0.1,
    borderWidth: 2,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  middle: {
    flex: 0.7, 
    flexDirection: "row", 
    margin: 10, 
    borderWidth: 2, 
    borderTopLeftRadius: 20, 
    borderTopRightRadius: 20, 
    borderBottomLeftRadius: 20, 
    borderBottomRightRadius: 20,
    justifyContent: 'space-evenly', 
    backgroundColor: "lightblue"
  },
  bottom: {
    margin: 10,
    marginTop: 0,
    flex: 0.2,
    backgroundColor: "lightblue",
    borderWidth: 2,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});