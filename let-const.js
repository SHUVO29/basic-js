// let = we can re assign value but cannot re declare it;
// const= we can not re-assign and redeclare value of it;


// const name = "Mehedy";
// // name er moddhe ehe ace kina
// const result = name.includes("ehe");
// console.log(result);

// const pets = ['cat','dog','rat'];
// const result = pets.includes("dog");
// console.log(result)


// const arr = ['ant','camel', 'duck','elephant','dog' ];
// console.log(arr.slice(2,5))
// console.log(arr.splice(1,2))

const person ={
    name:"Mehedi",
    age: 25,
    address: "Rajshashi",
    phone:"323442",
}

// console.log(person.age);
// console.log(person["phone"])

// const x = "address";
// console.log(person[x])

const keys = Object.keys(person);
const values = Object.values(person);
console.log(keys)
console.log(values)

for(let i =0; i<keys.length; i++){
    const key = keys[i]
    console.log(person[keys[i]])
}
// for (let key of keys){
//     console.log(person[key])
// }

