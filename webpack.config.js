module.exports = {
    entry: './scripts/init.js',
    output: {
        path: `${__dirname}/dist`,
        filename: 'init.js',
        libraryTarget: 'umd'
    },
    mode: 'production',
    module: {
        rules: [
            {
                resourceQuery: /raw/,
                type: 'asset/source'
            }
        ],
    },
    resolve: {
        extensions: ['.js']
    },
    optimization: {
        minimize: true,
        removeAvailableModules: true
    }
}
