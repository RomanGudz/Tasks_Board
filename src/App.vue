<template>
  <the-navbar>
  </the-navbar>
  <div class="container with-nav">
    <router-view />
  </div>
</template>

<script>
import TheNavbar from './components/TheNavbar'


export default {
  components: {
    TheNavbar
  },
}
</script>

<style></style>


<!-- план по реализации: 
  добавить все страницы для того чтобы работали vuerouter
  реализация через Api 
  добавления vuex
  подключение базы данных -->