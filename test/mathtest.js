/* This class basic tdd methods using calculator class */

const chai = require('chai');
const expect = chai.expect;

const calculator = require('../math/calculator.js');

describe('Calculator',()=>{
  
    describe('Addition',()=>{

       
        it('passing arguments(1,1) to addition fn should return 2',()=>{
            expect(calculator.addition(1,1)).to.equals(2)
        });

        it('passing arguments(2,3) to addition fn should return 5',()=>{
            expect(calculator.addition(2,3)).to.equals(5)
        });it
    });

    describe('Subraction',()=>{
        it('passing arguments(2,1) to subraction fn should return 1',()=>{
            expect(calculator.subraction(2,1)).to.equals(1)
        });

        it('passing arguments(2,3) to subraction fn should return -1',()=>{
            expect(calculator.subraction(2,3)).to.equals(-1)
        });
    });

    
    describe('Multiplication',()=>{
        it('passing arguments(2,1) to multiplication fn should return 2',()=>{
            expect(calculator.multiplication(2,1)).to.equals(2)
        });

        it('passing arguments(25,25) to multiplication fn should return 625',()=>{
            expect(calculator.multiplication(25,25)).to.equals(625)
        });
    });

    
    describe('Division',()=>{
        it('passing arguments(2,1) to division fn should return 2',()=>{
            expect(calculator.division(2,1)).to.equals(2)
        });

        it('passing arguments(2,3) to division fn should return 0',()=>{
            expect(calculator.division(2,3)).to.equals(0.6666666666666666)
        });

        it('passing arguments(25,0) to division fn should return undefined',()=>{
            expect(calculator.division(25,0)).to.equals(undefined)
        });
    });
});