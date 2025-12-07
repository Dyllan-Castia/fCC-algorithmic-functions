function pyramid(pattern, rows, bool) {
  let lines = [];
  const maxWidth = 1 + 2 * (rows - 1);

  if (bool === false) {

    for (let i = 0; i < rows; i++) {
      const count = 1 + 2 * i;
      const spaces = (maxWidth - count) / 2;
      const line = " ".repeat(spaces) + pattern.repeat(count);

      lines.push(line);
    }
  } else {
    
    for (let i = rows - 1; i >= 0; i--) {
    const count = 1 + 2 * i;
    const spaces = (maxWidth - count) / 2;
    const line = " ".repeat(spaces) + pattern.repeat(count);

      lines.push(line);

    }
  }
  return "\n" + lines.join("\n") + "\n";
}

const draw = pyramid("i", 5, false);
console.log(draw);
//    i
//   iii
//  iiiii
// iiiiiii
//iiiiiiiii

const draw = pyramid("i", 5, true);
console.log(draw);
//iiiiiiiii
// iiiiiii
//  iiiii
//   iii
//    i
