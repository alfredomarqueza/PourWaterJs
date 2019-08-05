const { pourWater } = require('./pourWater');

test('Case 1', () => {
    const result = pourWater([2, 1, 1, 2, 1, 2, 2], 4, 3);
    expect(result).toEqual([2, 2, 2, 3, 2, 2, 2]);
});

test('Case 2', () => {
    const result = pourWater([1, 2, 3, 4], 2, 2);
    expect(result).toEqual([2, 3, 3, 4]);
});

test('Case 3', () => {
    const result = pourWater([3, 1, 3], 5, 1);
    expect(result).toEqual([4, 4, 4]);
});

test('Case 4', () => {
    const result = pourWater([1, 2, 3, 4, 3, 2, 1, 2, 3, 4, 3, 2, 1], 5, 2);
    expect(result).toEqual([3, 4, 4, 4, 3, 2, 1, 2, 3, 4, 3, 2, 1]);
});