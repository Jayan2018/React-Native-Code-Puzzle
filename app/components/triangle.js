import React from 'react';
import {View, StyleSheet} from "react-native";

/**
 * Create Triangle shape
 */
export default TriangleView = (props) => (

    <View style={
        props.prefix === 'isosceles' ? getIsoscelesStyle(props)
            : props.prefix === 'scalene' ? getScaleneStyle(props)
            : props.prefix === 'equilateral' ? getEquilateralStyle(props) : getEquilateralStyle(props)
    }/>
);

function getIsoscelesStyle(props) {
    // console.log(Math.sqrt((props.height * props.height) + (props.width * props.width) / 4));
    return {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: props.width ? props.width / 2 : 50,
        borderRightWidth: props.width ? props.width / 2 : 50,
        borderBottomWidth: props.height ? props.height : 100,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: 'red'
    }
}

function getScaleneStyle(props) {
    return {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: props.height ? props.height : 50,
        borderRightWidth: props.width ? props.width : 60,
        borderBottomWidth: props.height ? props.height : 70,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: 'red'
    }
}

function getEquilateralStyle(props) {
    return {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: props.height ? props.height : 50,
        borderRightWidth: props.height ? props.height : 50,
        borderBottomWidth: props.height ? props.height : 50,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: 'red'
    }
}