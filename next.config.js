// next ts
const withTypescript = require("@zeit/next-typescript")


module.exports = withTypescript({
	webpack: (config, options) => config,
})
