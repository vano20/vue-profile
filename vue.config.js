module.exports = {
  transpileDependencies: ['vuetify'],
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/assets/style/style.scss";
        `,
      },
    },
  },
}
