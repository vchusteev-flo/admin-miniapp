<template>
    <div className="flex flex-col h-screen bg-gray-100">
      <main className="flex-1 overflow-y-auto p-4">
        <router-view />
      </main>
        <Sidebar />
    </div>
</template>

<script setup lang="ts">
import { Sidebar } from '@/components/ui/sidebar';
import { useWebApp, useWebAppMainButton } from 'vue-tg';
// получаем объект как из window.Telegram.WebApp
const app = useWebApp()
console.log(app, 'app')

// app.sendData('hello from mini app');

const mainButton = useWebAppMainButton()

// не работает ...
// const settingsButton = useWebAppSettingsButton();

mainButton.setMainButtonText('hello')
// mainButton.showMainButton();

const handleInit = () => {
  console.log('run handle init')
}

const handleMainButtonProgress = () => {
  mainButton.showMainButtonProgress()
}

function handleScanResult(data: string) {
  // ...
}

function handleSettingsButton() {
  // ...
  console.log('handleSettingsButton clicked')
}
</script>