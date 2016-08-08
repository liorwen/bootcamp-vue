<template>
    <div id="header">
        <header-bar></header-bar>
    </div>
    <div id="main">
        <todo-component></todo-component>
    </div>
    <div id="footer">
        <foot-bar></foot-bar>
    </div>
</template>
<style>
    #main {
        padding-bottom: 100px;
        margin-top: 30px;
        height: 600px;
    }
    #footer {
        height: 100px;
        position: relative;
        margin-top: -100px;
    }
</style>
<script>
    import HeaderBar from './HeaderBar.vue'
    import TodoComponent from './TodoComponent.vue';
    import FootBar from './FootBar.vue';
    export default{
        components:{
            HeaderBar,
            TodoComponent,
            FootBar
        }
    }
</script>
