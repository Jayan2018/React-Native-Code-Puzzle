import React from 'react';
import {View} from "react-native";

export default PentagonView = (props) => (
    <View style={getPentagonStyle(props)}>
        <View style={getPentagonInnerStyle(props)}/>
        <View style={getPentagonBeforeStyle(props)}/>
    </View>
);

function getPentagonStyle(props) {
    return {
        width: props.height ? props.height : 100,
        height: props.height ? props.height : 100,
        backgroundColor: 'transparent'
    }
}

function getPentagonInnerStyle(props) {
    return {
        width: props.height ? props.height : 90,
        top: props.height ? props.height / 2 : 90,
        borderBottomColor: 'red',
        borderBottomWidth: 0,
        borderLeftColor: 'transparent',
        borderLeftWidth: props.height ? props.height / 2 : 45,
        borderRightColor: 'transparent',
        borderRightWidth: props.height ? props.height / 2 : 45,
        borderTopColor: 'red',
        borderTopWidth: props.height ? props.height : 90,
    }
}

function getPentagonBeforeStyle(props) {
    return {
        position: 'absolute',
        height: 0,
        width: 0,
        top: 0,
        left: 0,
        borderStyle: 'solid',
        borderBottomColor: 'red',
        borderBottomWidth: props.height ? props.height / 2 : 45,
        borderLeftColor: 'transparent',
        borderLeftWidth: props.height ? props.height / 2 : 45,
        borderRightColor: 'transparent',
        borderRightWidth: props.height ? props.height / 2 : 45,
        borderTopWidth: 0,
        borderTopColor: 'transparent',
    }
}