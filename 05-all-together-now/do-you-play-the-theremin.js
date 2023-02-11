// Do You Play the Theremin
// Define a function doYouPlayTheTheremin that accepts a string as an argument.
// doYouPlayTheTheremin should return true if the inputted string starts with the letters s or S.
// Otherwise, doYouPlayTheTheremin should return false.

// Example:
// doYouPlayTheTheremin('Griffin'); // => false
// doYouPlayTheTheremin('Scott'); // => true

// YOUR CODE BELOW
function doYouPlayTheTheremin(word){
    let result;

    if (word.charAt(0).toUpperCase() === "S"){
        result = true;
    }
    else{
        result=false;
    }
    

    return result;
}

// Do not change the code below
module.exports = { doYouPlayTheTheremin };
