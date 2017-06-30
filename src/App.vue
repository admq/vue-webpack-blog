<template>
  <div id="app-content">
    <!-- <img src="./assets/logo.png"> -->
    <PageMenu :menus="menus"></PageMenu>
    <HotArea :hotdata="[]"></HotArea>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import PageMenu from '@/components/Menu'
import HotArea from '@/components/HotArea'

export default {
  name: 'app',
  data() {
    return {
      menus: [
        {name:'首页', link:'/'},
        {name:'文章', link:'/article'},
        {name:'开源项目', link:'/table'},
        {name:'作记', link:'/hello'}
      ]
    }
  },
  components: {PageMenu, HotArea}
}
</script>

<style>
body {
  margin: 0;
  background-color: #eeeeee;
}
.content {
    width: 90%;
    margin: 10px auto 20px auto;
    text-align: left;
}
#app-content {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}
#menu {
  margin-top: 10px;
  display: inline-block;
  border: 1px solid #888;
  padding: 10px 50px;
  width: 50%;
}
#menu span {
  display: inline-block;
  padding: 0 20px;
}
</style>
