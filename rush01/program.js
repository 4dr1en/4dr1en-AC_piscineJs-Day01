/*
* Return an string containing the valid ip
* it's a mess but it work
*/
function validIPAddresses(string) {
    const results = [];
    for (let i = 1; i <= 3; i++) {

        let part1 = string.substring(0, i);

        if(!testPartIp(part1)) continue;
        for (let j = 1; j <= 3; j++) {
            
            let part2 = string.substring(i,i+j);

            
            if(!testPartIp(part2)) continue;
            for (let k = 1; k <= 3; k++) {
                
                let part3 = string.substring(i+j,i+j+k);
                let part4 = string.substring(i+j+k);

                if(testPartIp(part3), testPartIp(part4)){
                    results.push(part1 + ':' + part2 + ':' + part3 + ':' + part4);
                }
            }
        }
    }
    return results;
}

function testPartIp(ipPart) {
    if (ipPart.length > 1 && ipPart[0] == '0') return false
    return ipPart.length 
        && ipPart.length <= 3 
        && Number(ipPart) <= 255
    ;
}

console.log(validIPAddresses('1921680'));
  
    
// Merci de ne pas effacer la ligne en dessous.
exports.validIPAddresses = validIPAddresses;