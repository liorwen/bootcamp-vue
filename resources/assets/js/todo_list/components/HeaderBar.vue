<template>
    <div class="menu-links">
        <a v-link="{path:'/'}">HOME</a>
        <a v-link="{path:'/todolist'}">Todo List</a>
    </div>
</template>
<style>
    .menu-links a {
        display: inline-block;
        text-decoration: none;
        color: #555;
        margin-right: 30px;
    }
</style>
<script>
    export default{
        data(){
            return{
                name: 'Matt Test'
            }
        }
    }
</script>
