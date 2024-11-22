<script setup lang="ts">
import { SettingsButton, useWebApp, useWebAppMainButton } from 'vue-tg';

import { } from 'vue-tg';

  // получаем объект как из window.Telegram.WebApp
  const app = useWebApp();
  console.log(app, 'app')

  // app.sendData('hello from mini app');

  const mainButton = useWebAppMainButton();

  // не работает ...
  // const settingsButton = useWebAppSettingsButton();

  mainButton.setMainButtonText('hello');
  // mainButton.showMainButton();


  const handleInit = () => {
    console.log('run handle init')
  }

  const handleMainButtonProgress = () => {
    mainButton.showMainButtonProgress();
  }

  function handleScanResult(data: string) {
  // ...
  }

  function handleSettingsButton() {
  // ...
  console.log('handleSettingsButton clicked')
}

</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
    <div class="wrapper">
      <!-- <MiniApp msg="You did it!" /> -->
      <button @click="handleMainButtonProgress">Прогресс</button>
    </div>
    <!-- alert show alert message-->
    <!-- <tg-alert message="Hello!" /> -->

    <!-- show confirmation popup with OK and Cancel buttons -->
    <!-- <tg-confirm title="Confirmation" message="Are you sure?" /> -->

    <!-- show confirmation popup with close and closeanyway buttons -->
    <!-- <ClosingConfirmation  /> -->

    <!-- запускает Camera QR-->  
    <!-- <ScanQr @result="handleScanResult"/> -->

    <!-- запускает Camera QR-->  
    <SettingsButton @click="handleSettingsButton" />

    <!-- не понятно -->
    <!-- <tg-expanded-viewport force='true'/> -->
    <!-- <BiometricManager @init='handleInit' /> -->

  </header>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
