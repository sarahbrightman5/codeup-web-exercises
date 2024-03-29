/*
 * Complete the TODO items below
 */
const users = [
  {
    name: 'zach',
    email: 'zach@codeup.com',
    languages: ['javascript', 'bash']
  },
  {
    name: 'ryan',
    email: 'ryan@codeup.com',
    languages: ['clojure', 'javascript']
  },
  {
    name: 'luis',
    email: 'luis@codeup.com',
    languages: ['java', 'scala', 'php']
  },
  {
    name: 'fernando',
    email: 'fernando@codeup.com',
    languages: ['java', 'php', 'sql']
  },
  {
    name: 'justin',
    email: 'justin@codeup.com',
    languages: ['html', 'css', 'javascript', 'php']
  }
];

// TODO: fill in your name and email and add some programming languages you know
// to the languages array
// TODO: replace the `var` keyword with `const`, then try to reassign a variable
// declared as `const`
const name = 'sarah brightman';
let email = 'sarah.graciela.brightman@gmail.com';
let languages = ['html','css','javascript'];

// TODO: rewrite the object literal using object property shorthand
users.push({
  name: name,
  email: email,
  languages: languages
});

// let name='codeUp';
let person ={
  name,
  age: 19,
};
// TODO: replace `var` with `let` in the following variable declarations
let emails = [];
let names = [];

// TODO: rewrite the following using arrow functions
users.forEach(function(user) {
  return emails.push(user.email);
});
users.forEach(function(user) {
  return names.push(user.name);
});
users.forEach((user) =>emails.push(user.email));
users.forEach((user)=>names.push(user.name));
// TODO: replace `var` with `let` in the following declaration
let developers = [];
users.forEach(function(user) {
  // TODO: rewrite the code below to use object destructuring assignment
  //       note that you can also use destructuring assignment in the function
  //       parameter definition
  // const name = user.name;
  // const email = user.email;
  // const languages = user.languages;
  const { name, email, languages } = users;
  // TODO: rewrite the assignment below to use template strings
  developers.push(name + '\'s email is ' + email + name + ' knows ' + languages.join(', '));
  developers.push(`${name}s email is  ${email}  ${name}  knows  ${languages}`);
});

// TODO: Use `let` for the following variable
let list = '<ul>';

// TODO: rewrite the following loop to use a for..of loop
developers.forEach(function (developer) {

  // TODO: rewrite the assignment below to use template strings
  list += '<li>' + developer + '</li>';
});
for(let developer of developers){
  list += `<li> ${developer} </li>`;
}
list += '</ul>';
let randomNumbers = [70, 30, 73, 22, 40, 48, 76, 20, 13, 92, 20, 56, 97, 76, 26, 77, 57, 47, 83, 70 ];
const squareEm = randomNumbers.map( num =>num**2);
// const cars = [
//   {
//     make: "Honda",
//     model: "Civic",
//     mileage: 10428
//   },
//   {
//     make: "Toyota",
//     model: "Corolla",
//     mileage: 9425
//   },
//   {
//     make: "Ford",
//     model: "Mustang",
//     mileage: 2567
//   },
//   {
//     make: "Audi",
//     model: "A3",
//     mileage: 14500
//   },
//   {
//     make: "Mazda",
//     model: "3",
//     mileage: 11248
//   }
// ];
const books = [
  {
    title: "Mexican Gothic",
    author: {
      firstName: "Sylvia",
      lastName: "Moreno"
    }
  },
  {
    title: "All Systems Red",
    author: {
      firstName: "Martha",
      lastName: "Wells"
    }
  },
  {
    title: "1177 B.C.: The Year Civilization Collapsed",
    author: {
      firstName: "Eric",
      lastName: "Cline"
    }
  },
  {
    title: "Version Control With Git",
    author: {
      firstName: "Jon",
      lastName: "Loeliger"
    }
  },
  {
    title: "Data Structures the Fun Way",
    author: {
      firstName: "Jeremy",
      lastName: "Kubica"
    }
  }
]
const authors = books.map(author => `${books.author.firstName} ${books.author.lastName}` );


w


