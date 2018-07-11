import React from 'react';
import {StyleSheet, View} from "react-native";

/**
 * Create circle shape
 */
export default CircleView = (props) => (
    <View style={getStyle(props)}/>
);

function getStyle(props) {
    return {
        width: props.radius ? props.radius * 2 : 100,
        height: props.radius ? props.radius * 2 : 100,
        borderRadius: props.radius ? props.radius : 100 / 2,
        backgroundColor: 'red'
    }
}