const fs = require('fs');
const iconv = require('iconv-lite');
const csv = require('csv-parse/sync');

const files = fs.readdirSync('.');
const file = files.filter(x => x.includes('原始数据') && x.includes('.csv'))[0];
const f = fs.readFileSync(`./${file}`);

const decoded = iconv.decode(f, 'gb2312');
const data = csv.parse(decoded, {
	columns: true,
	skipEmptyLines: true
});

const map = {
	email: 'Q1',
	official: 'Q2',
	id: 'Q3',
	gender: 'Q4',
	rank: 'Q8',
	suggestions: 'Q9',
	'sharable-preference': 'Q10',
	startTime: '开始时间',
	submissionTime: '提交时间'
};
const sharableMap = {
	T5: 'Q6',
	T6: 'Q7',
	T7: 'Q8'
};

const questionRaws = Object.keys(data[0]).filter(k => /Q\d+/.test(k));
const questionTexts = questionRaws
	.map(x => x.split('？')[0])
	.map(x => x.split('。')[0])
	.map(x => x.split(/Q\d+_/)[1]);

function getFirstValueByPartialKey(partial, dictionary) {
	return dictionary[Object.keys(dictionary).filter(k => k.includes(partial))[0]];
}

function getFirstValueByPartialKeyMapped(targetName, dictionary) {
	return getFirstValueByPartialKey(map[targetName], dictionary);
}

function getSharables(sharablePreference, dictionary) {
	let result = {};
	Object.keys(sharableMap)
		.filter(k => sharablePreference.includes(k))
		.forEach(k => {
			let Qnumber = sharableMap[k];
			let Qtext = questionTexts[questionRaws.indexOf(questionRaws.filter(x => x.includes(Qnumber))[0])];
			let pre = getFirstValueByPartialKey(Qnumber, dictionary).replace(/\n/g, '<br/>');
			if (pre.trim().length > 0) result[Qtext] = pre;
		});
	return result;
}

const passedIds = ['JesseM1024', 'Gao_Shi_Ya', 'Qing_Ming', 'GoldStorm_XX', 'awedwd', 'Haruitsuki', 'sotireddddd', 'xiang_yang_hua', 'Yuki_nohana', 'bluelingb', 'usua233', 'liancya', 'LanXingYa', 'Xiao_Lin_Ya', 'Curvature_'];

const date = new Date();

function withZero(digit) {
	return digit.toString().length === 1 ? `0${digit}` : digit;
}

const applications = Object.values(data).map(d => {
	return {
		id: getFirstValueByPartialKeyMapped('id', d),
		passed: passedIds.includes(getFirstValueByPartialKeyMapped('id', d)),
		sharables: getSharables(getFirstValueByPartialKeyMapped('sharable-preference', d), d),
		submissionDate: getFirstValueByPartialKeyMapped('submissionTime', d)
	};
});

fs.writeFileSync(`src/data/applications/applications_${date.getTime()}.json`, JSON.stringify(applications));
