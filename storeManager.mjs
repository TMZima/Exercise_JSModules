import { addItem, removeItem, listItems } from "./inventory.mjs";

// Add items to the inventory
addItem("Cheesecake");
addItem("Apple Pie");
addItem("Croissant");
addItem("Apple Pie");

listItems();

removeItem("Apple Pie");

listItems();
