<template>
	<div>
		<div class="container">
			<div class="row">
				<div class="col-md-8 col-sm-12 col-xs-12 col-md-pull-8">
					<div class="col-md-12 pd-0" align="right">
						<router-link v-bind:to="'/new-questions'" class="btn btn-outline-success btn-sm">Ask a question</router-link>
					</div>
					<div class="col-md-12 col-xs-12 col-sm-12 pd-0">
						<div class="section-wrapper" v-for="s in std">
							<div class="counter-section">
								<div class="vote" align="center">
									<span class="ct-m">&nbsp;&nbsp;&nbsp;2</span><br>
									<span>Vote</span>
								</div>
								<div class="view">
									<span class="ct-m">100</span><br>
									<span>Views</span>
								</div>
								<div class="comment">
									<span class="ct-m">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10</span><br>
									<span>Comment</span>
								</div>
							</div>
							<div class="post-title-section">
								<div class="title-wrap">
									<a class="title-link" href="#">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod asdasda
									tempor</a>
								</div>
								<a href="#" class="bdge btn-sm btn-outline-success">Angular 4</a>
								<a href="#" class="bdge btn-sm btn-outline-success">PHP</a>
								<a href="#" class="bdge btn-sm btn-outline-success">Web Socket io</a>
								<a href="#" class="bdge btn-sm btn-outline-success">WEB</a>
								<a href="#" class="bdge btn-sm btn-outline-success">VUE js</a>
							</div>
					</div>
					</div>
				</div>
				<div class="col-md-4 col-sn-8 col-xs-12 col-md-push-4">
					<div class="col-md-12 pd-0">
						<p class="pd-10 btn-block bg-wht text-center"><b>Profile Activity</b></p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'Ask',
		data(){
			return {
				std: ['10','12','15','10','12','15','10','12','15','10','12'],
      			programming: ['PHP', 'JAVA', 'C#', 'Laravel', 'Pythone', 'Javascript', 'Angular JS', 'VUE JS', 'RUBY', 'SWIFT', 'Fortran', 'Pascal']
			}
		}
	}
</script>
<style scoped>
	.bg-wht{
    	background: #000;
		width: auto;
		color: #fff;
	}
	.pd-10{
	    padding: 10px;
	}
</style>