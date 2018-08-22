module.exports = {
	entry: "./client/app.jsx",
	output: {
		path: __dirname + "/public/js/",
		filename: "bundle.js"
	},
	devtool: "#sourcemap",
	stats: {
   colors: true,
   reasons: true
  },
	module: {
		loaders: [
		{test: /\.css$/, loader: 'style-loader!css-loader'},
		{
			test: /\.jsx$/,
			exclude: /(node_modules)/,
			loaders: ["babel-loader"]
		}
		]
	}
}