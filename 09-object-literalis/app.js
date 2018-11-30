const person = {
    firstName: 'abdul',
    lastName: 'kemplu',
    age: 23,
    email: 'akimkemplu@gmail.com',
    hobbies: ['turu','mangan'],
    address: {
        desa: 'kradenan',
        city: 'magelang',
    },
    getBirthYear: function () {
        return 'your birthday is '+ (2018 - this.age);
    }
};

let val;
 val = person;
 val = person.firstName;
 val = person.hobbies[0];
 val = person.address.desa;
 val = person.getBirthYear()


 console.log(val);
 
