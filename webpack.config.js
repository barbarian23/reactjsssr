const nodeExternals = require("webpack-node-externals");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require("path");

const js = {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
        loader: "babel-loader",
        options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
        },
    },
};


const css = {
    test: /\.css$/,
    exclude: /node_modules/,
    use: [
        //{ loader: 'style-loader' }, 
        MiniCssExtractPlugin.loader, 'css-loader',
        // {
        //     loader: 'css-loader',
        //     options: {
        //         sourceMap: true
        //     }
        // }
    ]
};

const file = {
    test: /\.(png|jpg|gif)$/i,
    use: [
        {
            loader: 'file-loader',
        },
    ],
};


const serverConfig = {
    mode: "development",
    target: "node",
    node: {
        __dirname: false,
    },
    externals: [nodeExternals()],
    entry: {
        "index": path.resolve(__dirname, "server/server.js"),
    },
    module: {
        rules: [js, css, file],
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
    ]
};

const clientConfig = {
    mode: "development",
    target: "web",
    entry: {
        //"client.js": path.resolve(__dirname, "client/client.js"),
        "client": path.resolve(
            __dirname,
            "client/client.js"
        ),
    },
    module: {
        rules: [js, css, file],
    },
    optimization: {
        splitChunks: {
            chunks: "all",
        },
    },
    output: {
        path: path.resolve(__dirname, "dist/public"),
        filename: "[name].js",
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
        // new HtmlWebpackPlugin({
        //     template: __dirname + '/client/template.html',
        //     inject: 'body',
        //     filename: "index.html",

        // })
    ]
};

module.exports = [serverConfig, clientConfig];