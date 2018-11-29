const firstName = 'sponbob';
const lastName = 'squarepan';
const age = 23;
const tags = 'html,css,javaScript,php,mysql'; 

let val;
val = firstName +' '+ lastName; //concatination
val = 'helloo,my name is ' + firstName + ', im is' + age;

// append(+=)
val = 'ipin ';
val += 'upin';

// escaping
val = "hello i\'m just can\'t wait it";

// lenght
val = firstName.length;

// concat
val = firstName.concat(' ' + lastName);

// change chase
val = firstName.toLocaleUpperCase();
val = firstName.toLowerCase();

// index
val =firstName[3];

val = firstName.indexOf('n');
// chartAt()
val =firstName.charAt('2');
val = firstName.charAt(firstName.length - 1);

// subString()memotong
val = firstName.substring(0,4);

// slice()
val = firstName.slice(-3);

// splite() untuk memisahkan isi string

val = tags.split(',');

// rplace() mengubah nilai
val = firstName.replace('bob' ,'tahu');

// include()
 val = tags.includes('html');
 val = firstName.includes('anjing');


console.log(val);
