import { TestClass } from ".";

 describe(`test`, () => {
    test(`test1`, () => {
      const testClass = new TestClass();
      return expect(testClass.returnFalse()).toBeFalsy();
    });
    test(`test1`, () => {
      const testClass = new TestClass();
      return expect(testClass.returnTrue()).toBeTruthy();
    });
  });