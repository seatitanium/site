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

const dest = 12;

const prev = fs.readFileSync(`./src/applications-st${dest-1}.json`).toString('utf-8');
const prevj = JSON.parse(prev);
result = result.slice(prevj.length - result.length);

fs.writeFileSync('./src/applications-st12.json', JSON.stringify(result));
