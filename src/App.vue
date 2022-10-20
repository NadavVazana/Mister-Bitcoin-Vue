<script >
import AppHeader from './views/app-header.vue';
import AppFooter from './views/app-footer.vue';

export default{
  components:{
    AppFooter,
    AppHeader
  }
}
</script>

<template>
  <header>

    <div class="wrapper">
      <AppHeader />
      
    </div>
  </header>

  <RouterView />

  <AppFooter />
</template>

<style >





</style>
