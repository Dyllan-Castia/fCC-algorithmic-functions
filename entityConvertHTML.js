function convertHTML(str) {
  const map = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };

  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (map[str[i]]) {
      result += map[str[i]];
    } else {
      result += str[i];
    }
  }

  return result;
}
console.log(convertHTML('Stuff in "quotation marks"'));
//Stuff in &quot;quotation marks&quot;
