const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
    mode: "development",
    entry: path.join(__dirname, 'src', 'main.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        alias: {
            "vue$": "vue/dist/vue.js"
        }
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }, {
            test: /\.less$/,
            use: ['style-loader','css-loader', 'less-loader']
        }, {
            test: /\.scss/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }, {
            test: /\.vue$/,
            use: ['vue-loader']
        }, {
            test: /\.(jpg|png|gif|bmp|jpeg)$/,
            use: 'url-loader'
        }, {
            test: /\.(otf|eot|svg|ttf|woff|woff2)$/,
            use: 'url-loader'
        },{
            test:/\.js$/,
            use:"babel-loader",
            exclude:/node_modules/
        }]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}