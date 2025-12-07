function pyramid(pattern, rows, bool) {
  
  if (bool === false) {
 
  for (let i = rows; i <= rows && rows > 0; i--) {

  let space = "@".repeat(i / 2 + ((i - 1) / 2));

  console.log(space + space);

  }
}
}
const draw = pyramid("dude", 5, false);
console.log(draw);
//@@@@@@@@
//@@@@@@
//@@@@
//@@


function test(pattern, rows) {
for (let i = 0; i <= rows; i++) {
  let pat = pattern.repeat(i);
  console.log(pat);
}
return "";
}
const tester = test("f", 5);
console.log(tester);
//f
//ff
//fff
//ffff
//fffff
