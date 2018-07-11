import React from 'react';
import {View} from "react-native";

/**
 * Create Square shape
 */
export default SquareView = (props) => (
    <View style={{
        width: props.width ? props.width : 100,
        height: props.height ? props.height : 100,
        backgroundColor: 'red'
    }}/>
);