<template>
	<div id="header"> 
        <!-- <span style="color:#eee000;">
            <Icon name="code" scale="1.5" label="Source Code"></Icon>
        </span> -->
        <!-- <Icon name="code" scale="2" color="#eee000" height="100%"></Icon> -->
        <img src="../assets/logo1.png" class="logo" />
	    <span v-for="menu in menus">
            <Icon v-if="menu.icon" :name="menu.icon"></Icon>
	        <router-link :to="menu.link">{{menu.name}}</router-link> 
	    </span> 
        <input type="text" name="searchKey" id="search" placeholder="搜索文章 - 回车键搜索" />
	    <a href="#" class="right">登录</a> 
	</div>
</template>

<script>
import $ from 'webpack-zepto';
import 'vue-awesome/icons';
import Icon from 'vue-awesome/components/Icon';
export default {
	name: 'menu',
	props:['menus'],
    created: function() {
    },
    mounted: function() {
        $("#header span a").click(function(e) {
            $("#header span").removeClass('active');
            $(this).parent().addClass('active');
        });
    },
    components: {
        Icon
    }
}
</script>

<style>
a {
    text-decoration: none;
    color: inherit;
}

.left {
    float: left;
}
.right {
    float: right;
}

#header {
    height: 50px;
    line-height: 50px;
    /*background: #55b949;*/
    background: #272822;
    padding: 0 5%;
    color: #eeefff;
    text-align: left;
    position: fixed;
    width: 90%;
    top: 0;
}
#header span {
    display: inline-block;
    padding: 0 20px;
    /*color: #eeefff;*/
    color: #91979a;
}
#header span:first-child {
    padding-left: 0;
}
#header .active {}
#header .active a {
    border-bottom: 3px solid #fff;
    padding-bottom: 5px;
    width: 100%;
    color: #eee000;
    font-weight: 500;
}
#header .logo {
    height:47px;
    float:left;
    padding-right:20px;
}

#search {
    background: #333;
    border: 0;
    border-radius: 3px;
    height: 25px;
    padding: 0 8px;
    color: #ffffff;
    width: 20em;
    outline: none;
}

@media screen and (max-width:400px) {
    .content {
        width: 100%;
    }
    #header span {
        padding: 0 10px;
    }
}
</style>
