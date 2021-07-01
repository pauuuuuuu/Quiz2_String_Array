const quiz = require('../quiz.js');

describe("reverse", function(){

  it("gets the last word", function(){
    expect(quiz.lastWord).toEqual('moon');
  });

  it("gets the first word", function(){
    expect(quiz.firstWord).toEqual('THE');
  });

  it("gets the last index of o", function(){
    expect(quiz.lastO).toEqual(26);
  });

  it("removes all m", function(){
    expect(quiz.noM).toEqual("The cow juped over the oon");
  });

  it("ending characters", function(){
    expect(quiz.endingChars).toEqual("ewdren");
  });

  it("has all the prime numbers", function(){
    expect(quiz.primes).toEqual([1, 3, 5]);
  });

  it("the length of the prime array is 3", function(){
    expect(quiz.arrayLength).toEqual(3);
  });
});