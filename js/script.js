var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var allNames = femaleNames.concat(maleNames);
var newName = prompt("Add new name: ");
if (allNames.indexOf(newName)===-1) {
	allNames.push(newName);
	console.log('Add ' + newName + 'to array');
}
else {
	console.log('This name is currently in array.(index: ' + allNames.indexOf(newName) + ')');
}