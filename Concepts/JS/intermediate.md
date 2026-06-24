## Memoization -> Closures

```
function memoize(fn) {
  const cache = {};
  return (n) => {
    if (cache[n] !== undefined) return cache[n];
    const result = fn(n);
    cache[n] = result;
    return result;
  };
}
```
