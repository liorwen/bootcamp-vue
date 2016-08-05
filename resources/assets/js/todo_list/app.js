/**
 * Created by lyndon on 2016/8/5.
 */
import Vue from 'vue';
import TodoComponent from './components/todo-component.vue';

Vue.config.devtools = true;

new Vue({
    el: '#app',
    components: {
        TodoComponent
    }
});