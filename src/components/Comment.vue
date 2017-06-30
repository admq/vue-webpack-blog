<template>
<div class="article-detail-area">

	<div class="article-comment">
		<h3 class="article-comment-title">
			<Icon name="commenting-o" scale="1.2"></Icon>
			吐槽区
		</h3>

		<div class="article-comment-item">
			<div class="article-comment-item-title">
				<img src="../assets/head.jpg" class="user-head" />
				<div class="user-name-time">
					<div style="height:60%;font-size:1em;font-weight:800;">元芳的刀</div>
					<div style="height:40%;font-size:.9em;font-weight:200;">
						02-20 13:42
					</div>
				</div>
			</div>
			<div class="article-comment-item-content">
	  		<p>
	  			{{paragraph(2, 10)}}
	  			<pre v-highlightjs><code class="javascript">import Mock from 'mockjs';
var Random = Mock.Random;
const s = new Date().toString();
var data = Mock.mock({
  // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  'list|1-10': [{
    // 属性 id 是一个自增数，起始值为 1，每次增 1
    'id|+1': 1,
    'name|3': 'A',
    'boo|1-3': true 
  }],
  'list|1-10': [{
    'list|5-5': ['a']
  }]
});
</code></pre>
	  		</p>
	  		<!-- 评论回复 -->
	  		<h4> 回复 </h4>
				<div class="article-comment-item-reply">
					<div class="reply-title">
						<img src="../assets/head1.jpg"/>
						<span class="reply-user-name">尼古拉斯∙阿萨姆斯基</span>
						<span class="reply-el"> 回复 </span>
						<span class="reply-user-name">元芳的刀</span>
						<span class="comment-time"> ( 02-20 13:42 )</span>
					</div>
					<div class="reply-content">
						{{paragraph(3, 10)}}
					</div>
				</div>
				<div class="article-comment-item-reply">
					<div class="reply-title">
						<img src="../assets/head.jpg"/>
						<span class="reply-user-name">元芳的刀</span>
						<span class="reply-el"> 回复 </span>
						<span class="reply-user-name">尼古拉斯∙阿萨姆斯基</span>
						<span class="comment-time"> ( 02-20 13:42 )</span>
					</div>
					<div class="reply-content">
						{{paragraph(3, 10)}}
					</div>
				</div>
			</div>
		</div>

		<div class="article-comment-item">
			<div class="article-comment-item-title">
				<img src="../assets/head1.jpg" class="user-head" />
				<div class="user-name-time">
					<div class="comment-user-name">尼古拉斯∙阿萨姆斯基</div>
					<div class="comment-time">
						02-20 13:42
					</div>
				</div>
			</div>
			<div class="article-comment-item-content">
	  		<p>
	  			{{paragraph(2, 10)}}
	  		</p>

	  		<h4> 回复 </h4>

			</div>
		</div>
	</div>

</div>
</template>


<script>
import css from 'highlight.js/styles/default.css';
import Vue from 'vue';
import VueHighlightJS from 'vue-highlightjs';
import Mock from 'mockjs';
import Icon from 'vue-awesome/components/Icon';
import hljs from 'highlight.js';
var Random = Mock.Random;
Vue.use(VueHighlightJS);
export default {
	name: 'comment',
	// props:['articles'],
	data() {
		return {
			// title: 'Vue.js基础教程'
		}
	},
	mounted: function() {
		
	},
	methods: {
		image: function(width, height, bgcolor, text) {
			if (!width || !height) {
				width = 600;
				height = 100;
			}

			if (!bgcolor || bgcolor.indexOf("#")!=0) bgcolor = "#eee000";
			if (!text && !bgcolor) text = bgcolor;
			if (!text) text = "";

			var url = Random.image(width+'x'+height, bgcolor, text);
			return '<img src="'+url+'"/>';
		},
		title: function() {
			return Random.ctitle(5, 20);
		},
		paragraph: function(min, max) {
			if (!min) min = 3;
			if (!max) max = 10;
			return Random.cparagraph(min, max);
		},
		english: function(min, max) {
			if (!min) {
				min = 5;
				max = 7;
			}
			return Random.paragraph(5, 7);
		}
	},
  components: {
      Icon
  }
}
</script>

<style>
pre code {
	font-size: 1.1em;
}

.article-comment {

}
.article-comment-title {}
.article-comment-title:after {
	display: block;
	content: ' ';
	width: 45%;
	border-bottom: 3px solid #5ebd58;
	margin: 10px 0;
}
.article-comment-item {
	/*margin-bottom: 2em;*/
}
.article-comment-item:after {
	display: block;
	content: ' ';
	width: 100%;
	border-bottom: 1px dashed #5ebd58;
	font-weight: 100;
	margin: 2em 0;
}
.article-comment-item:last-child:after {
	border-bottom: 0;
	margin: 0;
}
.article-comment-item .article-comment-item-title {
	height: 50px;
}
.article-comment-item-title .user-head {
	width:50px;
	border-radius:25px;
	float: left;
	margin-right: .5em;
}
.article-comment-item-title .user-name-time {
	float: left;
	height: 100%;
}
.article-comment-item .article-comment-item-content {
	margin-left: 50px;
	font-size: .95em;
	color: #555;
}
.article-comment-item .article-comment-item-content h4 {
	display: inline-block;
	/*margin-top: 0;*/
}
.article-comment-item .article-comment-item-content h4:before {
	content: ' ';
	width: 4em;
	border: 1px solid #777;
	float: left;
	margin-top: .6em;
	margin-right: .5em;
}
.article-comment-item .article-comment-item-content h4:after {
	content: ' ';
	width: 4em;
	border: 1px solid #777;
	float: right;
	margin-top: .6em;
	margin-left: .5em;
}
.article-comment-item-content .article-comment-item-reply {
	padding-left: 1em;
	border-left: 3px solid #eeeaaa;
	font-size: 0.85em;
	color: #777333;
	padding-bottom: 2em;
}
.article-comment-item-content .article-comment-item-reply:last-child {
	padding-bottom: 0;
}
.article-comment-item-content .article-comment-item-reply .reply-title {
	height: 30px;
	margin-bottom: .5em;
	line-height: 30px;
}
.article-comment-item-content .article-comment-item-reply .reply-content {
	margin-left: 40px;
}
.article-comment-item-content .article-comment-item-reply img {
	height: 30px;
	border-radius: 15px;
	float: left;
	margin-right: 10px;
}
.comment-user-name {
	height:60%;font-size:1em;font-weight:800;
}
.comment-time {
	height:40%;font-size:.9em;font-weight:200;
}
.reply-user-name {
	color:#444;font-weight:500;font-size:1.05em;
}
.reply-el {
	color:#999;
}
</style>