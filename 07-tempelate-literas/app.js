const name = 'kemplu';
const age = '23';
const jobs ='web developer';
const city = 'magelang';
 
//  without template string(es5)
let html;
html = '<ul><li>name: ' + name + '</li><li>age: ' + age + '</li><li>jobs: ' + jobs + '</li><li>city: ' + city + '</li></ul>'

html = '<ul>'+
        '<li>name: ' + name + ' .</li>'+
        '<li>age: ' + age + ' .</li>'+
        '<li>jobs: ' + jobs + ' .</li>'+
        '<li>city: ' + city + ' .</li>'+
    '</ul>';
// with template string (es6)
function hello() {
    alert('sumonggo lenggah');
}

html = `
    <ul>
        <li>name: ${name}</li>
        <li>age: ${age}</li>
        <li>jobs: ${jobs}</li>
        <li>city: ${city}</li>
        <li>${hello()}</li>
        <li>${age > 20 ? "wes tua ":'ijeh unyu unyu'}</li>
    </ul>
`



document.body.innerHTML = html;