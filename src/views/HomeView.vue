<script >
import { bitcoinService } from '../services/bitcoin.service'
import { userService } from '../services/user.service'

export default{
  
  data(){
    return{
      user:null,
      rate: 0
    }
  },
  async created(){
    this.user = await userService.getUser()
    const rate =  await bitcoinService.getRate()
    this.rate = rate.data
    
  }
}
</script>

<template>
  <div v-if="user" class="home-page">
  <h1>Welcome to Mr Bitcoin!</h1>
  <div class="user-details">
    <h2>Current User Details:</h2>
    <h2 class="username">Username:   {{user.name}}</h2>
    <h2 class="balance">Balance:     {{user.balance}}</h2>
    <h2 class="rate">Bitcoin Rate:   {{rate}}</h2>
  </div>

</div>

</template>

<style lang="scss">
.home-page{
  height: 100vh;
  .user-details{
    border: 1px solid black;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    left: 50%;
    top: 20%;
    transform: translate(-50%,-50%);
  }
  h1{
    text-align: center;
    padding-top: 20px;
    font-size: 3rem;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    color: rgb(82, 78, 78);
  }
}
</style>
