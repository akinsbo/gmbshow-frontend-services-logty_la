const path = require('path');
const glob = require('glob');

module.exports = {
    title: 'React Style Guide Example',
    components: function() {
        return glob.sync(path.resolve(__dirname, 'src/components/**/*.tsx'))
            .filter(function(module) {
                return /\/[A-Z]\w*\.tsx$/.test(module);
            });
    },
    webpackConfig: require('./webpack.dev.js'),
    resolver: require('react-docgen').resolver.findAllComponentDefinitions,
    propsParser: require('react-docgen-typescript').withCustomConfig("./tsconfig.json", { propFilter: { skipPropsWithoutDoc: true } }).parse
};