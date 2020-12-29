module.exports = ctx => ({
    map: ctx.env === 'development' ? ctx.map : false,
    plugins: {
        'postcss-import':{},
        'postcss-preset-env': { stage: 1 },
        'postcss-csso':{}
    },
})
