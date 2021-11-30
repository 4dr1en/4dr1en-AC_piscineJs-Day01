/*
* Return the first number in double repeat in the array
*/

function firstDuplicateValue(array){
    const precs = [];
    for(let i = 0; i<array.length; i++){
        if(precs.includes(array[i])){
            return array[i];
        }

        precs.push(array[i]);
    }
    return -1;
}

console.log(firstDuplicateValue( [2, 1, 5, 3, 3, 2, 4]));
// Merci de ne pas effacer la ligne en dessous.
exports.firstDuplicateValue =  firstDuplicateValue;