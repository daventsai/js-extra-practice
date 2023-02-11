// My Mnemonic
// Write a function myMnemonic that accepts up to four strings. myMnemonic should return a new string of the first characters for each string argument.

// Note that the user may not pass in all four strings!

// Example:
// myMnemonic('Must', 'Accept', 'Sugar', 'Happiness'); // => MASH
// myMnemonic('We', 'Eat', 'Eggs'); // => WEE

// YOUR CODE BELOW
function myMnemonic(str1,str2,str3,str4){
    let comboStr = "";

    if (str4 !== undefined){
        comboStr = str1.charAt(0) + str2.charAt(0) + str3.charAt(0) + str4.charAt(0);
    }
    else if (str3 !== undefined){
        comboStr = str1.charAt(0) + str2.charAt(0) + str3.charAt(0);
    }
    else if (str2 !== undefined){
        comboStr = str1.charAt(0) + str2.charAt(0);
    }
    else{
        comboStr = str1.charAt(0);
    }

    return comboStr;
}


// Do not change the code below this line
module.exports = { myMnemonic };
