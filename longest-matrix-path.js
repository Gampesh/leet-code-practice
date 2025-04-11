/*
Longest Matrix Path
Have the function LongestMatrixPath(strArr) take the array of strings stored in strArr, which will be an NxM matrix of positive single-digit integers, and find the longest increasing path composed of distinct integers. When moving through the matrix, you can only go up, down, left, and right. For example: if strArr is ["345", "326", "221"], then this looks like the following matrix:

3 4 5
3 2 6
2 2 1

For the input above, the longest increasing path goes from: 3 -> 4 -> 5 -> 6. Your program should return the number of connections in the longest path, so therefore for this input your program should return 3. There may not necessarily always be a longest path within the matrix.
Examples
Input: ["12256", "56219", "43215"]
Output: 5
Input: ["67", "21", "45"]
Output: 3

*/


function LongestMatrixPath(strArr) {
  // Convert the input strings into a 2D matrix of integers
  const matrix = strArr.map(row => row.split("").map(Number));
  const rows = matrix.length;
  const cols = matrix[0].length;

  // Directions for moving up, down, left, and right
  const directions = [
    [-1, 0], // up
    [1, 0],  // down
    [0, -1], // left
    [0, 1]   // right
  ];

  // Memoization table to store the longest path from each cell
  const memo = Array.from({ length: rows }, () =>
    Array(cols).fill(-1)
  );

  // DFS function with memoization
  function dfs(x, y, prevValue) {
    // If the current cell is out of bounds or not strictly increasing, return 0
    if (
      x < 0 || x >= rows ||
      y < 0 || y >= cols ||
      matrix[x][y] <= prevValue
    ) {
      return 0;
    }

    // If the result for this cell is already computed, return it
    if (memo[x][y] !== -1) {
      return memo[x][y];
    }

    // Initialize the maximum path length from this cell
    let maxPath = 0;

    // Explore all four directions
    for (const [dx, dy] of directions) {
      maxPath = Math.max(maxPath, dfs(x + dx, y + dy, matrix[x][y]));
    }

    // Store the result in the memoization table
    memo[x][y] = 1 + maxPath;
    return memo[x][y];
  }

  // Find the longest path starting from any cell in the matrix
  let longestPath = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      longestPath = Math.max(longestPath, dfs(i, j, -1));
    }
  }

  // Return the number of connections in the longest path
  return longestPath - 1;
}

// Example usage
console.log(LongestMatrixPath(["345", "326", "221"])); // Output: 3
