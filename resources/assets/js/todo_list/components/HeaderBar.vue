<template>
    <div class="menu-links">
        <a href="/">首頁</a>
        <a href="/todolist">事項列表</a>
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
