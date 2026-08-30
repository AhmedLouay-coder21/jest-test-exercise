import { caesarCipher } from './caesarCipher';

test('input should be a string + key and the output should be the same string but with Caesar Cipher using the entered key', () =>
{
    expect(caesarCipher('xyz', 3)).toBe('abc');
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});