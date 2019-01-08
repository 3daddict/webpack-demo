const webpackConfig = {
    entry: "./src/index.js",
    output: {
        path: __dirname + "/dist",
        filename: "main.js"
    },
    module: {
        rules: [
            {
                loader: "babel-loader",
                test: /$.js/,
                exclude: /node_modules/
            }
        ]
    }
};

module.exports = webpackConfig;