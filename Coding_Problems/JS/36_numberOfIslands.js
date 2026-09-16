function numberOfIslands(grid) {
  if (grid.length === 0) return 0;

  const rows = grid.length;
  const cols = grid[0].length;
  const LAND = "1",
    WATER = "0";
  let Islands = 0;
  const directions = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];

  function dfs(row, col) {
    if (
      row < 0 ||
      row >= rows ||
      col < 0 ||
      col >= cols ||
      grid[row][col] != LAND
    )
      return;

    grid[row][col] = WATER;

    for (const [dr, dc] of directions) {
      dfs(row + dr, col + dc);
    }
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] === LAND) {
        Islands++;
        dfs(row, col);
      }
    }
  }
  return Islands;
}

console.log(
  numberOfIslands(
    (grid = [
      ["1", "1", "0", "0", "0"],
      ["1", "1", "0", "0", "0"],
      ["0", "0", "1", "0", "0"],
      ["0", "0", "0", "1", "1"],
    ]),
  ),
);
