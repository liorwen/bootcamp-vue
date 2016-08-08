<template>
    <div>
        <header-bar></header-bar>
    </div>
    <div>
        <todo-component></todo-component>
    </div>
</template>
<style>

</style>
<script>
    import HeaderBar from './HeaderBar.vue'
    import TodoComponent from './TodoComponent.vue';
    export default{
        components:{
            HeaderBar,
            TodoComponent
        }
    }
</script>
