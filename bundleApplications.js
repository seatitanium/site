const fs = require('fs');

const appls = fs.readdirSync('./src/data/applications');

let result = [];

function isIn(container, element) {
	for (e of container) {
		if (e.id === element.id && e.submissionDate === element.submissionDate) return true;
	}
	return false;
}

appls.forEach(filename => {
	let f = fs.readFileSync(`./src/data/applications/${filename}`).toString('utf-8');
	let array = JSON.parse(f);
	array.forEach(x => {
		if (!isIn(result, x)) result.push(x);
	});
});

fs.writeFileSync('./src/applications-st11.json', JSON.stringify(result));
