let inventory = [];

function findProductIndex(productName) {
  return inventory.findIndex((item) => item.name === productName.toLowerCase());
}

function addProduct(product) {
  const index = findProductIndex(product.name);
  const normalizedName = product.name.toLowerCase();

  if (index !== -1) {
    inventory[index].quantity += product.quantity;
    console.log(`${normalizedName} quantity updated`);
  } else {
    inventory.push({
      name: normalizedName,
      quantity: product.quantity,
    });
    console.log(`${normalizedName} added to inventory`);
  }
}

function removeProduct(name, quantity) {
  const index = findProductIndex(name);
  const normalizedName = name.toLowerCase();

  if (index === -1) {
    console.log(`${normalizedName} not found`);
    return;
  }
  if (inventory[index].quantity < quantity) {
    console.log(
      `Not enough ${normalizedName} available, remaining pieces: ${inventory[index].quantity}`,
    );
  } else {
    inventory[index].quantity -= quantity;
    if (inventory[index].quantity === 0) {
      inventory.splice(index, 1);
      console.log(`Remaining ${normalizedName} pieces: 0`);
    } else {
      console.log(
        `Remaining ${normalizedName} pieces: ${inventory[index].quantity}`,
      );
    }
  }
}
addProduct({ name: "Apple", quantity: 10 });
addProduct({ name: "ple", quantity: 5 });
removeProduct("Apple", 3);
console.log(inventory);
removeProduct("Apple", 12);
