var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: path.resolve(__dirname, "src/main.js"),
	output: {
		path: path.resolve(__dirname, "build"),
		filename: "bundle.js",
		publicPath: "/assets/"
	},
	watch: true,
  devtool: 'source-map',
	module: {
		loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel']
      },
			{
				test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: "url-loader?limit=10000&minetype=application/font-woff"
			},
  		{
  			test: /\.(ttf|eot|svg|jpe?g|png|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
  			loader: "file-loader"
  		},
			{
				test: /\.css$/,
				loader: "style-loader!css-loader!postcss-loader"
			},
	    {
	      	test: /\.json$/,
	      	loader: "json"
	    }
		]
	},
  plugins: [
    new webpack.ProgressPlugin(function (percentage, message) {
      const percent = Math.round(percentage * 100);
      process.stderr.clearLine();
      process.stderr.cursorTo(0);
      process.stderr.write(percent + '% ' + message);
    })
  ]
};
