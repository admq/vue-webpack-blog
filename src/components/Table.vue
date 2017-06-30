<template>
    <div>
        <h3>table</h3>
        <table class="zebra radius-border"> 
            <tr v-for="items in data"> 
                <td v-for="item in items">{{item}}</td> 
            </tr>
        </table>

        <br>
        <div style="width:100px; height:40px; line-height:40px; background:#ffffff;">
            <Icon name="code" scale="1.5" color="#eee000" height="100%"></Icon>
            AB
        </div>

        <br><br><br>
        <svg id="svg1" width="72" height="24">
            <polygon points="0,0 60,0 72,12 60,24 0,24 10,12" stroke="green" stroke-width="1" fill="white"></polygon>
            <a href="javascript:;">
              <!--
                text-anchor="middle" 表示以文本的中点为基准定位
                x="50%" 表示定位到图片宽度的50%处，也就是居中
                y="50%" 表示文本底部在图片的中央
                dy=".3em" 让文本的底部从图片的中央继续往下移0.3行，从而达到垂直居中
             -->
             <text x="50%" y="50%" dy=".3em" fill="#aaafff" text-anchor="middle">你好</text>
            </a>
        </svg>
    </div>
</template>

<script>
import Mock from 'mockjs';
import 'vue-awesome/icons';
import Icon from 'vue-awesome/components/Icon';

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

var Random = Mock.Random;

// 输出结果
// console.log(JSON.stringify(data, null, 4))
// console.log(Random.email());
// console.log(Random.cparagraph(5, 20));
console.log(Random.image('200x100', '#fb0a2a'));


export default {
	name: 'table',
	data() {
		return {
			data: [
				['第一列', '第二列', '第三列', '第四列'],
        ['Row 1, cell 1', 'Row 1, cell 2', 'Row 1, cell 3', 'Row 1, cell 4'],
        ['Row 2, cell 1', 'Row 2, cell 2', 'Row 2, cell 3', 'Row 2, cell 4'],
        ['Row 3, cell 1', 'Row 3, cell 2', 'Row 3, cell 3', 'Row 3, cell 4'],
        ['Row 4, cell 1', 'Row 4, cell 2', 'Row 4, cell 3', 'Row 4, cell 4']
			]
		}
	},
    components: {
        Icon
    }
}
</script>

<style>
table {
    width: 100%;
    border: 1px solid #aaa;
    /*border-collapse:collapse;*/
    border-spacing: 0px;
}
table tr {
	/*border-top: 1px solid #aaa;*/
}
table tr:first-child {
    /*border: 0px;*/
}
table td {
    border-top: 1px solid #aaa;
    padding: 3px 10px;
}
table tr:first-child td {
    border-top: 0px;
}
.radius-border {
    border-radius: 3px;
}
.full-border {
}
.full-border td {
    border-left: 1px solid #aaa;
}
.full-border td:first-child {
    border-left: 0px;
}
.zebra tr:nth-of-type(even){
    background: #fefefe;
}
</style>
