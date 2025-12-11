function bouncer(arr) {
  let truth = [];
  for (let i = 0; i < arr.length; i++) {
    if (Boolean(arr[i])) {
    truth.push(arr[i]);
    }
  }
  return truth;
}
console.log(bouncer(["yes", 2, 0, null]));
//["yes", 2]
