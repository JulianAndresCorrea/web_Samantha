import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANTE PARA GITHUB PAGES:
  // Si tu repositorio se llama "safiro-nails", debes descomentar la línea de abajo 
  // y poner el nombre exacto de tu repositorio entre las barras.
  base: '/web_Samantha/',
})
