import path from "path"
import HTMLWebpackPlugin from "html-webpack-plugin"
import webpack from "webpack"

const config: webpack.Configuration = {
    // режим сборки
    mode: "development",
    // точка входа
    entry: path.resolve(__dirname, "src", "index.ts"),
    // выходной файл и путь до него
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "build"),
        clean: true,
    },
    // список плагинов
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, "public", "index.html"),
        }),
        new webpack.ProgressPlugin(),
    ],

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },

    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
}

export default config;