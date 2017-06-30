<template>
  <div class="article-detail">
  	<div class="article-detail-left">
  		<div class="article-detail-area">
		  		<div class="article-content-title">
		  		{{title()}}
		  		</div>
			  	<div v-html="image(600, 300, '#42b983')"></div>

		  		<div class="article-content-text">
			  		<p>
			  			{{paragraph()}}
			  		</p>

<pre v-highlightjs>
<code class="js">$(document).ready(function() {
  $('pre code').each(function(i, block) {
    hljs.highlightBlock(block);
  });
});
</code>
</pre>

<pre v-highlightjs>
<code class="html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;code hightlight&lt;/title&gt;
    &lt;link rel="stylesheet" href="styles/default.css"&gt;
    &lt;script src="highlight.pack.js"&gt;&lt;/script&gt;
    &lt;script&gt;hljs.initHighlightingOnLoad();&lt;/script&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;pre&gt;
      &lt;code class="JavaScript"&gt;
        $(document).ready(function() {
          $('pre code').each(function(i, block) {
            hljs.highlightBlock(block);
          });
        });
      &lt;/code&gt;
    &lt;/pre&gt;
  &lt;/body&gt;
&lt;/html&gt;
</code>
</pre>

<pre v-highlightjs>
<code class="Java">@Service
public class AuthService {
    private static final Logger logger = LoggerFactory.getLogger(AuthService.class);

    @Autowired
    private PeopleLinkWechatMapper peopleLinkWechatMapper;

    @Value("${wechat.appId}")
    private String appId;

    @Value("${wechat.appSecret}")
    private String appSecret;

    /**
     * 获取openid
     * @param session
     * @return
     */
    public String getOpenid(HttpSession session) {
        // 查看会话里有openid
        Object openid = session.getAttribute("openid");
        // 没有则使用code去微信接口请求
        if (openid == null) {
            Object code = session.getAttribute("code");
            //if (code == null) return new Result(102, "错误, 请到点击公众号菜单进入!", null);
            if (code == null) return null;
            logger.info("获取openid");
            SnsAccessToken sns = SnsAccessTokenApi.getSnsAccessToken(appId, appSecret, code.toString());
            openid = sns.getOpenid();
            // code只能用一次，用完后从session中删除
            session.setAttribute("code", null);

            //if (openid == null) return new Result(102, "错误, 请到点击公众号菜单进入!", null);
            if (openid == null) return null;

            // 将openid保持到会话中
            session.setAttribute("openid", openid.toString());
        }
        return openid.toString();
    }

    /**
     * 获取系统内注册的用户实体，包括普通住户和维修人员
     *
     * 结果: id openid type(1代表住户,2代表维修人员)
     *
     * @param openid
     * @return
     */
    public  getUserEntity(String openid) {
        return peopleLinkWechatMapper.selectEntityByOpenid(openid);
    }
}
</code>
</pre>

<pre v-highlightjs><code class="javascript">const s = new Date().toString()</code></pre>

			  		<p>
			  			{{paragraph()}}
			  		</p>
			  		<div v-html="image()"></div>
			  		<p>
			  			{{paragraph()}}
			  		</p>
			  		<p>
			  			{{english()}}
			  		</p>
			  		<p>
			  			{{paragraph()}}
			  		</p>
			  		<div v-html="image(600, 200)"></div>
			  		<p>
			  			{{english()}}
			  		</p>
		  		</div>
  		</div>

  		<br>
  		<Comment></Comment>

  	</div>



		<div class="article-detail-right">
  		<div class="article-detail-area">
				<img src="../assets/monkey.jpg" style="height:50px;border-radius:25px;float:left;margin-right:.6em;" />
  			<!-- <div style="display: inline"> -->
		  		<div style="font-size:1.1em;font-weight:500;">尼古拉斯∙阿萨姆斯基</div>
		  		<span style="font-size:.8em;color:#666;">
		  			一个Java和Js长期鲁棒员, 喜用NodeJS、Vue、Webpack 
		  			<br>
			  		<div style="text-align: right;">
			  			—— 本博客系统作者
			  		</div>
		  		</span>
	  		<!-- </div> -->
  		</div>

  		<Separate type="space"></Separate>

  		<div class="article-detail-area">
  			<div style="font-size:.85em;">
  				{{paragraph()}}
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
import Comment from '@/components/Comment';
import Separate from '@/components/Separate';
import hljs from 'highlight.js';
var Random = Mock.Random;
Vue.use(VueHighlightJS);
export default {
	name: 'article-detail',
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
			return Random.ctitle(5, 10);
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
	computed: {
	},
	created: function() {

	},
  components: {
      Icon, Comment, Separate
  }
}
</script>

<style>
pre code {
	font-size: 1.1em;
}

.article-detail {
	display: inline-block;
	width: 100%;
}
.article-detail-left {
  width: 75%;
  float: left;
}
.article-detail-right {
  width: 23%;
  float: right;
}

.article-detail-area {
  border-radius: 3px;
  background: #FFFFFF;
  padding: 20px 2%;
  width: 96%;
}


.article-content-title {
  font-size: 1.5em;
  margin-left: -2%;
  font-weight: 500;
}
.article-content-title:before {
	content: ' ';
	width: 6px;
	height: 1.8em;
	/*border-radius: 8px;*/
	border-top-left-radius: 3px;
	border-bottom-left-radius: 3px;
	background: #5CB85C;
  display: inline-block;
  margin-left: -6px;
  margin-bottom: -0.5em;
}
.article-content-title:after {
  display: block;
	content: ' ';
	width: 100%;
	border-bottom: 1px dashed #ccc;
	margin: 20px 0;
}

.article-content-text p {
    text-align: justify;
    margin: 10px 0;
    letter-spacing: .024em;
    line-height: 1.8em;
    text-indent:2em;
}

</style>