const path = require("path");

module.exports = {
	devServer: {
		proxy: 'http://localhost:5000'
	},
	pluginOptions: {
		'style-resources-loader': {
			preProcessor: 'less',
			patterns: [path.resolve(__dirname, './src/styles/*.less')]
		}
	},

	productionSourceMap: false
};
