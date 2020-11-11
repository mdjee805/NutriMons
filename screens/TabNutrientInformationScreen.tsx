import * as React from 'react';
import { StyleSheet, Image, Linking } from 'react-native';

import { Text, View } from '../components/Themed';

import styles from "../assets/styles/styles";

export default function NutrientInformation() {
    return (
        <View style={styles.container}>

            {//Title
            }
            <View style={styles.rowContainer}>
                <Text style={styles.title}>Nutrient Information Screen</Text>
            </View>

            {//Nutritional Facts
            }
            {//calories
            }
            <View style={[styles.rowContainer, infoStyle.tuple]}>
                <View style={[styles.itemContainer, { flex: .05, marginRight: 5 }]}>
                    <Image style={infoStyle.image} source={require('../assets/images/calories.png')} />
                </View>
                <View style={{ flex: .75 }}>
                    <Text>
                        Calories are energy
                    </Text>
                </View>
                <View style={{ flex: .2 }}>
                    <Text style={{ color: 'blue' }} onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Calorie')}>
                        Wikipedia
                    </Text>
                </View>
            </View>

            {//protein
            }
            <View style={[styles.rowContainer, infoStyle.tuple]}>
                <View style={[styles.itemContainer, { flex: .05, marginRight: 5 }]}>
                    <Image style={infoStyle.image} source={require('../assets/images/protein.png')} />
                </View>
                <View style={{ flex: .75 }}>
                    <Text>
                        Proteins are building blocks
                    </Text>
                </View>
                <View style={{ flex: .2 }}>
                    <Text style={{ color: 'blue' }} onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Protein')}>
                        Wikipedia
                    </Text>
                </View>
            </View>

            {//carbs
            }
            <View style={[styles.rowContainer, infoStyle.tuple]}>
                <View style={[styles.itemContainer, { flex: .05, marginRight: 5 }]}>
                    <Image style={infoStyle.image} source={require('../assets/images/carbs.png')} />
                </View>
                <View style={{ flex: .75 }}>
                    <Text>
                        Carbs provide energy
                    </Text>
                </View>
                <View style={{ flex: .2 }}>
                    <Text style={{ color: 'blue' }} onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Carbohydrate')}>
                        Wikipedia
                    </Text>
                </View>
            </View>

            {//sugars
            }
            <View style={[styles.rowContainer, infoStyle.tuple]}>
                <View style={[styles.itemContainer, { flex: .05, marginRight: 5 }]}>
                    <Image style={infoStyle.image} source={require('../assets/images/sugar.png')} />
                </View>
                <View style={{ flex: .75 }}>
                    <Text>
                        Sugar provides only energy
                    </Text>
                </View>
                <View style={{ flex: .2 }}>
                    <Text style={{ color: 'blue' }} onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Sugar')}>
                        Wikipedia
                    </Text>
                </View>
            </View>

            {//fiber
            }
            <View style={[styles.rowContainer, infoStyle.tuple]}>
                <View style={[styles.itemContainer, { flex: .05, marginRight: 5 }]}>
                    <Image style={infoStyle.image} source={require('../assets/images/fibers.png')} />
                </View>
                <View style={{ flex: .75 }}>
                    <Text>
                        Fiber helps with digestion
                    </Text>
                </View>
                <View style={{ flex: .2 }}>
                    <Text style={{ color: 'blue' }} onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Dietary_fiber')}>
                        Wikipedia
                    </Text>
                </View>
            </View>

            {//fats
            }
            <View style={[styles.rowContainer, infoStyle.tuple]}>
                <View style={[styles.itemContainer, { flex: .05, marginRight: 5 }]}>
                    <Image style={infoStyle.image} source={require('../assets/images/fats.jpg')} />
                </View>
                <View style={{ flex: .75 }}>
                    <Text>
                        Carbs provide energy
                    </Text>
                </View>
                <View style={{ flex: .2 }}>
                    <Text style={{ color: 'blue' }} onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Fat')}>
                        Wikipedia
                    </Text>
                </View>
            </View>

            {//cholesterol
            }
            <View style={[styles.rowContainer, infoStyle.tuple]}>
                <View style={[styles.itemContainer, { flex: .05, marginRight: 5 }]}>
                    <Image style={infoStyle.image} source={require('../assets/images/cholesterol.png')} />
                </View>
                <View style={{ flex: .75 }}>
                    <Text>
                        Cholesterol gives structure to cells
                    </Text>
                </View>
                <View style={{ flex: .2 }}>
                    <Text style={{ color: 'blue' }} onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Cholesterol')}>
                        Wikipedia
                    </Text>
                </View>
            </View>

            {//sat fat
            }
            <View style={[styles.rowContainer, infoStyle.tuple]}>
                <View style={[styles.itemContainer, { flex: .05, marginRight: 5 }]}>
                    <Image style={infoStyle.image} source={require('../assets/images/saturatedFat.jpg')} />
                </View>
                <View style={{ flex: .75 }}>
                    <Text>
                        Saturated fats are solid
                    </Text>
                </View>
                <View style={{ flex: .2 }}>
                    <Text style={{ color: 'blue' }} onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Fat#Saturated_and_unsaturated_fats')}>
                        Wikipedia
                    </Text>
                </View>
            </View>

            {//unsat fat
            }
            <View style={[styles.rowContainer, infoStyle.tuple]}>
                <View style={[styles.itemContainer, { flex: .05, marginRight: 5 }]}>
                    <Image style={infoStyle.image} source={require('../assets/images/unsaturatedFat.png')} />
                </View>
                <View style={{ flex: .75 }}>
                    <Text>
                        Unsaturated fats are liquid
                    </Text>
                </View>
                <View style={{ flex: .2 }}>
                    <Text style={{ color: 'blue' }} onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Fat#Saturated_and_unsaturated_fats')}>
                        Wikipedia
                    </Text>
                </View>
            </View>

            {//trans fat
            }
            <View style={[styles.rowContainer, infoStyle.tuple]}>
                <View style={[styles.itemContainer, { flex: .05, marginRight: 5 }]}>
                    <Image style={infoStyle.image} source={require('../assets/images/transFat.jpg')} />
                </View>
                <View style={{ flex: .75 }}>
                    <Text>
                        Trans fats are unsaturated fats converted to saturated
                    </Text>
                </View>
                <View style={{ flex: .2 }}>
                    <Text style={{ color: 'blue' }} onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Fat#Cis_and_trans_fats')}>
                        Wikipedia
                    </Text>
                </View>
            </View>

            {//vit a
            }
            <View style={[styles.rowContainer, infoStyle.tuple]}>
                <View style={[styles.itemContainer, { flex: .05, marginRight: 5 }]}>
                    <Image style={infoStyle.image} source={require('../assets/images/vitA.jpg')} />
                </View>
                <View style={{ flex: .75 }}>
                    <Text>
                        Vitamin A is for growth, immune system, and vision
                    </Text>
                </View>
                <View style={{ flex: .2 }}>
                    <Text style={{ color: 'blue' }} onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Vitamin_A')}>
                        Wikipedia
                    </Text>
                </View>
            </View>

            {//vit c
            }
            <View style={[styles.rowContainer, infoStyle.tuple]}>
                <View style={[styles.itemContainer, { flex: .05, marginRight: 5 }]}>
                    <Image style={infoStyle.image} source={require('../assets/images/vitC.jpg')} />
                </View>
                <View style={{ flex: .75 }}>
                    <Text>
                        Vitamin C is for tissue and enzyme repair and the immune system
                    </Text>
                </View>
                <View style={{ flex: .2 }}>
                    <Text style={{ color: 'blue' }} onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Vitamin_C')}>
                        Wikipedia
                    </Text>
                </View>
            </View>

            {//vit d
            }
            <View style={[styles.rowContainer, infoStyle.tuple]}>
                <View style={[styles.itemContainer, { flex: .05, marginRight: 5 }]}>
                    <Image style={infoStyle.image} source={require('../assets/images/vitD.jpg')} />
                </View>
                <View style={{ flex: .75 }}>
                    <Text>
                        Vitamin D essential for absorbing calcium, magnesium, and phosphates
                    </Text>
                </View>
                <View style={{ flex: .2 }}>
                    <Text style={{ color: 'blue' }} onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Vitamin_D')}>
                        Wikipedia
                    </Text>
                </View>
            </View>

            {//sodium
            }
            <View style={[styles.rowContainer, infoStyle.tuple]}>
                <View style={[styles.itemContainer, { flex: .05, marginRight: 5 }]}>
                    <Image style={infoStyle.image} source={require('../assets/images/sodium.png')} />
                </View>
                <View style={{ flex: .75 }}>
                    <Text>
                        Sodium is used to send signal throughout the body and manage blood pressure
                    </Text>
                </View>
                <View style={{ flex: .2 }}>
                    <Text style={{ color: 'blue' }} onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Sodium#Biological_role')}>
                        Wikipedia
                    </Text>
                </View>
            </View>

            {//potassium
            }
            <View style={[styles.rowContainer, infoStyle.tuple]}>
                <View style={[styles.itemContainer, { flex: .05, marginRight: 5 }]}>
                    <Image style={infoStyle.image} source={require('../assets/images/carbs.png')} />
                </View>
                <View style={{ flex: .75 }}>
                    <Text>
                        Potassium is also used to send signals in the body
                    </Text>
                </View>
                <View style={{ flex: .2 }}>
                    <Text style={{ color: 'blue' }} onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Potassium#Biological_role')}>
                        Wikipedia
                    </Text>
                </View>
            </View>

            {//calcium
            }
            <View style={[styles.rowContainer, infoStyle.tuple]}>
                <View style={[styles.itemContainer, { flex: .05, marginRight: 5 }]}>
                    <Image style={infoStyle.image} source={require('../assets/images/potassium.png')} />
                </View>
                <View style={{ flex: .75 }}>
                    <Text>
                        Calcium is also used to send signals in the body
                    </Text>
                </View>
                <View style={{ flex: .2 }}>
                    <Text style={{ color: 'blue' }} onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Calcium#Biological_and_pathological_role')}>
                        Wikipedia
                    </Text>
                </View>
            </View>

            {//iron
            }
            <View style={[styles.rowContainer, infoStyle.tuple]}>
                <View style={[styles.itemContainer, { flex: .05, marginRight: 5 }]}>
                    <Image style={infoStyle.image} source={require('../assets/images/iron.jpg')} />
                </View>
                <View style={{ flex: .75 }}>
                    <Text>
                        Iron is used to transport Oxygen
                    </Text>
                </View>
                <View style={{ flex: .2 }}>
                    <Text style={{ color: 'blue' }} onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Iron#Biochemistry')}>
                        Wikipedia
                    </Text>
                </View>
            </View>

        </View>
    );
}

const infoStyle = StyleSheet.create({
    tuple: {
        margin: 4,
        flex: 1 / 20
    },
    image: {
        width: 20,
        height: 20,
        flex: 1,
        resizeMode: 'stretch'
    }
});