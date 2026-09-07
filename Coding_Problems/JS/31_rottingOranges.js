// [
//   [2,1,1],
//   [1,1,0],
//   [0,1,1]
// ]

function orangesRotting(grid) {
  const rows = grid.length;

  if (rows === 0) {
    return 0;
  }

  const cols = grid[0].length;

  const queue = [];
  let freshCount = 0;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] === 2) {
        queue.push([row, col]);
      } else if (grid[row][col] === 1) {
        freshCount++;
      }
    }
  }

  if (freshCount === 0) {
    return 0;
  }

  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  let head = 0;
  let minutes = 0;

  while (head < queue.length && freshCount > 0) {
    const levelSize = queue.length - head;

    for (let i = 0; i < levelSize; i++) {
      const [row, col] = queue[head++];

      for (const [dr, dc] of directions) {
        const newRow = row + dr;
        const newCol = col + dc;

        if (
          newRow >= 0 &&
          newRow < rows &&
          newCol >= 0 &&
          newCol < cols &&
          grid[newRow][newCol] === 1
        ) {
          grid[newRow][newCol] = 2;
          freshCount--;

          queue.push([newRow, newCol]);
        }
      }
    }

    minutes++;
  }

  return freshCount === 0 ? minutes : -1;
}
