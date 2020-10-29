function setup() {
	document.getElementById('change').addEventListener('click', swap, false);
	document.getElementById('translate').addEventListener('click', translate, false);
	document.querySelector('#from_options select').selectedIndex  = 0;
	document.querySelector('#to_options select').selectedIndex  = 1;
}

function translate() {
	postData("https://cors-anywhere.herokuapp.com/translate.google.com/translate_a/single?client=at&dt=t&dt=ld&dt=qca&dt=rm&dt=bd&dj=1&hl=%25s&ie=UTF-8&oe=UTF-8&inputm=2&otf=2&iid=1dd3b944-fa62-4b55-b330-74909a99969e&", {
			"sl": document.querySelector('#from_options select').value,
			"tl": document.querySelector('#to_options select').value,
			"q": document.getElementById('from').value
		})
		.then(data => {
			document.getElementById('to').value = data["sentences"][0]["trans"];
		});
}


// Ejemplo implementando el metodo POST:
async function postData(url = '', data = {}) {

	const response = await fetch(url, {
		method: 'POST',
		mode: 'cors',
		headers: {
			// 'Content-Type': 'application/json'
			"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
			"User-Agent": "AndroidTranslate/5.3.0.RC02.130475354-53000263 5.1 phone TRANSLATE_OPM5_TEST_1"
		},
		body: new URLSearchParams(data).toString() // body data type must match "Content-Type" header
	});
	return await response.json(); // parses JSON response into native JavaScript objects
}



async function setting_options() {

	let response = await fetch('/lib/languages.json');

	if (response.status == 200) {

		let data = await response.json();
		let content = '';

		for (let lang in data) {
			let option = `<option class='lang' value=${lang}>${data[lang]}</option>`
			content += option;
		};

		let lists = document.querySelectorAll("select");
		lists.forEach(list => {
			list.innerText = content;

			console.log(list);
		});

	}

}

// {
// 	let data;

// 	fetch('/lib/languages.json')
// 		.then(resp => resp.json())
// 		.then(data => console.log(data))
// 		.catch(err => console.error(err));
// }

function swap() {

	let from = document.getElementById('from');
	let to = document.getElementById('to');
	let temp = "";

	temp = from.value;
	from.value = to.value;
	to.value = temp;

	let listfrom = document.querySelector('#from_box select');
	let listto = document.querySelector('#to_box select');
	temp = 0;

	temp = listfrom.selectedIndex
	listfrom.selectedIndex = listto.selectedIndex
	listto.selectedIndex = temp

}

function translating() {
	setTimeout(function() {
		console.log("translated!");

	}, 2000);
}


window.addEventListener('load', setup, false);