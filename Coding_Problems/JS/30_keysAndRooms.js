// So we have an array of rooms. each room has info of the keys inside it
// Initially room 0 is unlocked and others are locked.
// if we can unlock all the rooms we return true else false

function canVisitAllRooms(rooms) {
  const visited = new Set();
  const stack = [0];

  while (stack.length > 0) {
    const room = stack.pop();

    if (visited.has(room)) {
      continue;
    }

    visited.add(room);

    for (const key of rooms[room]) {
      if (!visited.has(key)) {
        stack.push(key);
      }
    }
  }

  return visited.size === rooms.length;
}
