import mockerFon from './operations.mock';
import * as complexOperations from './complexOperations';

describe('Problem 2 - Mocked practice', () => {
    describe('checkEmail', () => {
        it('Test for checkEmail - Mock test', () => {
            expect(complexOperations.checkEmail('dario@gmail.com')).toBe('The email is valid');
        });
        it('Second test for checkEmail - Mock test', () => {
            expect(complexOperations.checkEmail('dario@outlook.com')).toContain('valid');
        });
        it('Three test for checkEmail - Mock test', () => {
            expect(complexOperations.checkEmail('test@yahoo.com')).not.toContain('invalid');
        });
    });

    describe('sumGratherThan', () => {
      it('Test for sumGratherThan - Mock test', () => {
          expect(complexOperations.sumGratherThan(70, 7, 9)).toBe('77 is grather than 9');
      });
      it('Second test for sumGratherThan - Mock test', () => {
          expect(complexOperations.sumGratherThan(38, 9, 300)).toBe('77 is less than 300');
      });
    });

    describe ('calculateArea', ()=>{
      it('calculateArea - MOCK FUNCTION - rectangle base of 7 height of 2 area is 14 ', () => {
          expect(complexOperations.calculateArea('rectangle', 7, 2)).toEqual(50);
      });

      it('second test for calculateArea', () => {
          expect(complexOperations.calculateArea('triangle', 4, 10)).toEqual(10);
      });
      it('third test for calculateArea', () => {
          expect(complexOperations.calculateArea('square', 3, 4)).toEqual(50);
      });
    });

    describe('intersectionBetweenArrays', () => {
      it('first test for intersectionBetweenArrays', () => {
        expect(complexOperations.intersectionBetweenArrays([200, 455, 150], [1400, 455, 777])).toStrictEqual([455]);
      });
      it('Correct param - Not equal ok', () => {
        expect(complexOperations.intersectionBetweenArrays([950, 459, 656], [454, 365, 498])).not.toEqual([100]);
      });
    });

    describe('sortArrayOfObjectsByKey', () => {
      it('Test pass for sortArrayOfObjectsByKey', () => {
        expect(complexOperations.sortArrayOfObjectsByKey(
          [{name: 'Carlos'}, {name: 'Michael'}, {name: 'Robert'}],'name'
        )).toEqual([{name: 'Michael'}, {name: 'Carlos'}, {name: 'Robert'}]);
      });
    });

    describe('numberOfOddAndEvenNumbers', () => {
      it('Equal Case - Test for numberOfOddAndEvenNumbers with correct params', () => {
        expect(complexOperations.numberOfOddAndEvenNumbers([11, 9, 30, 14, 7]
        )).toEqual({even: 2, odd: 3});
      });
    });
});