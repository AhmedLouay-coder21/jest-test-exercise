import { add, subtract, divide, multiply } from './calculator';

test('Adds two numbers and returns the result', () =>
{
    expect(add(205, 100)).toBe(305);
});
test('subtracts two numbers and returns the result', () =>
{
    expect(subtract(205, 100)).toBe(105);
});
test('divides two numbers and returns the result', () =>
{
    expect(divide(205, 100)).toBe(2.05);
});
test('multiplies two numbers and returns the result', () =>
{
    expect(multiply(205, 100)).toBe(20500);
});