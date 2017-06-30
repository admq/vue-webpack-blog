<template>
  <div>
  	<div class="article-list"> 
      <div class="article" v-for="article in articles"> 
        <h3>
          <!-- <a :href="article.link">{{article.title}}</a> -->
          <router-link :to="'/p/'+article.id">{{article.title}}</router-link> 
        </h3> 
        <p>{{article.abstract}}</p> 
      </div> 
  	</div>
    <div class="article-category">
      <div class="article-category-content">
        <h3>Category</h3>
        <ul>
          <li><a href="#">java</a> (12)</li>
          <li><a href="#">javascript</a> (31)</li>
          <li><a href="#">linux</a> (10)</li>
          <li><a href="#">生活点滴记录</a> (10)</li>
        </ul>
      </div>
    </div>

    <!-- <ArticleDetail></ArticleDetail> -->
    
  </div>
</template>


<script>
import ArticleDetail from '@/components/ArticleDetail';
export default {
	name: 'article',
	// props:['articles'],
	data() {
		return {
			articles: [
        {
          id: 1,
          title: 'Vue.js基础教程',
          abstract: '这是一个Vue.js的基础教程，提供Vue.js的使用的入门。Vue.js（读音 /vjuː/，类似于 view） 是一套构建用户界面的渐进式框架。与其他重量级框架不同的是，Vue 采用自底向上增量开发的设计。Vue 的核心库只关注视图层，它不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与单文件组件和 Vue 生态系统支持的库结合使用时，Vue 也完全能够为复杂的单页应用程序提供驱动。',
          link: '#'
        },{
          id: 2,
          title: 'JavaScript基础教程',
          abstract: 'JavaScript 是属于网络的脚本语言！JavaScript 被数百万计的网页用来改进设计、验证表单、检测浏览器、创建cookies，以及更多的应用。JavaScript 是因特网上最流行的脚本语言。JavaScript 很容易使用！你一定会喜欢它的！',
          link: '#'
        }
	    ]
		}
	},
	created: function() {
	},
  components: {
    ArticleDetail
  }
}
</script>

<style>
.article-list {
  width: 75%;
  float: left;
}
.article-category {
  width: 25%;
  float: right;
  /*padding: 0 3%;*/
}
.article-category-content {
  width: 75%;
  background-color: #FFFFFF;
  /*border: 2px dashed #777;*/
  border-radius: 3px;
  float: right;
  padding: 0 8%;
}
.article-category-content h3:after {
  content: ' ';
  border-bottom: 1px solid #999;
  width: 100%;
  display: block; 
  padding-top: 10px;
}
.article-category-content ul {
  padding-left: 20px;
  list-style-type: circle;
}
.article-category-content ul li {
  height: 35px;
}
.article-category-content ul li a {
  font-weight: 800;
  font-size: 1.1em;
}


.article {
    margin: 30px 0;
    padding: 5px 15px;
    background-color: #FFFFFF;
    border-radius: 3px;
    /*border-top: 1px solid #999;*/
}
.article:first-child {
    border-top: 0;
    margin-top: 0px;
    /*padding: 0;*/
}
.article h3,.title {
    font-size: 1.2em;
    /*color: #555;*/
    color: #42b983;
    margin: .2em 0;
}
.article p {
    margin: .5em 0;
    font-size: .9em;
    color: #333;
    letter-spacing: .03em;
    line-height: 1.5em;
}
</style>