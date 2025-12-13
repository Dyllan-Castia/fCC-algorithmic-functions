function uniteUnique(...arrs) {
  const result = [];

  for (let i = 0; i < arrs.length; i++) {
    for (let j = 0; j < arrs[i].length; j++) {
      if (!result.includes(arrs[i][j])) {
        result.push(arrs[i][j]);
      }
    }
  }
  return result;
}

console.log(uniteUnique([2, 7, 9, 3],[1, 2],[3, 4, 5]))
//[ 2, 7, 9, 3, 1, 4, 5 ]
