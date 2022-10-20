<template>
    <section class="login">
  <h1>Please enter your username: </h1>
  <div>
        <input v-model="username" type="text" placeholder="enter your username:">
        <button @click="onSubmit">Submit</button>
    </div>
</section>
</template>

<script>
import { userService } from '../services/user.service'
export default {
    data(){
        return{
            username:''

        }
    },
    methods:{
        onSubmit(){
            this.$store.dispatch({type:'signUp',username:this.username})
            this.$router.push('/')
        }
    }
}
</script>

<style lang="scss">
    .login{
        h1{
            font-size: 3rem;
        }
        div{
            padding-top: 20px;
            input{
            padding: 10px;
        }
        button{
            padding: 10px;
        }

        }
       
        display: flex;
        flex-direction: column;
        align-items: center;
    margin-top: 200px;    }

</style>