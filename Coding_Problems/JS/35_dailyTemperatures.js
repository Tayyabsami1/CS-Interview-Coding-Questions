// so we have an array of temperatures
// [73,74,75,71,69,72,79,73]
// we need to return the answers of days to wait for the next warmer temperature.

function dailyTemperatures(temperatures) {
  const n = temperatures.length;

  const answer = new Array(n).fill(0);
  const stack = [];

  for (let i = 0; i < n; i++) {
    while (
      stack.length > 0 &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      const previousIndex = stack.pop();

      answer[previousIndex] = i - previousIndex;
    }

    stack.push(i);
  }

  return answer;
}
