import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  build: {
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          console.log(id);
          if (id.includes('node_modules/moment')) {
            return 'moment';
          } else {
            return 'index';
          }
        },
      },
    },
  },
})
