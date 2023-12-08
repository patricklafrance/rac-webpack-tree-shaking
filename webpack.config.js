import HtmlWebpackPlugin from "html-webpack-plugin";
import { swcConfig } from "./swc.js";
import path from "path";
import TerserPlugin from "terser-webpack-plugin";

export default {
    mode: "production",
    target: "web",
    entry: "./src/index.jsx",
    output: {
        path: path.resolve("dist"),
        // The trailing / is very important, otherwise paths will ne be resolved correctly.
        publicPath: "http://localhost:8080/",
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "swc-loader",
                    options: swcConfig,
                },
            },
            {
                // https://stackoverflow.com/questions/69427025/programmatic-webpack-jest-esm-cant-resolve-module-without-js-file-exten
                test: /\.(js)$/,
                include: /node_modules/,
                resolve: {
                    fullySpecified: false,
                },
            },
        ],
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    compress: {
                        unused: true,
                        dead_code: true,
                        // Keeping these to be able to search for components in the outputed bundle.
                        keep_classnames: true,
                        keep_fargs: true,
                        keep_fnames: true,
                        keep_infinity: true,
                    },
                },
            }),
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
    ],
};
