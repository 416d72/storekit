const cssnano = require('cssnano');

const production = process.env.PRODUCTION;

const config = {
	plugins: [
		//Some plugins, like tailwindcss/nesting, need to run before Tailwind,
		require('tailwindcss'),
		//But others, like autoprefixer, need to run after,
		require('autoprefixer'),
		production && cssnano({ preset: 'default' })
	]
};

module.exports = config;
