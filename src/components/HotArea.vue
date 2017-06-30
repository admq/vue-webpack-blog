<template>
    <div class="hot">
    	<!-- <div v-for="item in hotdata">{{item}}</div> -->
    	<div class="hot-item">
    		<h3>Vue.js基础教程</h3>
    		<p>{{paragraph()}}</p>
    	</div>
    	<div class="hot-item">
    		<h3>一场非常尴尬的独白，听起来也很幽默，你也来听一下，哈哈哈</h3>
    		<p>{{paragraph()}}</p>
    	</div>
    	<div class="hot-item">
    		<h3>{{title()}}</h3>
    		<p>{{paragraph()}}</p>
    	</div>
    </div>
</template>
<script>
import Mock from 'mockjs';
var Random = Mock.Random;
export default {
	name: 'hot-area',
	props: ['hotdata'],
  data() {
    return {
      
    }
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
		paragraph: function() {
			return Random.cparagraph(5, 15);
		}
	}
}
</script>
<style>
	.hot {
		height: 11em;
		background: url(../assets/111.jpg);
		/*background:#cdcdcd;*/
		/*background: #7f72ff;*/
		/*background:-webkit-radial-gradient(#fffeee, #cdcdcd);*/
		/*background:-webkit-radial-gradient(#7f72ff, #ad1e84);*/


		padding: 1.2% 5%;
		overflow: hidden;
		box-shadow: 0px 3px 3px #bbb;
		margin-top: 50px;
	}
	.hot-item {
		width: 30%;
		/*width: 29.333%;*/
		height: 100%;
		/*margin: 0 1em;*/
		margin: 0 1%;
		background: #fdfdfd;
		border-radius: 4px;
		box-shadow: 0px 3px 3px #999;
		cursor: pointer;
		float: left;
		padding: 0 1% 0 1%;
		overflow: hidden;
	}
	.hot-item:first-child {
		margin-left: 0;
	}
	.hot-item:last-child {
		margin-right: 0;
	}

	.hot-item h3 {
		height: 18%;
		overflow: hidden;
		margin: 3% 0 0 0;
	}
	.hot-item h3~p {
		height: 65%;
    text-indent:2em;
		margin-top: 0;
		font-size: 0.85em;
		text-align: left;
		color: #333;
		overflow: hidden;
	}
</style>