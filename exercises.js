// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(x, y) {
    if (x > y)
        return x;
    else
        return y;
}

console.log(max(7,-2));

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(x,y,z) {
    if (x > y && x > z)
        return x;
    else if (y > x && x > z)
        return y;
    else
        return z;
}

console.log(maxOfThree(3,2,9));

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char) {
    if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u" || char === "A" || char === "E" || char === "I" || char === "O" || char === "U") {
        return true;
    } else
        return false;
};

console.log(isVowel("U"));

// ---------------------
// Write a function translate() that will translate a text into "rÃ¶varsprÃ¥ket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase) {
    var translation = "";
    for (i = 0; i < phrase.length; i++) {
        if (isVowel(phrase[i]) === false && phrase[i] !== " ") {
            translation += phrase[i] + "o" + phrase[i];
        } else {
            translation += phrase[i];
        }
    }
    return translation;
}

console.log(rovarspraket("this is fun"));

// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------

function sum(array) {
    return array.reduce(function(x,y) {
        return x + y;
  });
}

console.log(sum([1,2,3,4]));

function multiply(array) {
    return array.reduce(function(x,y) {
      return x * y;
    })
}

console.log(multiply([1,2,3,4]));

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(string) {
  var output = "";
  for (i = string.length - 1; i > -1; i--)
    output += string[i];
  return output;
};

console.log(reverse("jag testar"));

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words) {
  var longWord = words.reduce(function(x,y) {
    if (x.length > y.length )
      return x;
    else
      return y;
  })
    return longWord.length;
};

console.log(findLongestWord(["are", "there", "any", "cookies", "left", "yo?"]));

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i) {
    wordList = []
    words.forEach(function(word) {
      if (word.length > i)
        wordList.push(word);
    })
    return wordList;
}

console.log(filterLongWords(["are", "there", "any", "cookies", "left", "yo?"], 3));

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string) {
    var charCount = new Object;
    for (i = 0; i < string.length; i++) {
      if (charCount[string[i]] === undefined) {
        charCount[string[i]] = 1;
      }

      else {
        charCount[string[i]]++;
      }
    }

    return charCount;
}

// var obj = {};
// obj['a'] = 1;
// obj.a = 1;

console.log(charFreq("abbabcbdbabdbdbabababcbcbab"));
