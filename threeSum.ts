function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  let start: number = 0;
  let end: number = nums.length - 1;
  const result: number[][] = [];
  const resultSet: Set<string> = new Set();
  while (start + 1 < end) {
    console.log(start, start + 1);
    console.log(end, end - 1);
    if (Math.abs(nums[start]) >= Math.abs(nums[end] + nums[end - 1])) {
      const sum = nums[start] + nums[end - 1] + nums[end];
      const triplet = [nums[end - 1], nums[start], nums[end]];
      const tripletString = triplet.join(",");

      if (sum === 0 && !resultSet.has(tripletString)) {
        resultSet.add(tripletString);
        result.push(triplet);
      }
      start++;
    } else {
      const sum = nums[start] + nums[start + 1] + nums[end];
      const triplet = [nums[start + 1], nums[start], nums[end]];
      const tripletString = triplet.join(",");

      if (sum === 0 && !resultSet.has(tripletString)) {
        resultSet.add(tripletString);
        result.push(triplet);
      }
      end--;
    }
  }
  console.log(result);
  return result;
}

threeSum([3, 0, -2, -1, 1, 2]);
