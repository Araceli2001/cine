module.exports = {
    mode:"development",
    entry: {
        index:"/scripts/index.js",
        films:"/scripts/postMovie.js"
    },

    output: {
        filename : "[name].js",
        path: __dirname + "/public"
    },
};