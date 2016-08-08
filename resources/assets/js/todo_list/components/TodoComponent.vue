<template>
    <div class="todo-title">{{ title }}</div>

    <div class="todo-name">{{ name }}</div>
</template>

<script>
    export default {
        data () {
            return {
                title: 'Add Title',
                name: 'Matt Test'
            };
        }
    };
</script>

<style>
      .todo-title {
          font-size: 18px;
          color: #9c0033;
          border-bottom: 6px solid green;
      }
      .todo-name {
          padding: 4px;
          font-size: 12px;
      }
</style>