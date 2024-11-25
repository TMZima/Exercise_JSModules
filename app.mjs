// Exercise 3 - Re-exporting Modules
import { capitalize, square } from "./utils/index.mjs";

console.log(capitalize("imported and "));
console.log(capitalize("exported"));
console.log(square(7));

// Exercise 5 - Code is executed automatically upon import
// Even though the above code is imported and called, the following code will still run before it because it is not inside a function or class.
import "./globalConfig.mjs";
