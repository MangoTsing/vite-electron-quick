/**
 * 参考链接: https://github.com/vitejs/vite/blob/master/src/node/config.ts
 * 直接 cmd+左键 点进配置项查看即可
 */
import { join } from 'path'
import { UserConfig } from 'vite'
import dotenv from 'dotenv'
import vue from '@vitejs/plugin-vue'

dotenv.config({ path: join(__dirname, '.env') })
const root = join(__dirname, 'src/render')

const config: UserConfig = {
  root,
  alias: {
    // 别名必须以 / 开头、结尾
    '/@': root,
  },
  build: {
    base: '.',
    outDir: join('../../dist/render')
  },
  server: {
    port: +process.env.PORT,
  },
  plugins: [
    vue()
  ],
  optimizeDeps: {
    auto: true,
    exclude: [
      'electron-is-dev',
      'electron-store',
    ]
  },
}

export default config
