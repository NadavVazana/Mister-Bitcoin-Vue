<template>
    <div class="contact-list">
  <ul>
      <li v-for="contact in contacts" :key="contact._id">
        <ContactPreview :contact="contact" />
        <button @click="onRemoveContact(contact._id)" class="delete-contact">X</button>
        <button  class="contact-details-btn">
            <RouterLink :to="`/contact/${contact._id}`">Details</RouterLink>
        </button>
        <button class="edit-btn" ><RouterLink :to="`/contact/edit/${contact._id}`">Edit</RouterLink></button>

    </li>
  </ul>
</div>
</template>

<script>
import ContactPreview from "./contact-preview.vue";
export default {
    methods:{
        onRemoveContact(contactId){
        this.$emit('remove-contact', contactId)
          }  
    },
    props: {
        contacts: {
            type: Array,
            required: true
        }
    },
    components: { ContactPreview }
}
</script>

<style lang="scss">

    .contact-list{
        button:hover{
            background-color: rgb(156, 140, 46);
            color: white;
            a{

                color: white;
            }
        }
        .edit-btn{
            a{
                text-decoration: none;
                color: black;
            }
            margin-inline-start: 10px;
            margin-top: 20px;
            padding: 5px;
            border: none;
        }
        
        ul{
            li{
        .delete-contact{
            margin-top: 20px;
            padding: 5px;
            border: none;
           
        }
        .contact-details-btn{
            a{
                text-decoration: none;
                color: black;
            }
            margin-inline-start: 10px;
            margin-top: 20px;
            padding: 5px;
            border: none;
        }
       background-color: rgb(206, 183, 51);
       font-weight: 700;
       font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-size: .5rem;
        border: 1px black solid;
        padding: 30px;
    
            }
            padding-inline: 10px;
            gap: 5px;
            list-style-type: none;
            display: grid;
           grid-template-columns: repeat(auto-fill,minmax(400px,1fr));
        }
    }
</style>