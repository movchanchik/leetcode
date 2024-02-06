function maxArea(height: number[]): number {
  let max = 0;
  let start = 0;
  let end = height.length - 1;

  while (start < end) {
    const water = Math.min(height[start], height[end]) * (end - start);
    if (max < water) {
      max = water;
    }
    if (height[start] < height[end]) {
      start++;
    } else {
      end--;
    }
  }
  return max;
}

maxArea([2, 3, 4, 5, 18, 17, 6]);
