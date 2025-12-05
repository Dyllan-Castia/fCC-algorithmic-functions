//This function just uses variables and the slice and splice methods to return a new array with the contents of arr1 and arr2 joined together depending on the index argument.
function frankenSplice(arr1, arr2, index) {
  let brain = arr1.slice();
  let body = arr2.slice();
  body.splice(index, 0, ...brain);
  return body;
}

const result = frankenSplice(["mind", "body", "and", "soul"], ["Your", "are", "connected."], 0)

console.log(result);
//[ 'Your', 'mind', 'body', 'and', 'soul', 'are', 'connected.' ]

//The coarse has been teaching more complicated functions so I wanted to refactor this function to be more complicated on purpose.

//Same function but with for loops.
function frankenSplice(arr1, arr2, index) {
  
  const result = [];

  //Add items from arr2 to result until index.
  for (let i = 0; i < index && i < arr2.length; i++) {
    result.push(arr2[i]);
  }

  //add items from arr1 to result.
  for (let i = 0; i < arr1.length; i++) {
    result.push(arr1[i]);
  }

  //add the rest of arr2 items to result
  for (let i = index; i < arr2.length; i++) {
    result.push(arr2[i]);
  }
  return result;
}

const itsAlive = frankenSplice(["mind", "body", "and", "soul"], ["Your", "are", "connected."], 1)

console.log(itsAlive);
//[ 'Your', 'mind', 'body', 'and', 'soul', 'are', 'connected.' ]
