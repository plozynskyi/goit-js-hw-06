const primaryListRef = document.querySelectorAll('#categories');
const textElements = document.querySelectorAll('h2');
const listItem = document.querySelectorAll('li.item');
const firstListItem = listItem[0].querySelectorAll('li');
const secondListItem = listItem[1].querySelectorAll('li');
const thirdListItem = listItem[2].querySelectorAll('li');

console.log(`Number of categories: ${primaryListRef.length}`);

console.log(`Category: ${textElements[0].textContent}`);
console.log(`Elements: ${firstListItem.length}`);

console.log(`Category: ${textElements[1].textContent}`);
console.log(`Elements: ${secondListItem.length}`);

console.log(`Category: ${textElements[2].textContent}`);
console.log(`Elements: ${thirdListItem.length}`);
