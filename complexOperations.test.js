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

    it('test for first wrong measurements', () => {
      expect(complexOperations.calculateArea('circle', 'robert', 3)).toBe('number1 and number2 should be numbers');
    });

    it('test for first wrong measurements', () => {
      expect(complexOperations.calculateArea('circle', 'robert', 'carlos')).toBe('number1 and number2 should be numbers');
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
      expect(complexOperations.intersectionBetweenArrays([200, 455, 150], [1400, 455, 777])).toBe([455]);
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
    it('first test for sortArrayOfObjectsByKey', () => {

    });

    // it('Test - for', () => {
    //   expect(variable.funcion()).toBe();
    // })

    // it('Test - for', () => {
    //   expect(variable.funcion()).toBe();
    // })

    // it('Test - for', () => {
    //   expect(variable.funcion()).toBe();
    // })

    // it('Test - for', () => {
    //   expect(variable.funcion()).toBe();
    // })
  });

  describe('numberOfOddAndEvenNumbers', () => {
    it('first test for numberOfOddAndEvenNumbers', () => {

    });

    // it('Test - for', () => {
    //   expect(variable.funcion()).toBe();
    // })

    // it('Test - for', () => {
    //   expect(variable.funcion()).toBe();
    // })

    // it('Test - for', () => {
    //   expect(variable.funcion()).toBe();
    // })

    // it('Test - for', () => {
    //   expect(variable.funcion()).toBe();
    // })
  });
});