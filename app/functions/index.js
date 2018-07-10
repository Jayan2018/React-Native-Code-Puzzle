import {forEach, find} from 'lodash'

const measurement = ['radius', 'length', 'width', 'height'];
const triPrefix = ['isosceles', 'equilateral', 'scalene'];
const shapeError = {id: 20, message: 'Shape not found'};
const measurementError = {id: 20, message: 'Measurement not found'};

export const findTheShape = (text) => {
    if (!text) return '';
    return findShape(text);
};

function findShape(text) {
    const shapes = [{id: 0, shape: 'square'}, {id: 1, shape: 'triangle'}, {id: 2, shape: 'parallelogram'},
        {id: 3, shape: 'circle'}, {id: 4, shape: 'pentagon'}, {id: 5, shape: 'rectangle'}, {id: 6, shape: 'hexagon'},
        {id: 7, shape: 'heptagon'}, {id: 8, shape: 'octagon'}, {id: 9, shape: 'oval'}];

    const lowerText = text.toLowerCase();
    const array = lowerText.split(" ");
    let shapeData = findShapeData(array, shapes);

    if (shapeData.length) {
        let shape = {};
        shape = shapeData.length ? shapeData[0] : shapeError;
        let measurementData = findMeasurementData(array, measurement);
        let measurementValue = array.filter(function (element) {
            return element >= 0;
        });

        if (measurementData.length && measurementValue.length) {
            measurementData.map((value, index) => {
                shape[value] = measurementValue[index] ? parseInt(measurementValue[index]) : 0;
                if (shape.id === 1) {
                    let prefixData = findMeasurementData(array, triPrefix);
                    shape.prefix = prefixData.length ? prefixData[0] : null;
                }
            });
            return shape;
        } else {
            return measurementError;
        }
    } else {
        return shapeError;
    }
}

function findShapeData(array1, array2) {
    let returnData = [];
    forEach(array1, function (value, key) {
        let data = find(array2, function (o) {
            return o.shape === value;
        });
        if (data) {
            returnData.push(data);
        }
    });
    return returnData;
}

function findMeasurementData(array1, array2) {
    let returnData = [];
    forEach(array1, function (value, key) {
        let data = find(array2, function (o) {
            return o === value;
        });
        if (data) {
            returnData.push(data);
        }
    });
    return returnData;
}