<template>
    <div class="edit-section">
      <h1>Enter the new details:</h1>
    <input class="edit-name" v-model="contact.name" placeholder="enter the name:" type="text">
    <input class="edit-phone" v-model="contact.phone" type="text" placeholder="enter the phone:">
    <input class="edit-email" v-model="contact.email" type="text" placeholder="enter the email:">
    <button @click="onEdit">SUBMIT</button>
    <button @click="goBack">Back to the list</button>
</div>
</template>

<script>
import { contactService } from '../services/contactService'
export default {
    async created(){
        const id = this.$route.params.id
        const contact = await contactService.getContactById(id)

        this.contact = contact
    },
    data(){
        return{

            contact:{}
        }
    },
    methods:{
       async  onEdit(){
            const newContact = {_id:this.contact._id,name:this.contact.name,phone:this.contact.phone,email:this.contact.email}
            // await contactService.saveContact(newContact)
            console.log(newContact);
            this.$store.dispatch({type:'saveContact',contact:newContact})
            this.$router.push('/contact')
        },
        goBack(){
            this.$router.push('/contact')
        }
    }
}
</script>

<style lang="scss">
    .edit-section{
        margin-top: 200px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap:20px;
        input{
            padding: 5px;
        }
        button{
            border:none;
            padding: 10px;
        }
        button:hover{
            background-color: gold;
        }
    }
</style>