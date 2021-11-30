function runLengthEncoding(string) {
    let current = string[0];
    let nbCurrent = 1;
    let resultString = '';

    for (let i = 1 ; i < string.length ; i++) {
        if (string[i] == current && nbCurrent < 9) nbCurrent++;
        else { 

            resultString += nbCurrent+current;
            current = string[i];
            nbCurrent = 1;
        }
    }

    resultString += nbCurrent+current;

    return resultString;
}

console.log(runLengthEncoding("AAAAAAAAAAAAABBCCCCDDuU"));

// Merci de ne pas effacer la ligne en dessous.
exports.runLengthEncoding = runLengthEncoding;