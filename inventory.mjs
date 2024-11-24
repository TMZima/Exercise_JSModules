// Array to hold inventory items
const inventory = [];

// Function to add an item to the inventory by name
export const addItem = (item) => {
  inventory.push(item);
  console.log(`${item} added to inventory`);
};

// Function to remove an item from the inventory by name
export const removeItem = (item) => {
  let isRemoved = false;

  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i] === item) {
      isRemoved = true;
      inventory.splice(i, 1);
      i--;
    }
  }
  if (isRemoved) {
    console.log(`${item} removed from inventory`);
  } else {
    console.log(`${item} not found in inventory`);
  }
};

// Function to list all items in the inventory
export const listItems = () => {
  console.log(`Listing of all items in inventory:`);
  for (const item of inventory) {
    console.log(`* ${item}`);
  }
};
