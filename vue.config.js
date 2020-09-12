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
				"@api": path.resolve(__dirname, "./src/api"),
				"@design": path.resolve(__dirname, "./src/design"),
			},
			extensions: [".js", ".vue", ".json"],
		},
	},
	css: {
		loaderOptions: {
			sass: {
				additionalData: `@import "@design"`,
			},
			scss: {
				additionalData: `@import "@design";`,
			},
		},
	},
	chainWebpack: (config) => {
		config.module
			.rule("fonts")
			.test(/\.(ttf|otf|eot|woff|woff2)$/)
			.use("file-loader")
			.loader("file-loader")
			.tap((options) => {
				options = {
					limit: 10000,
					name: "/assets/fonts/[name].[ext]",
				};
				return options;
			})
			.end();
	},
};
