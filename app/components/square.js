import React from 'react';
import {View} from "react-native";

export default SquareView = (props) => (
    <View style={{
        width: props.width ? props.width : 100,
        height: props.height ? props.height : 100,
        backgroundColor: 'red'
    }}/>
);

// import React from 'react';
// import {ART} from 'react-native';
//
// const Square = (props) => {
//     const square = ART.Path()
//         .move(props.width, 0)
//         .line(props.width, 0)
//         .line(0, props.width)
//         .line(-props.width, 0)
//         .close();
//
//     return (
//         <ART.Surface width={props.width} height={props.width}>
//             <ART.Group x={-props.width} y={0}>
//                 <ART.Shape d={square} fill={'#2cff5c'}/>
//             </ART.Group>
//         </ART.Surface>
//     );
// };
//
// export default Square;