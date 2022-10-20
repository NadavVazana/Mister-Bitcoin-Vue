<template>
    <div class="contact-filter">
  <input @input="handleInput" placeholder="Enter contact name:" v-model="filterBy.name" type="text">
</div>
</template>

<script>
export default {
    data(){
        return{
            filterBy:{name:''}
        }
    },
    methods:{
        handleInput(ev){
            this.$emit('filter',this.filterBy)
        }
    }
}
</script>

<style lang="scss">
    .contact-filter{
        display: flex;
        justify-content: center;
       margin-bottom: 10px;
        input{
            padding: 10px;

        }
    }
</style>