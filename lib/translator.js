


function start(){
	document.getElementById('change').addEventListener('click', swap, false);
	document.querySelector('#frombox textarea').addEventListener('input', translating, false);
	document.querySelector('#tobox select').selectedIndex = 1;

}

function swap(){

	let from = document.getElementById('from');
	let to = document.getElementById('to');
	let temp = "";

	temp = from.value;
	from.value = to.value;
	to.value = temp;

	let listfrom = document.querySelector('#frombox select');
	let listto = document.querySelector('#tobox select');
	temp = 0;

	temp = listfrom.selectedIndex
	listfrom.selectedIndex = listto.selectedIndex
	listto.selectedIndex = temp

}

function translating(){
	setTimeout(function(){
		console.log("translated!");

	}, 2000);
}


window.addEventListener('load', start, false);