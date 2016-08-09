<template>
    <div class="container">
        <div class="title">{{ title }}</div>
        <div class="nickname">{{ nickname }}</div>
        <div class="msg">{{msg}}</div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                title: 'Add Title',
                nickname: 'Matt Test',
                msg: 'This is Test msg'
            };
        }
    };
</script>
<style>
    .container {
        width: 300px;
        height: 150px;
        border-radius: 25px;
        border: 2px solid #73AD21;
        padding: 20px;
    }
    .title {
        font-size: 18px;
        color: #9c0033;
        border-bottom: 6px solid green;
    }
    .nickname {
        padding: 4px;
        font-size: 12px;
    }
    .msg {
        padding: 4px;
        font-size: 16px;
    }
</style>