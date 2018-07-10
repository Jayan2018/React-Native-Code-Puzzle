import React from 'react';
import {View} from "react-native";

export default HexagonView = (props) => (
    <View style={getHexagonStyle(props)}>
        <View style={getHexagonInnerStyle(props)}/>
        <View style={getHexagonBeforeStyle(props)}/>
        <View style={getHexagonAfterStyle(props)}/>
    </View>
);

function getHexagonStyle(props) {
    return {
        width: props.height ? props.height : 50,
        height: props.height ? props.height : 50,
    }
}

function getHexagonInnerStyle(props) {
    return {
        width: props.height ? props.height * 2 : 50,
        height: props.height ? props.height : 50,
        top: props.height ? props.height / 2 : 50,
        left: props.height ? -props.height / 2 : 50,
        backgroundColor: 'red'
    }
}

function getHexagonBeforeStyle(props) {
    return {
        position: 'absolute',
        top: 0,
        left: props.height ? -props.height / 2 : 50,
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderLeftWidth: props.height ? props.height : 50,
        borderLeftColor: 'transparent',
        borderRightWidth: props.height ? props.height : 50,
        borderRightColor: 'transparent',
        borderBottomWidth: props.height ? props.height / 2 : 50,
        borderBottomColor: 'red'
    }
}

function getHexagonAfterStyle(props) {
    return {
        position: 'absolute',
        bottom: props.height ? -props.height : 50,
        left: props.height ? -props.height / 2 : 50,
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderLeftWidth: props.height ? props.height : 50,
        borderLeftColor: 'transparent',
        borderRightWidth: props.height ? props.height : 50,
        borderRightColor: 'transparent',
        borderTopWidth: props.height ? props.height / 2 : 50,
        borderTopColor: 'red'
    }
}