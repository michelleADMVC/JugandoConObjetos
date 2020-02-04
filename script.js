var users = [
    { name: "Michael", age: 37}, 
    { name: "John", age: 30 }, 
    { name: "David", age: 27 },
    { name: "Jessica",age : 25, enfermedades : ["sushi disease","tesito disease"]
    },
    { name: "Marcelo", age:22, enfermedades: ["holahola disease"] }
];

for (let i = 0; i < users.length; i++) {
    console.log("----------------------------------");
    console.log("Nombre de usuario : ",users[i].name," Edad :", users[i].age);
    if (users[i].enfermedades != null){
        console.log("Enfermedades de ",users[i].name," : ");
        for (let j = 0; j < users[i].enfermedades.length; j++) {
            console.log(users[i].enfermedades[j]);    
        }
    }
}

// Michael - 37
// John - 30
// David - 27