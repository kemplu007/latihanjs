let val;
// number to string
val = String(123);
val = String(5+5);

// bool to string
val =String(true);

// date to string
val = String(new Date());

// to.string()
val = (true).toString() ;
val = (53).toString();
console.log(val);
console.log(typeof val);
console.log(val.length);
// string to number
val = Number('5.3009');

// bool to Number
val = Number(true);
val = Number('hello');
val = Number([1,2,3]),

// mengubah menjadi bilangan bulat
val = parseInt('110.89');

console.log(val);
console.log(typeof val);
console.log(val.toFixed());
