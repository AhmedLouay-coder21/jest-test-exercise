export function analyzeArray(array)
{
    const object = {};
    let sum = array.reduce((acc, curr) => acc + curr, 0);
    object["average"] = sum / array.length;
    object["min"] = Math.min(...array);
    object["max"] = Math.max(...array);
    object["length"] = array.length;
    return object;
}