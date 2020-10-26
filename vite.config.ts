/**
 * 参考链接: https://github.com/vitejs/vite/blob/master/src/node/config.ts
 * 直接 cmd+左键 点进配置项查看即可
 */
import { join } from 'path'
import { UserConfig } from 'vite'
import dotenv from 'dotenv'

dotenv.config({ path: join(__dirname, '.env') })
const root = join(__dirname, 'src/render')

const config: UserConfig = {
  root,
  port: +process.env.PORT,
  base: './',
  outDir: join(__dirname, 'dist/render'),
  alias: {
    // 别名必须以 / 开头、结尾
    '/@/': root,
  },
  rollupInputOptions: {
    external: ''
  },
  optimizeDeps: {
    auto: true,
    exclude: [
      'electron-is-dev',
      'electron-store',
    ]
  },
  cssPreprocessOptions: {
    sass: {
      modifyVars: {
        '$custom-success-color': '#00c13c',
        '$custom-font-color': '#333333',
        '$custom-info-color': '#999999',
        '$custom-tag-color': '#f5f5f5',
        '$custom-danger-color': '#ee3300',
      }
    }
  }
}

export default config
