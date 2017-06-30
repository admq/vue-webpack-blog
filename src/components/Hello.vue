<template>
	<div class="hello">
		<h3>Hello Vue</h3>
		<input v-model="count"/>
		<button v-on:click="json">GetJson</button>
		<hr>
		<ul>
			<li v-for="item in users">
				<span>{{item.first_name}}</span>
				{{item.email}}
			</li>
		</ul>
	</div>
</template>


<script>
export default {
  name: 'hello',
  data() {
  	return { 
  		count: 10,
  		users: []
  	}
  },
  methods: {
    json: function() {
    	this.$http.get("http://www.mockaroo.com/api/generate.json?key=5d44b720&schema=json_10&count="+this.count)
    	.then(function(res) {
    		this.users = res.data;
    	});

  	}
  }
}

</script>

<style scoped>
ul {
	width: 50%;
	margin: 0 auto;
}
li {
	list-style-type: none;
	text-align: left;
	margin: 0;
}
li span {
	width: 100px;
	display: inline-block;
}
.hello {

}
</style>
