module.exports = {
	testEnvironment: 'jest-environment-jsdom',
	setupFiles: ['./jest.setup.js'],
	transformIgnorePatterns: [],
	moduleNameMapper: {
		'\\.(css|less|scss)$': 'identity-obj-proxy',
	},
	transform: { '\\.[jt]sx?$': 'babel-jest' },
};
