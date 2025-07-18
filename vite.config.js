import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
    plugins: [vue()],
    base: '/geoceramic.github.io/',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    }
}) 