module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "output.js",
        path: __dirname + "/dist"
    },
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
        ]
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
}