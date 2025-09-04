import DefaultTheme from 'vitepress/theme'
import ImageCaption from "./components/ImageCaption.vue";

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // register your custom global components
    app.component('ImageCaption', ImageCaption)
  }
}