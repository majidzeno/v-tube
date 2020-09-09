/** @format */
const path = require("path");

module.exports = {
	// chainWebpack: (config) => {
	// 	config.resolve.alias.set("@", path.resolve(__dirname, "./src"));
	// },
	configureWebpack: {
		resolve: {
			alias: {
				"@": path.resolve(__dirname, "./src"),
				"@assets": path.resolve(__dirname, "./src/assets"),
				"@components": path.resolve(__dirname, "./src/components"),
				"@router": path.resolve(__dirname, "./src/router"),
				"@views": path.resolve(__dirname, "./src/router/views"),
				"@layout": path.resolve(__dirname, "./src/router/layout"),
			},
			extensions: [".js", ".vue", ".json"],
		},
	},
	css: {
		loaderOptions: {
			sass: {
				// additionalData: `@import "~@/variables.sass"`,
			},
			scss: {
				// additionalData: `@import "~@/variables.scss";`,
			},
		},
	},
};
