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
