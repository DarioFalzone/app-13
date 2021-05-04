import 'jest';
import * as complexOperations from './complexOperations';

describe('complexOperation - Unit Tests', () => {
  describe('checkEmail', () => {
    // PASS
    it('Test - Correct format of email', () => {
      expect(complexOperations.checkEmail('darioefalzone95@gmail.com')).toBe('The email is valid');
    });

    // NOT PASS
    it('Test - for empty email', () => {
      expect(complexOperations.checkEmail()).toBe('The email should be an string');
    })

    it('Test - for empty string', () => {
      expect(complexOperations.checkEmail('')).toBe('The email should be an string');
    })

    it('Test - for only number', () => {
      expect(complexOperations.checkEmail(42)).toBe('The email should be an string');
    })

    it('Test - for only number', () => {
      expect(complexOperations.checkEmail('dario95.gmail')).toBe('The email is invalid');
    })

    it('Test - for only number', () => {
      expect(complexOperations.checkEmail('@')).toBe('The email is invalid');
    })

    it('Test - for', () => {
      expect(complexOperations.checkEmail('@.com')).toBe('The email is invalid');
    })

    it('Test - for', () => {
      expect(complexOperations.checkEmail('dario.com.ar')).toBe('The email is invalid');
    })

    it('Test - for', () => {
      expect(complexOperations.checkEmail('dario95@.com')).toBe('The email is invalid');
    })
  });

  describe('calculateArea', () => {
    // PASS
    it('Square - CalculateArea ok', () => {
      expect(complexOperations.calculateArea('square', 3, 4)).toEqual(12);
    })

    it('Triangle - CalculateArea ok', () => {
        expect(complexOperations.calculateArea('triangle', 4, 10)).toEqual(20);
    })

    it('Circle - CalculateArea ok', () => {
        expect(complexOperations.calculateArea('circle', 80, 20)).toBeCloseTo(20106.192982974677);
    })

    it('Rectangle - CalculateArea ok', () => {
      expect(complexOperations.calculateArea('rectangle', 7, 2)).toEqual(14);
    })

    // NOT PASS
    it('Test for undefined figure', () => {
      expect(complexOperations.calculateArea()).toBe('undefined is not supported');

    });

    it('Test for first wrong measurements', () => {
      expect(complexOperations.calculateArea('square', 'elefant', 30)).toBe('number1 and number2 should be numbers');
    });

    it('Test for first wrong measurements', () => {
      expect(complexOperations.calculateArea('rectangle', 'juan', 'carlos')).toBe('number1 and number2 should be numbers');
    });
  });

  describe('sumGratherThan', () => {
    // NOT PASS
    it('Test wrong - Params incorrect', () => {
      expect(complexOperations.sumGratherThan('dario', 2, 5))
      .toBe('The params should be numbers');
    });

    it('Test wrong - Params incorrect', () => {
      expect(complexOperations.sumGratherThan())
      .toBe('The params should be numbers');
    });

    // PASS
    it('Test with real params', () => {
      expect(complexOperations.sumGratherThan(5, 10, 20))
      .toBe('15 is less than 20');
    });

    it('Test with real params', () => {
      expect(complexOperations.sumGratherThan(2, 4, 2))
      .toBe('6 is grather than 2');
    });
  });

  describe('intersectionBetweenArrays', () => {
    // PASS
    it('Correct params - intersectionBetweenArrays', () => {
      expect(complexOperations.intersectionBetweenArrays([200, 455, 150], [1400, 455, 777])).toStrictEqual([455]);
    });

    // NOT PASS
    it('Correct param - Not equal ok', () => {
      expect(complexOperations.intersectionBetweenArrays([950, 459, 656], [454, 365, 498])).not.toEqual([100]);
    });

    it('Correct params - intersectionBetweenArrays', () => {
      expect(complexOperations.intersectionBetweenArrays([])).toBe("The params should be arrays");
    });
  });

  describe('sortArrayOfObjectsByKey', () => {
    // PASS
    it('Test pass for sortArrayOfObjectsByKey', () => {
      expect(complexOperations.sortArrayOfObjectsByKey(
        [{name: 'Dario'}, {name: 'Carlos'}, {name: 'Juan'}],'name'
      )).toEqual([{name: 'Carlos'}, {name: 'Dario'}, {name: 'Juan'}]);
    });

    // NOT PASS
    it('Is not a string - Test not pass for sortArrayOfObjectsByKey ', () => {
      expect(complexOperations.sortArrayOfObjectsByKey(
        [{name: 'Apple'}, {name: 'Orange'}, {name: 'Kiwi'}], 1
      )).toBe('The second param should be an string');
    });

    it('Property not coincidence - Test not pass for sortArrayOfObjectsByKey', () => {
      expect(complexOperations.sortArrayOfObjectsByKey(
        [{name: 'Sword'}, {name: 'Shield'}, false], 'age'
      )).toBe(`Some elements in the array does not have the age property`);
    });
  });

  describe('numberOfOddAndEvenNumbers', () => {
    // NOT PASS
    it('Not have only numbers - Test nos pass for numberOfOddAndEvenNumbers', () => {
      expect(complexOperations.numberOfOddAndEvenNumbers([1, 'NoName']
      )).toBe('The array should have only numbers');
    });

    it('The param should be an array - Test nos pass for numberOfOddAndEvenNumbers', () => {
      expect(complexOperations.numberOfOddAndEvenNumbers(

      )).toBe('The param should be an array');
    });

    // PASS
    it('Equal Case - Test for numberOfOddAndEvenNumbers with correct params', () => {
      expect(complexOperations.numberOfOddAndEvenNumbers([11, 9, 30, 14, 7]
      )).toEqual({even: 2, odd: 3});
    });

    it('Strict Equal Case - Test for numberOfOddAndEvenNumbers', () => {
      expect(complexOperations.numberOfOddAndEvenNumbers([4.9, 77.6, 5.2, 8, 16.7]
      )).toStrictEqual({even: 1, odd: 4});
    });
  });
});