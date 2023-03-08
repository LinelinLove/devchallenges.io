const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // publicPath: '/portfolio/'
  publicPath: process.env.NODE_ENV === 'production'
  ? '/devchallenges.io/responsive-web-developer/8-portfolio/dist/'
  : '/'
})
