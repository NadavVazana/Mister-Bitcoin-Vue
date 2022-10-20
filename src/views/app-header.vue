<template>
    <div  class="app-header">
        <div @click="goHome" class="header-left">
            <img src="/imgs/icon.svg" alt="coin-icon">
  <h1>Mr Bitcoin.</h1>
</div>
<div v-if="user" class="user-details">
    <h2>{{user.name}}</h2>
    <h2>Balance:    {{user.balance}}</h2>

</div>
  <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/contact">Contacts</RouterLink>
        <RouterLink to="/statistics">Statistics</RouterLink>
      </nav>

    </div>
</template>

<script>
import { userService } from '../services/user.service';

export default {
    async created(){
         this.user = await userService.getUser()
         
    },
    data(){
        return{
            user:null
        }
    },
    methods:{
        goHome(){
            this.$router.push('/')
        }
    }
}
</script>

<style lang="scss">

.app-header{
    align-items: center;
    .user-details{
        h2{
            border-right:1px solid black ;
            padding-inline: 15px;
        }
        display: flex;
        font-size: .7rem;
    }
    padding: 10px;
    background-color: rgb(172, 164, 123);
    .header-left{
        padding-inline: 20px;
        align-items: center;
        display: flex;
        gap: 10px;
        cursor: pointer;
        h1{

            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        }
        img{
            width: 30px;
            
        }
    }

display: flex;
justify-content: space-between;
align-content: center;
nav {
   font-size: 12px; 
  text-align: center;
  display: flex;
  align-items: center;
}

nav a.router-link-exact-active {
  color: rgb(65, 65, 65);
  text-decoration: underline;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a:visited:not(.router-link-exact-active){
    color: black;
}



nav a {
    text-decoration: none;
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:hover{
    text-decoration: underline;
}

nav a:first-of-type {
  border: 0;
}}

</style>