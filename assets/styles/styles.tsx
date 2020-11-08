import * as React from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    body: {
        flex: .8,
        flexDirection: 'row',
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

    minhsContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    bluebox: {
        flex: .1,
        backgroundColor: 'blue'
    },
    graphTitle: {
        fontSize: 30,
        fontWeight: 'normal',
    },

    
   
});