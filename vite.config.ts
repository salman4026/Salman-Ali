import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync, existsSync, mkdirSync, readdirSync } from 'fs'
import { join } from 'path'

// Recursive function to copy directory
function copyDir(src: string, dest: string) {
  if (!existsSync(src)) return
  
  if (!existsSync(dest)) {
    mkdirSync(dest, { recursive: true })
  }
  
  const entries = readdirSync(src, { withFileTypes: true })
  
  for (const entry of entries) {
    const srcPath = join(src, entry.name)
    const destPath = join(dest, entry.name)
    
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath)
    } else {
      copyFileSync(srcPath, destPath)
    }
  }
}

// Plugin to copy images folder to dist
const copyImagesPlugin = () => {
  return {
    name: 'copy-images',
    writeBundle() {
      const imagesDir = join(process.cwd(), 'images')
      const distImagesDir = join(process.cwd(), 'dist', 'images')
      copyDir(imagesDir, distImagesDir)
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), copyImagesPlugin()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
  assetsInclude: ['**/*.jpg', '**/*.jpeg', '**/*.png', '**/*.gif', '**/*.svg', '**/*.webp'],
})
