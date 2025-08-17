import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    svgr({
      exportAsDefault: true, // 👈 Quan trọng cho Vite 4.x
      enforce: 'pre'
    }),
    react(),
  ],
  resolve: {
    alias: [
      { find: '~', replacement: '/src' }
    ]
  }
})
