const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
// const emailAddy = users.map(email=> `${users.email}`);
// const smashers = ["Mario", "Donkey Kong", "Link", "Samus","Dark Samus", "Yoshi", "Kirby", "Fox", "Pikachu", "Luigi", "Ness", "Captain Falcon", "Jigglypuff",     "Peach", "Daisy", "Bowser", "Ice Climbers", "Sheik", "Zelda", "Dr. Mario", "Pichu", "Falco", "Marth", "Lucina", "Young Link", "Ganondorf", "Mewtwo", "Roy", "Chrom", "Mr. Game & Watch", "Meta Knight", "Pit", "Dark Pit", "Zero Suit Samus", "Wario", "Snake", "Ike", "Pokemon Trainer", "Squirtle", "Ivysaur", "Charizard", "Diddy Kong", "Lucas", "Sonic", "King Dedede", "Olimar", "Lucario", "R.O.B.", "Toon Link", "Wolf", "Villager", "Mega Man", "Wii Fit Trainer", "Rosalina & Luma", "Little Mac", "Greninja", "Mii Brawler", "Mii Swordfighter", "Mii Gunner", "Palutena", "Pac-Man", "Robin", "Shulk", "Bowser Jr.", "Duck Hunt", "Ryu", "Ken", "Cloud", "Corrin", "Bayonetta", "Inkling", "Ridley", "Simon", "Richter", "King K. Rool", "Isabelle", "Incineroar", "Piranha Plant", "Joker", "Hero", "Banjo & Kazooie", "Terry", "Byleth", "Min Min", "Steve", "Sephiroth", "Pyra", "Mythra", "Kazuya", "Sora"];
// let smashed =smashers.filter(smash=> smash.length=== 5).sort();
// let smash = smashers.filter(smasher => smasher.length > 10).sort();
// const lang = users.filter(language => users.language.length >4);
// const aHundredNums = [9225, 6397, 97, 5062, 2149, 4656, 6551, 2145, 1073, 7963, 6279, 2873, 1820, 1468, 9611, 6431, 797, 3433, 5518, 4932, 7880, 6996, 5761, 6828, 6909, 9431, 4313, 2265, 7709, 5131, 2054, 8212, 9285, 7945, 612, 6055, 7189, 8539, 8201, 2209, 98, 9329, 4281, 441, 7230, 3582, 2502, 8432, 9749, 1267, 4111, 4289, 6793, 8238, 6892, 7665, 9252, 2065, 9817, 8868, 2133, 4519, 1916, 3035, 7547, 9217, 9438, 4473, 7162, 6652, 2540, 5290, 1502, 7302, 3917, 6100, 6211, 286, 8413, 8380, 5514, 5858, 7280, 3490, 3907, 1, 1428, 8825, 8339, 8809, 7713, 7770, 3873, 3474, 6775, 9126, 3081, 7613, 4017, 445];
// const numbers = aHundredNums.reduce((total, num, index,array)=>{
//     let totalDone = total+num;
//   return  index === array.length -1 ?parseFloat((totalDone/array.length).toFixed(2)):totalDone
// });



// const cars = [
//     {
//         make: "Honda",
//         model: "Civic",
//         mileage: 10428
//     },
//     {
//         make: "Toyota",
//         model: "Corolla",
//         mileage: 9425
//     },
//     {
//         make: "Ford",
//         model: "Mustang",
//         mileage: 2567
//     },
//     {
//         make: "Audi",
//         model: "A3",
//         mileage: 14500
//     },
//     {
//         make: "Mazda",
//         model: "3",
//         mileage: 11248
//     }
// ];
// const mileage = cars.reduce((acc, car)=>acc+car.mileage,0);
// const totalYears = users.reduce((acc, curr)=>{
//     return acc+ curr.yearsOfExperience,
//         0;
// });
// const longestEmail = users.reduce((acc,email,index,array) =>{
//     if(users.email.length> acc.length){
//         return email;
//     }
// });
const usersNames = users.reduce((acc,name,index,array)=>{
    acc.push(name.name);
    return acc

},[]);
// TODO: Given the following array, complete the todos...

const dogs = [
    {
        dogName: 'Bubbles',
        age: 10,
        isTrained: false
    },
    {
        dogName: 'Lexie',
        age: 3,
        isTrained: true
    },
    {
        dogName: 'Doggy',
        age: 5,
        isTrained: false
    },
    {
        dogName: 'Flopper',
        age: 3,
        isTrained: true
    },
    {
        dogName: 'Lexie',
        age: 1,
        isTrained: true
    },
    {
        dogName: 'Skip',
        age: 7,
        isTrained: true
    },
    {
        dogName: 'Blue',
        age: 4,
        isTrained: false
    }
];

// MAP

// TODO 1: using map, create a new array of dog names from the dogs array
console.log('Exercise 1:');
const dogNames = dogs.map(name =>{
    return name.dogName
});

// TODO 2: using map, create a new array of dog ages from the dogs array
console.log('Exercise 2:');
const ages = dogs.map(age => age.age);
// TODO 3: using map, create a new array of dog objects from the dogs array that only have dog names and age properties and values
console.log('Exercise 3:');

const dogObj = dogs.map(obj => {
    return {dogNmae:'obj.dogName', age:`obj.age`};
})
// FILTER

// TODO 4: using filter, create a new array containing only dogs younger than 10 years old
console.log('Exercise 4:');

// TODO 5: using filter, create a new array containing only dogs named 'Lexie'
console.log('Exercise 5:');

// TODO 6: using filter, create a new array containing only dogs that are trained and younger than 10
console.log('Exercise 6:');


// REDUCE

// TODO 7: using reduce, return a string containing all dog names together with no spaces ("BubblesLexieDoggy...")
console.log('Exercise 7:');

// TODO 8: using reduce, return the total of adding all dog ages together (18)
console.log('Exercise 8:');

// TODO 9: using reduce, return an array of dog objects with all isTrained properties set to true
console.log('Exercise 9:');


// EXTRA CHALLENGES

// TODO 10: what is the average age of each dog?
console.log('Exercise 10:');

// TODO 11: what is the average age of dogs that are trained?
console.log('Exercise 11:');

// TODO 12: what is the average length of names of untrained dogs?
console.log('Exercise 12:');

// TODO 13: what are the combined ages of all dogs in dog years? (7x more than a human year)
console.log('Exercise 13:');

// TODO 14: create a string of the first letters of each dog name for dogs three years old (should be "LF")
console.log('Exercise 14:');