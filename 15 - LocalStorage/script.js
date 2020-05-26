const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
//fill items with locally stored items, if none exist : empty array
let items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(e) {
	e.preventDefault();
	const text = this.querySelector('[name=item]').value;
	const item = {
		text,
		done : false
	};
	items.push(item);
	populateList(items, itemsList);
	//save items as string in local storage
	localStorage.setItem('items', JSON.stringify(items));
	this.reset();
}

function populateList(plates = [], platesList) {
	platesList.innerHTML = plates
		.map((plate, i) => {
			return `<li>
            <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
            <label for="item${i}">${plate.text}</label>
        </li>`;
		})
		.join('');
}

function toggleDone(e) {
	if (!e.target.matches('input')) return; //skip unless input
	const targetIdx = e.target.dataset.index;
	items[targetIdx].done = !items[targetIdx].done;
	localStorage.setItem('items', JSON.stringify(items));
	populateList(items, itemsList);
}

//CHECK, UNCHECK and CLEAR all items
const check = document.querySelector('.check');
const uncheck = document.querySelector('.uncheck');
const clear = document.querySelector('.clear');

check.addEventListener('click', () => {
	items.forEach((element) => {
		element.done = true;
	});
	localStorage.setItem('items', JSON.stringify(items));
	populateList(items, itemsList);
});

uncheck.addEventListener('click', () => {
	items.forEach((element) => {
		element.done = false;
	});
	localStorage.setItem('items', JSON.stringify(items));
	populateList(items, itemsList);
});

clear.addEventListener('click', () => {
	populateList((items = []), itemsList);
	localStorage.setItem('items', JSON.stringify(items));
});

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);

populateList(items, itemsList);
