import React from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import {Header} from 'react-native-elements'
import {Square, Triangle, Parallelogram, Circle, Pentagon, Hexagon, Octagon, Oval} from './app/components';
import {findTheShape} from "./app/functions";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            text: '',
            shape: null,
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <Header
                    centerComponent={{text: 'Code Puzzle', style: {color: '#fff', fontSize: 20}}}
                    outerContainerStyles={{width: '100%', height: 80, backgroundColor: '#ff5941'}}
                />
                <View style={{padding: 10, marginTop: 10, alignItems: 'center'}}>
                    <View style={{padding: 10, backgroundColor: '#c1c1c1'}}>
                        <Text style={{textAlign: 'center'}}>Hint:
                            {' Draw a(n) <shape> with a(n) <measurement> of <amount> (and a(n) <measurement> of <amount>) '}
                        </Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
                        <TextInput
                            style={{
                                height: 40,
                                borderColor: 'gray',
                                borderWidth: 1,
                                width: '60%',
                                marginRight: 5,
                                padding: 10
                            }}
                            underlineColorAndroid='transparent'
                            onChangeText={(text) => this.setState({text})}
                            value={this.state.text}
                        />
                        <Button
                            onPress={() => this.handleDrawButtonClick()}
                            title="Draw"
                            color={'#ff5941'}
                        />
                    </View>
                    <View style={{marginTop: 10}}>
                        {
                            this.state.shape
                                ? this.renderShape()
                                : <Text style={{color: '#ff5941'}}>
                                    Generate shapes with your natural language
                                </Text>
                        }
                    </View>
                </View>
            </View>
        );
    }

    /**
     * Draw shapes based on user input
     * @returns {*}
     */
    renderShape() {
        const shape = this.state.shape;
        switch (shape.id) {
            case 0:
                return (
                    <Square width={shape.length ? shape.length : shape.width}
                            height={shape.length ? shape.length : shape.width}/>
                );
                break;
            case 1:
                return (
                    <Triangle prefix={shape.prefix}
                              width={shape.width}
                              height={shape.height}/>
                );
                break;
            case 2:
                return (
                    <Parallelogram width={shape.width}
                                   height={shape.height}/>
                );
                break;
            case 3:
                return (
                    <Circle radius={shape.radius}/>
                );
                break;
            case 4:
                return (
                    <Pentagon height={shape.height}/>
                );
                break;
            case 5:
                return (
                    <Square width={shape.width}
                            height={shape.height}/>
                );
                break;
            case 6:
                return (
                    <Hexagon height={shape.height}/>
                );
                break;
            case 7:
                return (
                    <Text>{'Heptagon currently not available'}</Text>
                );
                break;
            case 8:
                return (
                    <Octagon height={shape.length ? shape.length : shape.width}/>
                );
                break;
            case 9:
                return (
                    <Oval width={shape.width}
                          height={shape.height}/>
                );
                break;
            case 20:
                return (
                    <Text>{this.state.shape.message}</Text>
                );
                break;
        }
    }

    handleDrawButtonClick() {
        let result = findTheShape(this.state.text);
        this.setState({shape: result});
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFF',
    },
    square: {
        width: 100,
        height: 100,
        backgroundColor: 'red'
    }
});
