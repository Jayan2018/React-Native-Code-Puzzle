import React from 'react';
import {StyleSheet, View} from "react-native";

/**
 * Create Octagon shape
 */
const OctagonView = (props) => (
    <View style={styles.octagon}>
        <View style={[styles.octagonUp, getOctagonBarStyle(props)]}/>
        <View style={[styles.octagonFlat, getOctagonBarStyle(props)]}/>
        <View style={[styles.octagonLeft, getOctagonBarStyle(props)]}/>
        <View style={[styles.octagonRight, getOctagonBarStyle(props)]}/>
    </View>
);

function getOctagonBarStyle(props) {
    return {
        width: props.height ? (props.height / 100) * 42 : 42,
        height: props.height ? props.height : 100,
        backgroundColor: 'red'
    }
}

const styles = StyleSheet.create({
    octagon: {},
    octagonUp: {},
    octagonFlat: {
        position: 'absolute',
        top: 0,
        left: 0,
        transform: [
            {rotate: '90deg'}
        ]
    },
    octagonLeft: {
        position: 'absolute',
        top: 0,
        left: 0,
        transform: [
            {rotate: '-45deg'}
        ]
    },
    octagonRight: {
        position: 'absolute',
        top: 0,
        left: 0,
        transform: [
            {rotate: '45deg'}
        ]
    }
});

export default OctagonView;