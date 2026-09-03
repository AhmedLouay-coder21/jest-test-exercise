export function caesarCipher(string, key)
{
    let result = "";
    for (let c of string) {
        if (/[a-zA-Z]/.test(c)) {
            let sum = 0;
            if (c >= 'a' && c <= 'z') {
                // current character's order from 1 to 26
                let current = c.charCodeAt(0) % 97;
                // the amount to add to the current character's order
                let toAdd = key % 26;
                //their sum
                sum = current + toAdd;
                //final new character
                result += String.fromCharCode((sum % 26) + 97);
            } else {
                // current character's order from 1 to 26
                let current = c.charCodeAt(0) % 65;
                // the amount to add to the current character's order
                let toAdd = key % 26;
                //their sum
                sum = current + toAdd;
                //final new character
                result += String.fromCharCode((sum % 26) + 65);
            }
        } else {
            result += c;
        }
    }
    return result;
}
caesarCipher('XYZ', 1);