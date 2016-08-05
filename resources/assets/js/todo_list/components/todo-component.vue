<template>
    <div class="todo-component">
        {{ name }}
    </div>
</template>

<script>
    export default {
        data () {
            return {
                name: 'Matt Test'
            };
        }
    };
</script>

<style>
    .todo-component {
        background: #eee;
        border: 1px solid #aaa;
        border-radius: 2em;
        margin: 2em auto;
        min-height: 150px;
        padding: 2em;
        width: 300px;
    }
</style>