student1 = {
    name: "HarshVardhan Bareth",
    age: 19,
    college: "Institute of Engineering and Technology, MLSU"
}

function personInfo(name, age){
    const person={
        name: name,
        age: age,
        talk(){
            console.log(`Kaise ho ${this.name} `);
        }
    }
    return person;
}

let p1 = personInfo("harsh", "19");
let p2 = personInfo("harsh", "20");
