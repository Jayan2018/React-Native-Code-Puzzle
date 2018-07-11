import React from 'react';
import {View} from "react-native";

/**
 * Create Square shape
 */
const SquareView = (props) => (
    <View style={{
        width: props.width ? props.width : 100,
        height: props.height ? props.height : 100,
        backgroundColor: 'red'
    }}/>
);

export default SquareView;