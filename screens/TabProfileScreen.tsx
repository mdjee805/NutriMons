import * as React from 'react';
import { StyleSheet, Image } from 'react-native';

import { Text, View } from '../components/Themed';

import styles from "../assets/styles/styles";

export default function ProfileScreen() {
    return (
        <View style={[styles.roundedContainer, {margin: 5, padding: 10}]}>

            {//Title
            }
            <View style={[styles.rowContainer, { backgroundColor:'lightblue', flex: .1 }]}>
                <View style={[styles.itemContainer, { backgroundColor: '#ffa514' }]}>
                    <Text style={styles.title}>Profile</Text>
                </View>
            </View>

            {//Profile Icon
            }
            <View style={[styles.rowContainer, { flex: .1, backgroundColor: 'lightblue', justifyContent: 'flex-start', alignItems: 'flex-start' }]}>
                <View style={[styles.itemContainer, { backgroundColor: 'lightblue',  marginTop: 10, marginBottom: 10, marginLeft: 10, flex: .1, justifyContent: 'flex-start', alignItems: 'flex-start' }]}>
                    <Image style={{ width: 40, height: 40 }} source={require('../assets/images/profilePic.png')} />
                    <Image style={{ width: 10, height: 10, margin: 5, justifyContent: 'flex-start', alignItems: 'flex-start' }} source={require('../assets/images/pencil.png')} />
                </View>
            </View>
            
            <View style={[styles.rowContainer, { flex: .3, backgroundColor: 'lightblue', alignItems: 'flex-start', justifyContent: 'space-between'}]}>

                {//Personal
                }
                <View style={[styles.roundedContainer, { backgroundColor: 'white', flex: .3, margin: 10, alignItems: 'flex-start', justifyContent: 'flex-start', padding: 5 }]}>
                    <View style={[styles.rowContainer, { backgroundColor: '' }]}>
                        <Text style={{ fontWeight: 'bold' }}>
                            Personal
                          </Text>
                         <Image style={{ width: 10, height: 10, margin: 5 }} source={require('../assets/images/pencil.png')} />
                    </View>
                    <View>
                        <Text>
                            Name
                        </Text>
                    </View>
                    <View>
                        <Text>
                            Username
                        </Text>
                    </View>
                    <View>
                        <Text>
                            Password
                        </Text>
                    </View>
                    <View>
                        <Text>
                            Birthday
                        </Text>
                    </View>
                </View>

                {//Financial
                }
                <View style={[styles.roundedContainer, { backgroundColor: 'white', flex: .4, margin: 10, alignItems: 'flex-start', justifyContent: 'flex-start', padding: 5 }]}>
                    <View style={[styles.rowContainer, { backgroundColor: '' }]}>
                        <Text style={{ fontWeight: 'bold' }}>
                            Financial
                          </Text>
                        <Image style={{ width: 10, height: 10, margin: 5 }} source={require('../assets/images/pencil.png')} />
                    </View>
                    <View>
                        <Text>
                            Source
                        </Text>
                    </View>
                    <View>
                        <Text>
                            History
                        </Text>
                    </View>
                    <View>
                        <Text>
                            Subscriptions
                        </Text>
                    </View>
                    <View>
                        <Text>
                            NutriCoins
                        </Text>
                    </View>
                </View>

            </View>

            <View style={[styles.rowContainer, { flex: .6, backgroundColor: 'lightblue', alignItems: 'flex-start', justifyContent: 'space-between' }]}>

                {//Health Factors
                }
                <View style={[styles.roundedContainer, { backgroundColor: 'white', flex: .4, margin: 10, alignItems: 'flex-start', justifyContent: 'flex-start', padding: 5 }]}>
                    <View style={[styles.rowContainer, { backgroundColor: '' }]}>
                        <Text style={{ fontWeight: 'bold' }}>
                            Age: 68
                          </Text>
                        <Image style={{ width: 10, height: 10, margin: 5 }} source={require('../assets/images/pencil.png')} />
                    </View>
                    <View>
                        <Text>
                            Sex: M
                        </Text>
                    </View>
                    <View>
                        <Text>
                            Weight: 280 lbs
                        </Text>
                    </View>
                    <View>
                        <Text>
                            Height: 5'8''
                        </Text>
                    </View>
                    <View>
                        <Text>
                            Ethnicity: White
                        </Text>
                    </View>
                    <View>
                        <Text>
                            Diet: Vegan
                        </Text>
                    </View>
                    <View>
                        <Text>
                            Health History:
                        </Text>
                        <Text style={{ fontSize: 12 }}>
                            Diabetes
                        </Text>
                        <Text style={{ fontSize: 12 }}>
                            Hypertension
                        </Text>
                    </View>
                </View>

                {//Health Goals
                }
                <View style={[styles.roundedContainer, { backgroundColor: 'white', flex: .6, margin: 10, alignItems: 'flex-start', justifyContent: 'flex-start', padding: 5 }]}>
                    <View style={[styles.rowContainer, { backgroundColor: '' }]}>
                        <Text style={{ fontWeight: 'bold' }}>
                            Health Goals
                          </Text>
                        <Image style={{ width: 10, height: 10, margin: 5 }} source={require('../assets/images/pencil.png')} />
                    </View>
                    <View>
                        <Text>
                            lose 100 lbs
                        </Text>
                    </View>
                    <View>
                        <Text>
                            maintain nutrient health
                        </Text>
                    </View>
                    <View>
                        <Text>
                            walk 2 miles each day
                        </Text>
                    </View>
                    <View>
                        <Text>
                            
                        </Text>
                    </View>
                </View>

            </View>

        </View>
    );
}