<template>
<div :class="separateClass()">
</div>
</template>


<script>
export default {
	name: 'separate',
	props: ['type'],
	data() {
		return {
			// title: 'Vue.js基础教程'
		}
	},
	mounted: function() {
		
	},
	methods: {
		separateClass: function() {
			if (!this.type) return 'separate-line';
			else if (this.type == 'line') return 'separate-line';
			else if (this.type == 'space') return 'separate-space';
			else return 'separate-line';
		}
	}
}
</script>

<style>
.separate-line {
	display: block;
	width: 100%;
	border-top: 1px solid #ccc;
}
.separate-space {
	display: block;
	width: 100%;
	height: .8em;
}
</style>