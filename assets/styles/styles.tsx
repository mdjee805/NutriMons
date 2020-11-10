import * as React from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column', 
        justifyContent: 'space-around'
    },
    rowContainer: { //add a flex
        flexDirection: 'row', //children placed in a row
        justifyContent: 'space-around', //main axis (row here)
        alignItems: 'center' //cross axis (column here)
    },
    itemContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "lightblue"
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%'
    },

    minhsContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    bluebox: {
        flex: .1,
        backgroundColor: 'blue'
    },
    graphTitle: {
        fontSize: 30,
        fontWeight: 'normal'
    },
});
