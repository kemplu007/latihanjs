let val;

const today = new Date();
let birthday = new Date('8-17-1945');
birthday = new Date('Augustus 17 1945');
birthday = new Date('8/17/1945');

val = today.toString;

val = today.getDate();//menampilkan tanggal
val = today.getMonth(); //menampilkan bulan
val = today.getDay(); //menampilkan hari
val = today.getTime(); //menampilkan waktu

birthday.setDate(20);//mengganti value tanggal
birthday.setFullYear(2020)

console.log(birthday);
