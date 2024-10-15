function normalizeString(input) {
    var trimmedString = input.trim();
    
    var cleanedString = "";
    for (var i = 0; i < trimmedString.length; i++) {
        var char = trimmedString[i];
        if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || (char >= '0' && char <= '9') || char === ' ') {
            cleanedString += char;
        }
    }

    var singleSpaceString = "";
    var lastCharWasSpace = false;
    for (var j = 0; j < cleanedString.length; j++) {
        if (cleanedString[j] !== ' ') {
            singleSpaceString += cleanedString[j];
            lastCharWasSpace = false;
        } else if (!lastCharWasSpace) {
            singleSpaceString += ' ';
            lastCharWasSpace = true;
        }
    }

    var result = "";
    var capitalizeNext = true;
    for (var k = 0; k < singleSpaceString.length; k++) {
        var currentChar = singleSpaceString[k];
        if (currentChar === ' ') {
            result += ' ';
            capitalizeNext = true;
        } else if (capitalizeNext) {
            result += currentChar.toUpperCase();
            capitalizeNext = false;
        } else {
            result += currentChar.toLowerCase();
        }
    }

    return result;
}

var userInput = prompt("Enter a string to normalize:");
var result = normalizeString(userInput);

console.log(result);

//Time complexity - O(n)
//Space complexity - O(n)
