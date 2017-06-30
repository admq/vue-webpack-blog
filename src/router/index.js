import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import Main from '@/components/Main'
import Hello from '@/components/Hello'
import Article from '@/components/Article'
import ArticleDetail from '@/components/ArticleDetail'
import Table from '@/components/Table'

Vue.use(Router)
Vue.use(Resource)

const routes = [
  { path: '/', component: Main },
  { path: '/p/:id', component: ArticleDetail },
  { path: '/hello', component: Hello },
  { path: '/article', component: Article },
  { path: '/table', component: Table }
]

export default new Router({ routes })
