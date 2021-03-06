'use strict'

var Jasmine = require('jasmine');
var jasmine = new Jasmine();

var myApp = require('../app/prime.js');


describe("Case for other types other that an Array", function(){
    describe("Case of a string", function(){

    it("should return invalid for a string", function(){
        expect(myApp.getPrime("A string")).toEqual("invalid type");
    it("should return invalid for a float", function(){
        expect(myApp.getPrime(34.6)).toBe("invalid type");
      });
      });
    });
  });
describe("Determine the sequence of an array of numbers: ", function(){
    describe("Case for an empty array ", function(){

    it("should return invalid for an empty ", function(){
        expect(myApp.getPrime("")).toEqual("invalid type");
    it("should return undefined for a negative numbers", function(){
        expect(myApp.getPrime(-34)).toBe("undefined");
      });
      });
    });
  });
describe("Determine the sequence of an array of numbers: ", function(){
    describe("Case for an empty array ", function(){

    it("should return [2,3,5] for 5 ", function(){
        expect(myApp.getPrime(5)).toEqual("[2,3,5]");
    it("should return [2, 3, 5, 7,11,13] for 13", function(){
        expect(myApp.getPrime(13)).toBe("[2, 3, 5, 7,11,13] ");
      });
      });
    });
  });
