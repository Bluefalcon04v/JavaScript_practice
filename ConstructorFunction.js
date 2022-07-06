// Creating a constructor functions

// constructor is used to prevent repeation of the object's properties

function Employ(name, tech, system_req){
    this.name = name;
    this.tech = tech;
    this.system_req = system_req;
}
let employ1 = new Employ('Niel', 'Java', 'Hp');
let employ2 = new Employ('Bruce', 'JavaScript', 'Dell');
let employ3 = new Employ('Sam', 'Python', 'Asus');

console.log(employ1);
console.log(employ2);