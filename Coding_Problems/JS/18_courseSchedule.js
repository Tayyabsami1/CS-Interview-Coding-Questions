function canFinish(numCourses, prerequisites) {
  const graph = Array.from({ length: numCourses }, () => []);
  const indegree = Array(numCourses).fill(0);

  for (const [course, prerequisite] of prerequisites) {
    graph[prerequisite].push(course);
    indegree[course]++;
  }

  const queue = [];

  // Add all courses with indegree 0
  for (let i = 0; i < numCourses; i++) {
    if (indegree[i] === 0) queue.push(i);
  }

  let completed = 0;

  while (queue.length > 0) {
    const current = queue.shift();
    completed++;

    for (const neighbor of graph[current]) {
      indegree[neighbor]--;

      if (indegree[neighbor] === 0) {
        queue.push(neighbor);
      }
    }
  }

  return completed === numCourses;
}

const numCourses = 4;
const prerequisites = [
  [1, 0],
  [2, 0],
  [3, 1],
  [3, 2],
];

if (canFinish(numCourses, prerequisites)) {
  console.log("Can finish all courses");
} else {
  console.log("Cannot finish all courses");
}
