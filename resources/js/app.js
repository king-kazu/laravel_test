// const { VueLoaderPlugin } = require('vue-loader');

require('./bootstrap');

import vueCounter from "./vueCounter";
import { createApp } from "vue";

createApp({
    setup() {
    //カウンターを更新する
        const { counter } = vueCounter();

        return {
            counter,
        };
    },
}).mount("#counter");


const Counter = {
    data() {
        return {
            counter: 0,
        };
    },
    mounted() {
        setInterval(() => {
            this.counter++;
        }, 1000);
    },
};

Vue.createApp(Counter).mount("#counter");

// import Alpine from 'alpinejs';

// window.Alpine = Alpine;

// Alpine.start();
