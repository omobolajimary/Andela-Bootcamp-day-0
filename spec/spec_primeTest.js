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
    it("should return invalid for a float", function(){
        expect(myApp.getPrime(34.6)).toBe("invalid type");
      });
      });
    });
  })