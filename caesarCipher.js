export function caesarCipher(string, key)
{
    let caesarString = [];
    for(let i = 0; i < string.length; i++)
    {
        const characterCode = string.charCodeAt(i);
        const isAlpha = (char) => /^[a-z]$/i.test(char);
        if(isAlpha(string[i]))
        {
            if(string[i] === string[i].toUpperCase())
            {
                // String.fromCharCode(((characterCode + key)) % 122);
                let number = ((characterCode + key) % 91);
                if(number < 26)
                {
                    number += 65;
                }
                else if (number > 26 && number < 65)
                {
                    number = ((characterCode + key) % 65) + 65;
                }
                caesarString[i] = String.fromCharCode(number);
            }
            else
            {
                let number = ((characterCode + key) % 123);
                if(number < 26)
                {
                    number += 97;
                }
                else if (number > 26 && number < 97)
                {
                    number = ((characterCode + key) % 97) + 97;
                }
                caesarString[i] = String.fromCharCode(number);
            }
        }
        else
        {
            caesarString[i] = string[i];
        }
    }
    return caesarString.join('');
}
caesarCipher('XYZ', 1);