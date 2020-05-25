// start with strings, numbers and booleans
let age = 100;
let age2 = age;
age = 200;
//age is now 200, age2 is still 100. Strings and booleans work the same way.
// You copy the value instead of making a reference to the variable

// Let's say we have an array
const players = [ 'Wes', 'Sarah', 'Ryan', 'Poppy' ];
// and we want to make a copy of it.
const players2 = players;
// You might think we can just do something like this:
// players2[3] = 'Martin';
//Because we make a referance to players (instead of copying the value),
// both arrays would now be changed

// however what happens when we update that array?

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!
const team = players.slice();

// or create a new array and concat the old one in
const team2 = [].concat(players);

// or use the new ES6 Spread
const team3 = [ ...players ];

//or
const team4 = Array.from(players);

// now when we update it, the original one isn't changed
team3[3] = 'Petter Stordalen';
console.log(team3);
console.log(players);

// The same thing goes for objects, let's say we have a person object
// with Objects
const person = {
	name : 'Wes Bos',
	age  : 80
};

// and think we make a copy:
const captain = person;
captain.number = 9;
// This, again, is a reference, not a copy. Now "person" also has a number of 9.

// how do we take a copy instead?
const cap = Object.assign({}, person, { number: 9, age: 26 });

// We will hopefully soon see the object ...spread
const cap2 = { ...person };
cap2.age = 2;
// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

const me = {
	name    : 'Martin',
	age     : 30,
	hobbies : [ 'football', 'music', 'movies' ]
};

console.log(me);

const me2 = Object.assign({}, me);

//      me2.hobbies.push('programming');
// Because we go down a level, me.hobbies would also get 'programming' pushed

// "Poor man's deepclone":
const me3 = JSON.parse(JSON.stringify(me));
me3.hobbies.push('programming');
// now only "me3" has programming as a hobby
