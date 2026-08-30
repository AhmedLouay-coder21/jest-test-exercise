import { capitalizeFirstChar } from './capitalize';

test('capitalize first character in a string', () =>
{
    expect(capitalizeFirstChar('hello, world')).toBe('Hello, world');
});