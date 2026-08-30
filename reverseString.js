export function reverseString(string)
{
    let reversedString = [];
    for(let i = 0; i < string.length; i++)
    {
        reversedString[i] = string[string.length - i- 1];
    }
    return reversedString.join('');
}
const string = 'Hello, world';
reverseString(string);