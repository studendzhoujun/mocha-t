module.exports = {
    entry: './index.ts',
    output: {
        path: __dirname + '/dist',
        filename: 'index.js',
    },
    devtool: 'source-map',
    resolve: {
        // Add '.ts' and '.tsx' as a resolvable extension.
        extensions: [".ts", ".tsx", ".js", ".d.ts"],
    },
    module: {
        rules: [
            // {
            //     test: /\.js$/,
            //     // exclude: /(node_modules|bower_components)/,
            //     use: [
            //         {
            //             loader: 'babel-loader'
            //         }
            //     ]
            // },
            {
                test: /\.ts$/,
                // exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'ts-loader'
                    }
                ]
            },
        ]
    },
}