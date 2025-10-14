

// import functions from math.js
import { add, multiply } from './math.js';

// import from message.js
import { greeting, displayMessage } from './message.js';

// use the imported code
console.log(greeting);
console.log(displayMessage("Omar"));
console.log("Addition:", add(2, 3));
console.log("Multiplication:", multiply(4, 5));
