const url = 'https://love-calculator.p.rapidapi.com/getPercentage?sname=Alice&fname=John';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '082a4a25camshbbd1caf46808d33p1684f6jsnf767993f8e16',
		'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}