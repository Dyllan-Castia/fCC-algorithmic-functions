function titleCase(str) {
  const arr = str.split(" ");
  let newStr = ""

  for (let item of arr) {
    newStr += item[0].toUpperCase() + item.slice(1, item.length).toLowerCase() + " ";
  }
  const result = newStr.trimEnd();
  return result;
}
console.log(titleCase("I'm a liTTle tea pot"))
//I'm A Little Tea Pot
