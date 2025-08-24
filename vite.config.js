import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest:{
    "name": "VA Symptom Log Tracker",
    "short_name" : "VA symptom log",
    "start_url": ".",
    "display": "standalone",
    "theme_color": "#8B0000",
    "background_color":"#ffffff",
    "theme_color": "#800000",
    "icons": [
        {
            "src":"/vetlogo.png",
            "sizes": "192x192",
            "type": "image/png"
        },
        {
            "src":"/vetlogo.png",
            "sizes": "512x512",
            "type": "image/png"
        }
    ]
      }
    })
  ],
})
