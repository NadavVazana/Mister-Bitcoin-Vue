<template>
  <div class="contact">
    <h1>Name: {{contact.name}}</h1>
        <h1>Email:  {{contact.email}}</h1>
        <h1>Phone:   {{contact.phone}}</h1>
        
  </div>
</template>

<script>
export default {
    methods:{
    
    },
    props:{
        contact:{
            type:Object,
            required:true
        }
    }
}
</script>

<style lang="scss">
.contact{
    h1{
        font-weight: 700;
    }
}
</style>