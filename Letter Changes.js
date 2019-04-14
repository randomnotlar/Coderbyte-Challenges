// This function changes every letter within a string with its next letter. C becomes D and Z becomes A. 
// Then every lowercase vowel (a e i o u) in new string becomes capitalized.

function LetterChanges(str) {
    let reducingFunc = (accumulator, currentVal) => accumulator + capitalizeIfVowel(nextChar(currentVal));
    let result = [...str].reduce(reducingFunc, "");

    return result;
    
    // Returns next letter in English alphabet
    function nextChar(c) {
        // 65 A 90 Z and 97 a 122 z
        // String.fromCharCode(65)
        // "A".charCodeAt(0)

        let ascii = c.charCodeAt(0);
        if (ascii >= 65 && ascii <= 90) {
            // convert uppercases
            let rankInABC = ascii - 65; // this maps ASCII rank to alphabetic rank
            let nextChar = (rankInABC + 1) % 26; // with modulus operation, after Z, loops back to A
            rankInABC = nextChar + 65; // map back to ASCII
            return String.fromCharCode(rankInABC);
        }
        else if (ascii >= 97 && ascii <= 122) {
            // convert lowercases 
            let rankInABC = ascii - 97; // this maps ASCII rank to alphabetic rank
            let nextChar = (rankInABC + 1) % 26; // with modulus operation, after z, loops back to a
            rankInABC = nextChar + 97; // map back to ASCII
            return String.fromCharCode(rankInABC);
        } else {
            // If it is not a letter
            return c;
        }
    }
    
    // Capitalizes lowercase vowels
    function capitalizeIfVowel(c) {
        if (c == "a" || c == "e" || c == "i" || c == "o" || c == "u") {
            let ascii = c.charCodeAt(0);
            let capital = String.fromCharCode(ascii - 32); // distance between chars "A" and "a" or "G" and "g" is 32
            return capital;
        }
        return c;
    }
}
