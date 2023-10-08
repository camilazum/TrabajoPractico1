/** @type {import('jest').Config} */
const config = {
    verbose: true,
    transformIgnorePatterns: ['node_modules/(?!(react-native|@react-native|react-navigation)/)'],
    preset: 'react-native',
    testEnvironment: 'node',
    
};

module.exports = config;