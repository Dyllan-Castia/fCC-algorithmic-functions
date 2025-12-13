let inventory = [];

function findProductIndex(product) {
  const name = product.toLowerCase();

  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name === name) {
      return i;
    }
  }
  return -1;
}

function addProduct(product) {
  const name = product.name.toLowerCase();
  const index = findProductIndex(name);

  if (index !== -1) {

    inventory[index].quantity += product.quantity;

    console.log(name + " quantity updated");

  } else {
    inventory.push({
      name: name,
      quantity: product.quantity
    });

    console.log(name + " added to inventory");
  }
}

addProduct({ name: "FLOUR", quantity: 5 });
//flour added to inventory
addProduct({ name: "WATER", quantity: 50 });
//water added to inventory
addProduct({ name: "CHOCOLATE", quantity: 15 });
//chocolate added to inventory
addProduct({ name: "CAROT", quantity: 20 });
//carot added to inventory

function removeProduct(productName, quantity) {
  const name = productName.toLowerCase();
  const index = findProductIndex(name);

  if (index === -1) {
    console.log(`${name} not found`);
    return;
  }

  if (inventory[index].quantity < quantity) {
    console.log(`Not enough ${name} available, remaining pieces: ${inventory[index].quantity}`);
    return;
  }

  inventory[index].quantity -= quantity;
  console.log(`Remaining ${name} pieces: ${inventory[index].quantity}`);

  if (inventory[index].quantity === 0) {
    inventory.splice(index, 1);
  }
}

removeProduct("SALT", 1);
//salt not found

removeProduct("FLOUR", 10);
//Not enough flour available, remaining pieces: 5

removeProduct("WATER", 10);
//Remaining water pieces: 40

removeProduct("FLOUR", 5);
//Remaining flour pieces: 0

removeProduct("FLOUR", 1);
//flour not found

console.log("END INVENTORY:", inventory);
//END INVENTORY: [ { name: 'water', quantity: 40 },
//{ name: 'chocolate', quantity: 15 },
//{ name: 'carot', quantity: 20 } ]







