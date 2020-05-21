const dogs = [ { name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 } ];

function makeGreen() {
	const p = document.querySelector('p');
	p.style.color = '#BADA55';
	p.style.fontSize = '50px';
}

// Regular
console.log('hei');

// Interpolated
console.log('Hello, I am a %s string %s!', 'cool', 'thing');
//console.log(`Hello I am a ${varname} string ${var2name}!`)

// Styled
console.log('%cI am text', 'font-size:20px; background: lightgreen;');

// warning!
console.warn('WARNING, WARNING');

// Error :|
console.error('You broke it!');

// Info
console.info('Mane is beat');

// Testing
const p = document.querySelector('p');
//throws assertion failed with msg if false, does nothing if true
console.assert(p.classList.contains('list'), `That's not right!`);

// clearing
//clears console unless 'preserve log' is ticked
console.clear();

// Viewing DOM Elements
console.dir(p);

// Grouping together
dogs.forEach((dog) => {
	//alternatively .groupCollapsed (collapsed by default)
	console.group(`${dog.name}`);
	console.log(`This is ${dog.name}`);
	console.log(`${dog.name} is ${dog.age} years old`);
	console.log(`${dog.name} is ${dog.age * 7} dog years old`);
	console.groupEnd(`${dog.name}`);
});

// counting
console.count('Pete');
console.count('Pete');
console.count('Petter');
console.count('Pete');

// timing
// Displays how long some operation(s) take
console.time('fetching data');
fetch('https://api.github.com/users/mlbakke').then((data) => data.json()).then((data) => {
	console.timeEnd('fetching data');
	console.log(data);
});

// table
console.table(dogs);
