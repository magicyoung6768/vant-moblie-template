import { VantResolver } from '@vant/auto-import-resolver'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'
import pxtorem from 'postcss-pxtorem'
import tailwindcss from 'tailwindcss'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ConfigEnv, defineConfig, loadEnv, UserConfig } from 'vite'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'

export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  const env = loadEnv(mode, process.cwd())
  return {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      },
      extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue', '.mjs', '.mts']
    },
    plugins: [
      vue(),
      vueJsx(),
      vueSetupExtend(),
      AutoImport({
        imports: ['vue', 'vue-router', 'pinia'],
        resolvers: [VantResolver()]
      }),
      Components({
        resolvers: [VantResolver()]
      })
    ],
    css: {
      postcss: {
        plugins: [
          pxtorem({
            // rootValue: 37.5, 如果设计稿的尺寸不是 375，而是 750
            rootValue({ file }: { file: string }) {
              return file.indexOf('vant') !== -1 ? 37.5 : 75
            },
            propList: ['*']
          }),
          tailwindcss()
        ]
      }
    },
    server: {
      host: '0.0.0.0',
      port: 8080,
      open: true,
      hmr: true,
      proxy: {
        '/api': {
          target: env.VITE_BASE_URL,
          secure: false,
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, 'api')
        }
      }
    },
    build: {
      sourcemap: false,
      terserOptions: {
        compress: {
          keep_infinity: true,
          drop_console: true,
          drop_debugger: true
        }
      },
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return id.toString().split('node_modules/')[1].split('/')[0].toString()
            }
          }
        }
      }
    }
  }
})
