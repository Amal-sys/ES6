

//const tab1=[25,33]
//const reducer =(sum,valeurencours)=> sum+valeurencours;
//console.log(tab1.reduce(reducer));
let pets = [
    { name: "Max", type: "dog", bornOn: 2018 },
    { name: "Angel", type: "cat", bornOn: 2015 },
    { name: "Jasper", type: "dog", bornOn: 2016 }
  ];

const getage =(pet) =>{
    return new Date().getFullYear() - pet.bornOn;
};
let petswithage=[]
pets.forEach((pet)=>{
    pet.age=getage(pet)
    petswithage.push(pet)
});
console.log(petswithage)
//let petswithage=pets.map(pet=>pet.age=getage(pet)) autre methode pour ajouter age 
let dogs=petswithage.filter(pet=>pet.type==="dog")
console.log(dogs)
let Jasper=petswithage.find(pet=>pet.name==="Jasper")
//console.log("jasper is "+Jasper.age +" years old")
console.log(`jasper is ${Jasper.age} years old`)