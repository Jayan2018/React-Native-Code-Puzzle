import React from 'react';
import {View, StyleSheet} from "react-native";

/**
 * Triangle to draw other shapes
 */
export default SupportTriangle = (props) => (
    <View style={[styles.triangle, props.style]}/>
);

const styles = StyleSheet.create({
    triangle: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 50,
        borderRightWidth: 50,
        borderBottomWidth: 100,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: 'red'
    }
});