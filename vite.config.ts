import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  base: '/swipy-nav/',
  plugins: [react()],
  resolve: {
    alias: {
      '#': path.resolve(__dirname, './src'),
    },
    conditions: ['import', 'module'],
  },
})
