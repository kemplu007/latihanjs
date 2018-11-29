// Create Array 
const number = [5,59,3,332,32];
const number2 = new Array(21,90,222,34,443,432,1);
const fruit = ['aplle','mango','jambu','cherry'];
const mix = [30,'hello', true ,undefined, null, {a: 'siji', b: 'loro'}, new Date()];

let val;

// Get length
val = number.length;

// check is Array (mengecek true or false)
val = Array.isArray(number2);

// get single value;
val = fruit[2];

// Insert into Array
fruit[2] = 'banana';
// Find index of value
val = mix.indexOf(null);

// mutating
mix.push('mas kemplu'); //add onto end 

// Add onto front
mix.unshift('cah bagus');

// take off end
fruit.pop();

// take off front
fruit.shift();

// splice value ne(menghapus beberapa)
fruit.splice(0,3);

mix.reverse(); // reverse (membalikan)

console.log(mix);
console.log(val);
console.log(fruit);
