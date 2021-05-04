import 'jest';
let isNumber = jest.fn().mockReturnValue(true);
let isArray = jest.fn().mockReturnValue(true);
let isString = jest.fn().mockReturnValue(true);
let validateEmail = jest.fn().mockReturnValue(true);
let sum = jest.fn().mockReturnValue(77);
let multip = jest.fn().mockReturnValue(50);
let division = jest.fn().mockReturnValue(10);
let exponent = jest.fn().mockReturnValue(8);
let isSupportedFigure = jest.fn().mockReturnValue(true);
let arrayElementsAreObjectWithKey = jest.fn().mockReturnValue(true);
let arrayIntersection = jest.fn().mockReturnValue([455]);
let sortArrayByKey = jest.fn().mockReturnValue([{ name: 'Michael' }, { name: 'Carlos' }, { name: 'Robert' }], 'name');
let getEvenNumbersFromArray = jest.fn().mockReturnValue([11, 9]);
let getOddNumbersFromArray = jest.fn().mockReturnValue([30, 14, 7]);

const mockerFon = jest.mock('./basicOperations', () => {
    return {
        sum,
        isNumber,
        isNumber,
        isArray,
        isString,
        validateEmail,
        multip,
        division,
        exponent,
        isSupportedFigure,
        arrayElementsAreObjectWithKey,
        arrayIntersection,
        sortArrayByKey,
        getEvenNumbersFromArray,
        getOddNumbersFromArray,
    };
});

export default mockerFon;