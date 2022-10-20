<template>
  <h1 class="contacts-title">Contacts:</h1>
    <ContactsFilter @filter="onFilter" />
  <ContactList @remove-contact="onRemoveContact" :contacts="contactsToShow" />

  </template>

<script>
import ContactList from '../components/contact-list.vue';
import ContactsFilter from '../components/contacts-filter.vue';
export default {
    async created(){
        // this.contacts = await contactService.getContacts()
        this.$store.dispatch({type:"loadContacts"})
    },
    data(){
        return{
            // contacts:[],
            filter:{}
        }
      
    },
    methods:{
        async onRemoveContact(contactId){
            // const contacts = await contactService.deleteContact(contactId)
            // this.contacts = [...contacts]
            this.$store.dispatch({type:'removeContact',contactId})
            
        },
        onFilter(filterBy){
            this.filter=filterBy
        }
    },
    computed:{
        contactsToShow(){
        const regex = new RegExp(this.filter.name,'i')
        return this.contacts.filter(contact=> regex.test(contact.name))

        }
        ,
        contacts(){
           return this.$store.getters.contacts
        }
    },
    components: { ContactList, ContactsFilter }
}
</script>

<style lang="scss">
 .contacts-title{
    padding: 10px;
    text-decoration: underline;
    line-height: 40px;
    text-align: center;
 }
</style>