import { defineConfig } from 'unocss'

export default defineConfig({
  // ...UnoCSS options
  rules: [
    ['blue', { color: 'blue' }],
    ['ft20', { 'font-size': '20px' }],
  ],
  shortcuts: {
    'ft20-blue': 'blue ft20'
  }
})