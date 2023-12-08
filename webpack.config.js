import HtmlWebpackPlugin from "html-webpack-plugin";
import { swcConfig } from "./swc.js";
import path from "path";

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
        minimize: false,
        // chunkIds: "named",
        // flagIncludedChunks: false,
        // mangleExports: false,
        // mangleWasmImports: false,
        // moduleIds: "named",
    },
    // resolve: {
    //     // So Webpack can map ".js" extension files in import to their original file.
    //     // For more info, view https://github.com/webpack/webpack/issues/13252
    //     extensionAlias: {
    //         ".js": [".ts", ".tsx", ".js"],
    //     },
    //     // Must add ".js" for files imported from node_modules.
    //     extensions: [".js", ".ts", ".tsx", ".css"],
    // },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
    ],
};
