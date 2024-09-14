import './bootstrap';

import { createApp } from 'vue';
import Post from './components/post/index';
alert();

const app = createApp({});
app.component('post-index', Post);
app.mount('#app')

