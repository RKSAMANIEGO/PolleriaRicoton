import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '192.168.193.21', // ← tu IP local de `ipconfig`
    port: 5173,              // ← puedes cambiar si lo necesitas
    strictPort: true         // ← asegura que se use exactamente ese puerto
  }
});
