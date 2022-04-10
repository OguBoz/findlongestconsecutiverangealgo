const findLongestConsecutiveRange = require("./index");
test("Returns index and length of longest consecutive range in array", () => {
    expect(findLongestConsecutiveRange([])).toStrictEqual([0,0]);
    expect(findLongestConsecutiveRange([1])).toStrictEqual([0,1]);
    expect(findLongestConsecutiveRange([1, 2])).toStrictEqual([0, 2]);
    expect(findLongestConsecutiveRange([1, 1, 2])).toStrictEqual([1, 2]);
    expect(findLongestConsecutiveRange([1, 2, 3, 1, 2, 3])).toStrictEqual([0, 3]);
    expect(findLongestConsecutiveRange([1, 2, 3, -10, -9, -8, -7, 0, 1, 2])).toStrictEqual([3, 4]);
    expect(findLongestConsecutiveRange([1, 1, 2, 3, 1, 2, 3])).toStrictEqual([1, 3]);
    expect(findLongestConsecutiveRange([1, 2, 3, 4, 3, 2, 1, 0, -2])).toStrictEqual([3, 5]);
});