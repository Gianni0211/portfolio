import Vue from "vue";
import VueRouter from "vue-router";


//Pages

import Home from './views/Home'
import About from './views/About'
import Projects from './views/Projects'
import Contact from './views/Contact'

Vue.use(VueRouter);

const routes = [
 {
  path: '/',
  component: Home,
  name: 'home',
  meta: { transition: 'overlay-down-full'}
 },
 {
  path: '/about',
  component: About,
  name: 'about',
  meta: { transition: 'overlay-down-full'}
 },
 {
  path: '/projects',
  component: Projects,
  name: 'projects',
  meta: { transition: 'overlay-down-full'}
 },
 {
  path: '/contact',
  component: Contact,
  name: 'contact',
  meta: { transition: 'overlay-down-full'}
 }
]

const router = new VueRouter({ mode: 'history', routes });

export default router