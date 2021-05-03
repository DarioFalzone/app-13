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






  describe('calculateArea', () => {
    it('first test for calculateArea', () => {

    });
  });

  describe('sumGratherThan', () => {
    it('first test for sumGratherThan', () => {

    });
  });

  describe('intersectionBetweenArrays', () => {
    it('first test for intersectionBetweenArrays', () => {

    });
  });

  describe('sortArrayOfObjectsByKey', () => {
    it('first test for sortArrayOfObjectsByKey', () => {

    });
  });

  describe('numberOfOddAndEvenNumbers', () => {
    it('first test for numberOfOddAndEvenNumbers', () => {

    });
  });
});