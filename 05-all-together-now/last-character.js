// Last Character
// Define a function lastCharacter that accepts two strings as arguments.
// lastCharacter should return true if both strings end with the same character.
// Otherwise, lastCharacter should return false.

// Example:
// lastCharacter('apples', 'pumpkins'); // => true
// lastCharacter('marker', 'pen'); // => false

// YOUR CODE BELOW
function lastCharacter(str1,str2){
    let result;

    if (str1.charAt(str1.length-1) === str2.charAt(str2.length-1)){
        result = true;
    }
    else{
        result = false;
    }

    return result;
}


// Do not change the code below
module.exports = { lastCharacter };
