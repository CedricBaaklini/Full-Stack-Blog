import Vue from 'vue'
import VueRouter from 'vue-router'

import PostComp from '@/components/PostComp'
import AuthorComp from '@/components/AuthorComp'
import PostsByTag from '@/components/PostsByTag'
import AllPosts from '@/components/AllPosts'

Vue.use(VueRouter)

const routes = [
    { path: '/author/:username', component: AuthorComp },
    { path: '/post/:slug', component: PostComp },
    { path: '/tag/:tag', component: PostsByTag },
    { path: '/', component: AllPosts },
]

const router = new VueRouter({
    routes: routes,
    mode: 'history',
})
export default router
