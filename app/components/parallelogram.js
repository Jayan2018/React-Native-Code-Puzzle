import React from 'react';
import {View} from "react-native";
import TriangleView from "./support";

export default ParallelogramView = (props) => (
    <View style={getParallelogramStyle(props)}>
        <TriangleView style={getParallelogramRightStyle(props)}/>
        <View style={getParallelogramInnerStyle(props)}/>
        <TriangleView style={getParallelogramLeftStyle(props)}/>
    </View>
);

function getParallelogramStyle(props) {
    return {
        width: props.width ? props.width : 150,
        height: props.height ? props.height : 100,
    }
}

function getParallelogramInnerStyle(props) {
    return {
        position: 'absolute',
        left: 0,
        top: 0,
        backgroundColor: 'red',
        width: props.width ? props.width : 150,
        height: props.height ? props.height : 100,
    }
}

function getParallelogramRightStyle(props) {
    return {
        borderBottomWidth: props.height ? props.height : 100,
        borderLeftWidth: props.width ? props.width / 2 : 50,
        borderRightWidth: props.width ? props.width / 2 : 50,
        top: 0,
        right: -(props.width / 2),
        position: 'absolute'
    }
}

function getParallelogramLeftStyle(props) {
    return {
        borderBottomWidth: props.height ? props.height : 100,
        borderLeftWidth: props.width ? props.width / 2 : 50,
        borderRightWidth: props.width ? props.width / 2 : 50,
        transform: [
            {rotate: '180deg'}
        ],
        top: 0,
        left: -(props.width / 2),
        position: 'absolute'
    }
}