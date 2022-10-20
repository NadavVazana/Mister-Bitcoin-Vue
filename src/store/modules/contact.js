import { contactService } from "../../services/contactService.js";

export default{
    state:{
        contacts:[]
    },
    mutations:{
        setContacts(state,{contacts}){
            state.contacts = contacts
        },
        removeContact(state,{contactId}){
            const idx = state.contacts.filter(contact=>contact._id === contactId)
            state.contacts.splice(idx,1)
        },
        saveContact(state,{contact}){
            const idx = state.contacts.filter(currContact=> currContact._id === contact._id)
            state.contacts.splice(idx,1,contact)
        }
    },
    actions:{
        async loadContacts({commit}){
            const contacts = await contactService.getContacts()
            console.log(contacts);
            commit({type:'setContacts',contacts})
        },
        async removeContact({commit},{contactId}){
            await contactService.deleteContact(contactId)
            commit({type:'removeContact',contactId})
        },
        async saveContact({commit},{contact}){
            await contactService.saveContact(contact)
            commit({type:'saveContact',contact})
        }

    },
    getters:{
        contacts(state){
            return state.contacts
        }
    }
}