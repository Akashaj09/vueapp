<template>
  <div>
	<div class="container">
		<div class="row">
			<div class="alert alert-info" role="alert">
			  <h4 class="alert-heading">Well done!</h4>
			  <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
			  <hr>
			  <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
			</div>
		</div>
	</div>
	<div class="container">
		<div class="row">
			<div class="col-md-9">
				Learn section
				<div class="underline"></div>
			</div>
			<div class="col-md-3">
				All categorys
				<div class="underline"></div>
			</div>
		</div>
		<br>
		<div class="row">
			<div class="col-md-9">
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
					<div class="post-title-section" align="justify">
						<div class="title-wrap" >
							<a class="title-link" href="#">Lorem ipsum dolor {{ s }}{{ s }}{{ s }}{{ s }}{{ s }}{{ s }} sit amet, consectetur adipisicing elit, sed do eiusmod asdasda
							tempor{{ s }}{{ s }}{{ s }}{{ s }} </a>
						</div>
						<a href="#" class="bdge btn-sm btn-outline-success">Angular 4</a>
						<a href="#" class="bdge btn-sm btn-outline-success">PHP</a>
						<a href="#" class="bdge btn-sm btn-outline-success">Web Socket io</a>
						<a href="#" class="bdge btn-sm btn-outline-success">WEB</a>
						<a href="#" class="bdge btn-sm btn-outline-success">VUE js</a>
					</div>
				</div>
			</div>
			<div class="col-md-3">
				<div v-for="pm in programming">
					<a href="#" class="bdge-md">{{ pm }}</a>
				</div>
			</div>
		</div>
		<br>
		<div class="row">
			<div class="col-md-9">
				Questions section
				<div class="underline"></div>
			</div>
			<div class="col-md-3">

			</div>
		</div>
		<br>
		<div class="row">
			<div class="col-md-9">
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
							<a class="title-link" href="#">Lorem ipsum dolor {{ s }}{{ s }}{{ s }}{{ s }}{{ s }}{{ s }} sit amet, consectetur adipisicing elit, sed do eiusmod asdasda
							tempor{{ s }}{{ s }}{{ s }}{{ s }} </a>
						</div>
						<a href="#" class="bdge btn-sm btn-outline-success">Angular 4</a>
						<a href="#" class="bdge btn-sm btn-outline-success">PHP</a>
						<a href="#" class="bdge btn-sm btn-outline-success">Web Socket io</a>
						<a href="#" class="bdge btn-sm btn-outline-success">WEB</a>
						<a href="#" class="bdge btn-sm btn-outline-success">VUE js</a>
					</div>
				</div>
			</div>
			<div class="col-md-3">

			</div>
		</div>
	</div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      std: ['10','12','15','10','12','15','10','12','15','10','12'],
      programming: ['PHP', 'JAVA', 'C#', 'Laravel', 'Pythone', 'Javascript', 'Angular JS', 'VUE JS', 'RUBY', 'SWIFT', 'Fortran', 'Pascal']
    }
  },
  mounted() {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
