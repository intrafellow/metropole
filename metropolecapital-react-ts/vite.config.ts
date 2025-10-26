import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { fileURLToPath } from 'node:url';

const r = (p: string) => fileURLToPath(new URL(p, import.meta.url));

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      '@app': r('./src/app'),
      '@styles': r('./src/styles'),
      '@models': r('./src/models'),
      '@controllers': r('./src/controllers'),
      '@components': r('./src/views/components'),
      '@pages': r('./src/views/pages')
    }
  },
server: {
  port: 5173,
  strictPort: true,
  host: true, // ✅ Разрешает внешний доступ
  allowedHosts: [
    '.localhost',
    '.loca.lt',   // ✅ Разрешает все поддомены LocalTunnel
    '.ngrok-free.app', // (если когда-нибудь решишь сменить туннель)
    '.trycloudflare.com', // (если используешь cloudflare tunnel)
    '*', // ✅ И вообще все (только для dev!)
  ],
}
});
