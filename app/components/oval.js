import React from 'react';
import Svg, {Ellipse,} from 'react-native-svg';

/**
 * Create Oval shape
 */
export default OvalView = (props) => (
    <Svg height={props.height}
         width={props.width}>
        <Ellipse cx={props.width / 2}
                 cy={props.height / 2}
                 rx={props.width / 2}
                 ry={props.height / 2}
                 fill="red"/>
    </Svg>
);