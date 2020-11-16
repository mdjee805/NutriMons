import * as React from 'react';
import { StyleSheet, Image, Linking } from 'react-native';

import { Text, View } from '../components/Themed';

import styles from "../assets/styles/styles";

export default function NutrientInformation() {
    return (
        <View style={[styles.roundedContainer, { margin: 0, padding: 5 }]}>

            {//Title
            }
            <View style={[styles.rowContainer, { backgroundColor: '#ffa514' }]}>
                <Text style={styles.title}>Nutrient Information Screen</Text>
            </View>

            {//Nutritional Facts
            }
            {//calories
            }
            <View style={[styles.rowContainer, infoStyle.tuple]}>
                <View style={[styles.itemContainer, infoStyle.containerImage]}>
                    <Image style={infoStyle.image} source={require('../assets/images/calories.png')} />
                </View>
                <View style={infoStyle.containerDescription}>
                    <Text>
                        Calories: energy
                    </Text>
                </View>
                <View style={infoStyle.containerLink}>
                    <Text style={{ color: 'blue' }} onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Calorie')}>
                        Wikipedia
                    </Text>
                </View>
            </View>

            {//protein
            }
            <View style={[styles.rowContainer, infoStyle.tuple]}>
                <View style={[styles.itemContainer, infoStyle.containerImage]}>
                    <Image style={infoStyle.image} source={require('../assets/images/protein.png')} />
                </View>
                <View style={infoStyle.containerDescription}>
                    <Text>
                        Proteins: building blocks
                    </Text>
                </View>
                <View style={infoStyle.containerLink}>
                    <Text style={{ color: 'blue' }} onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Protein')}>
                        Wikipedia
                    </Text>
                </View>
            </View>

            {//carbs
            }
            <View style={[styles.rowContainer, infoStyle.tuple]}>
                <View style={[styles.itemContainer, infoStyle.containerImage]}>
                    <Image style={infoStyle.image} source={require('../assets/images/carbs.png')} />
                </View>
                <View style={infoStyle.containerDescription}>
                    <Text>
                        Carbs: energy
                    </Text>
                </View>
                <View style={infoStyle.containerLink}>
                    <Text style={{ color: 'blue' }} onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Carbohydrate')}>
                        Wikipedia
                    </Text>
                </View>
            </View>

            {//sugars
            }
            <View style={[styles.rowContainer, infoStyle.tuple]}>
                <View style={[styles.itemContainer, infoStyle.containerImage, { backgroundColor: 'white' }]}>
                    <Image style={infoStyle.image} source={require('../assets/images/sugar.png')} />
                </View>
                <View style={infoStyle.containerDescription}>
                    <Text>
                        Sugar: only energy
                    </Text>
                </View>
                <View style={infoStyle.containerLink}>
                    <Text style={{ color: 'blue' }} onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Sugar')}>
                        Wikipedia
                    </Text>
                </View>
            </View>

            {//fiber
            }
            <View style={[styles.rowContainer, infoStyle.tuple]}>
                <View style={[styles.itemContainer, infoStyle.containerImage]}>
                    <Image style={infoStyle.image} source={require('../assets/images/fibers.png')} />
                </View>
                <View style={infoStyle.containerDescription}>
                    <Text>
                        Fiber: helps with digestion
                    </Text>
                </View>
                <View style={infoStyle.containerLink}>
                    <Text style={{ color: 'blue' }} onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Dietary_fiber')}>
                        Wikipedia
                    </Text>
                </View>
            </View>

            {//fats
            }
            <View style={[styles.rowContainer, infoStyle.tuple]}>
                <View style={[styles.itemContainer, infoStyle.containerImage]}>
                    <Image style={infoStyle.image} source={require('../assets/images/fats.jpg')} />
                </View>
                <View style={infoStyle.containerDescription}>
                    <Text>
                        Fats: provide energy
                    </Text>
                </View>
                <View style={infoStyle.containerLink}>
                    <Text style={{ color: 'blue' }} onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Fat')}>
                        Wikipedia
                    </Text>
                </View>
            </View>

            {//cholesterol
            }
            <View style={[styles.rowContainer, infoStyle.tuple]}>
                <View style={[styles.itemContainer, infoStyle.containerImage]}>
                    <Image style={infoStyle.image} source={require('../assets/images/cholesterol.png')} />
                </View>
                <View style={infoStyle.containerDescription}>
                    <Text>
                        Cholesterol: gives structure to cells
                    </Text>
                </View>
                <View style={infoStyle.containerLink}>
                    <Text style={{ color: 'blue' }} onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Cholesterol')}>
                        Wikipedia
                    </Text>
                </View>
            </View>

            {//sat fat
            }
            <View style={[styles.rowContainer, infoStyle.tuple]}>
                <View style={[styles.itemContainer, infoStyle.containerImage]}>
                    <Image style={infoStyle.image} source={require('../assets/images/saturatedFat.jpg')} />
                </View>
                <View style={infoStyle.containerDescription}>
                    <Text>
                        Saturated fats: solid
                    </Text>
                </View>
                <View style={infoStyle.containerLink}>
                    <Text style={{ color: 'blue' }} onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Fat#Saturated_and_unsaturated_fats')}>
                        Wikipedia
                    </Text>
                </View>
            </View>

            {//unsat fat
            }
            <View style={[styles.rowContainer, infoStyle.tuple]}>
                <View style={[styles.itemContainer, infoStyle.containerImage]}>
                    <Image style={infoStyle.image} source={require('../assets/images/unsaturatedFat.png')} />
                </View>
                <View style={infoStyle.containerDescription}>
                    <Text>
                        Unsaturated fats: liquid
                    </Text>
                </View>
                <View style={infoStyle.containerLink}>
                    <Text style={{ color: 'blue' }} onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Fat#Saturated_and_unsaturated_fats')}>
                        Wikipedia
                    </Text>
                </View>
            </View>

            {//trans fat
            }
            <View style={[styles.rowContainer, infoStyle.tuple]}>
                <View style={[styles.itemContainer, infoStyle.containerImage]}>
                    <Image style={infoStyle.image} source={require('../assets/images/transFat.jpg')} />
                </View>
                <View style={infoStyle.containerDescription}>
                    <Text>
                        Trans fats: converted saturated fats
                    </Text>
                </View>
                <View style={infoStyle.containerLink}>
                    <Text style={{ color: 'blue' }} onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Fat#Cis_and_trans_fats')}>
                        Wikipedia
                    </Text>
                </View>
            </View>

            {//vit a
            }
            <View style={[styles.rowContainer, infoStyle.tuple]}>
                <View style={[styles.itemContainer, infoStyle.containerImage]}>
                    <Image style={infoStyle.image} source={require('../assets/images/vitA.jpg')} />
                </View>
                <View style={infoStyle.containerDescription}>
                    <Text>
                        Vitamin A: aids growth & vision
                    </Text>
                </View>
                <View style={infoStyle.containerLink}>
                    <Text style={{ color: 'blue' }} onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Vitamin_A')}>
                        Wikipedia
                    </Text>
                </View>
            </View>

            {//vit c
            }
            <View style={[styles.rowContainer, infoStyle.tuple]}>
                <View style={[styles.itemContainer, infoStyle.containerImage]}>
                    <Image style={infoStyle.image} source={require('../assets/images/vitC.jpg')} />
                </View>
                <View style={infoStyle.containerDescription}>
                    <Text>
                        Vitamin C: repairs & immune system
                    </Text>
                </View>
                <View style={infoStyle.containerLink}>
                    <Text style={{ color: 'blue' }} onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Vitamin_C')}>
                        Wikipedia
                    </Text>
                </View>
            </View>

            {//vit d
            }
            <View style={[styles.rowContainer, infoStyle.tuple]}>
                <View style={[styles.itemContainer, infoStyle.containerImage]}>
                    <Image style={infoStyle.image} source={require('../assets/images/vitD.jpg')} />
                </View>
                <View style={infoStyle.containerDescription}>
                    <Text>
                        Vitamin D: helps absorb minerals
                    </Text>
                </View>
                <View style={infoStyle.containerLink}>
                    <Text style={{ color: 'blue' }} onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Vitamin_D')}>
                        Wikipedia
                    </Text>
                </View>
            </View>

            {//sodium
            }
            <View style={[styles.rowContainer, infoStyle.tuple]}>
                <View style={[styles.itemContainer, infoStyle.containerImage, { backgroundColor: 'white' } ]}>
                    <Image style={infoStyle.image} source={require('../assets/images/sodium.png')} />
                </View>
                <View style={infoStyle.containerDescription}>
                    <Text>
                        Sodium: blood pressure regulation
                    </Text>
                </View>
                <View style={infoStyle.containerLink}>
                    <Text style={{ color: 'blue' }} onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Sodium#Biological_role')}>
                        Wikipedia
                    </Text>
                </View>
            </View>

            {//potassium
            }
            <View style={[styles.rowContainer, infoStyle.tuple]}>
                <View style={[styles.itemContainer, infoStyle.containerImage ]}>
                    <Image style={infoStyle.image} source={require('../assets/images/carbs.png')} />
                </View>
                <View style={infoStyle.containerDescription}>
                    <Text>
                        Potassium: sends signals in body
                    </Text>
                </View>
                <View style={infoStyle.containerLink}>
                    <Text style={{ color: 'blue' }} onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Potassium#Biological_role')}>
                        Wikipedia
                    </Text>
                </View>
            </View>

            {//calcium
            }
            <View style={[styles.rowContainer, infoStyle.tuple]}>
                <View style={[styles.itemContainer, infoStyle.containerImage ]}>
                    <Image style={infoStyle.image} source={require('../assets/images/calcium.jpg')} />
                </View>
                <View style={infoStyle.containerDescription}>
                    <Text>
                        Calcium: sends signals in body
                    </Text>
                </View>
                <View style={infoStyle.containerLink}>
                    <Text style={{ color: 'blue' }} onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Calcium#Biological_and_pathological_role')}>
                        Wikipedia
                    </Text>
                </View>
            </View>

            {//iron
            }
            <View style={[styles.rowContainer, infoStyle.tuple]}>
                <View style={[styles.itemContainer, infoStyle.containerImage ]}>
                    <Image style={infoStyle.image} source={require('../assets/images/iron.jpg')} />
                </View>
                <View style={infoStyle.containerDescription}>
                    <Text>
                        Iron: transports Oxygen
                    </Text>
                </View>
                <View style={infoStyle.containerLink}>
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
    containerImage: {
        flex: .05,
    },
    containerDescription: {
        flex: .75
    },
    containerLink: {
        flex: .2
    },
    image: {
        width: 20,
        height: 20,
        flex: 1,
        resizeMode: 'stretch'
    }
});