<script >
import { bitcoinService } from '../services/bitcoin.service'
import { userService } from '../services/user.service'

export default{
  
  data(){
    return{
      user:null,
      rate: 0,

    }
  },
  async created(){
    this.user = this.$store.getters.loggedInUser.user
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
  <h1 class="trans-title">Your Transactions:</h1>
  <ul class="trans-list">
    <li v-for="trans in user.transactions" :key="trans">
    <h1>To: {{trans.to.name}}</h1>
    <h1>Coins: {{trans.coins}}</h1></li>
  </ul>

</div>

</template>

<style lang="scss">
.home-page{
  .trans-title{
    position: absolute;
    top:40%;
    left: 50%;
    transform: translate(-40%,-50%);
  }
  .trans-list{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    list-style-type: none;
    position: absolute;
    text-align: center;
    top: 50%;
    background-color: gold;
    li{
      padding: 10px;
      width: 150px;
      height: 150px;
      border: 1px rgba(128, 128, 128, 0.185) solid;
    text-align: center;

      h1{
    text-align: center;

        font-size: 1rem;
        font-weight: 700;
      }
    }
  }
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
