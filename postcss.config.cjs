module.exports = (ctx) => {
  const isProd = ctx.env === 'production' || process.env.NODE_ENV === 'production';
  console.log('PostCSS Config Loaded. Mode:', ctx.env, 'isProd:', isProd);

  return {
    plugins: [
      isProd &&
        require('@fullhuman/postcss-purgecss')({
          content: ['./index.html', './src/**/*.{js,html}'],
          safelist: ['font-test'],
        }),
      isProd &&
        require('cssnano')({
          preset: 'default',
        }),
    ].filter(Boolean),
  };
};
