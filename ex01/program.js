/*
* Return the first number in double repeat in the array
*/

function firstDuplicateValue(array){
    for(var i=0; i<array.length; i){
        for(var j=i+1; j<array.length; j++){
            if(array[i] === array[j]){
                return array[i];
            }
        }
    }
    return -1;
}

console.log(firstDuplicateValue([1, 2, 1, 3, 3, 5, 3, 2]));
// Merci de ne pas effacer la ligne en dessous.
exports.firstDuplicateValue =  firstDuplicateValue;