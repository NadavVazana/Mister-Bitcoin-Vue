<template>
    <div class="contact-details">
  <h1>Name: {{contact.name}}</h1>
  <h1>Email: {{contact.email}}</h1>
  <h1>Phone: {{contact.phone}}</h1>
  <ul>
    <li v-for="trans in contact.trans" :key="trans">
    {{trans}}</li>
  </ul>
       
  <button> <RouterLink to="/contact">Back to the list</RouterLink></button>
  <input v-model="transfer" class="transfer-input" type="number" placeholder="coin transfer to this user:">
  <button @click="onTransfer">Transfer!</button>
</div>
</template>

<script>
import { contactService } from '../services/contactService'
export default {
    data(){
        return{
        contact: null,
        transfer:0

        }
    },
    methods:{
        onTransfer(){
            this.$store.dispatch({type:'transferToContact',coins:this.transfer,to:this.contact})

            this.$router.push('/')
        }
    },
    async created(){
        const id = this.$route.params.id
        this.contact = await contactService.getContactById(id)
        
    },
}
</script>

<style lang="scss">
 .contact-details{

    .transfer-input{
        margin-top: 20px;
    }
    width: 100%;
    a{
        color: black;
        text-decoration: none;
        padding: 10px;
        width:100%;
        height: 100%;
    }
    button{
        border: none;
        padding: 10px;
        margin-top: 10px;
    }
    button:hover{
        background-color: gold;
    }
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    display: flex;
    flex-direction: column;
    align-items: center;

 }
</style>