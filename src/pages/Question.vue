<template>
	<div>
		<div class="container">
			<div class="row">
				<div class="col-md-8 col-xs-12 col-sm-8">
					<form method="post" action="#" @submit.prevent="storeQuestions" >
						<table class="table table-bordered">
							<tbody>
								<tr>
									<td>
										<input v-model="question" type="text" name="question" placeholder="Your questions" class="form-control" required />
									</td>
								</tr>
								<tr>
									<td>
										<vue-editor v-model="content"></vue-editor>
									</td>
								</tr>
								<tr>
									<td>
										<tags-input element-id="tags" v-model="selectedTags" :existing-tags="tags"
	    :typeahead="true" class="form-control"></tags-input>
	    								<small>Type your question area and select</small>
									</td>
								</tr>
								<tr v-show="errors">
									<td class="text-danger">
										<p v-for='err in errors'>{{ err[0] }}</p>
									</td>
								</tr>
								<tr>
									<td>
										<button type="submit" class="btn btn-outline-success">Ask </button>
									</td>
								</tr>
							</tbody>
						</table>
					</form>
				</div>
				<div class="col-md-4 col-xs-12 col-sm-4">
					<p class="pd-10 btn-block bg-wht text-center"><b>Questions rules</b></p>
						<div class="module newuser sidebar-help" id="how-to-format" style="">
					    <h4>How to Format</h4>        
					    
					    <p><span class="dingus">►</span> put returns between paragraphs</p>
					    <p><span class="dingus">►</span> for linebreak add 2 spaces at end</p>
					    <p><span class="dingus">►</span> <i>_italic_</i> or <b>**bold**</b></p>
					        <p><span class="dingus">►</span> indent code by 4 spaces</p>
					    <p><span class="dingus">►</span> backtick escapes <code>`like _so_`</code></p>

					    <p><span class="dingus">►</span> quote by placing &gt; at start of line</p>
					    
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import { VueEditor } from 'vue2-editor'
	import TagsInput from '@voerro/vue-tagsinput'
	import { tagstoreUrl, getHeader, questiosUrl } from '../config'
	export default{
		name: 'Question',
		data(){
			return{
				message: "",
				content: 'Your questions details',
				selectedTags: '',
				tags: {},
				question: '',
				errors: '',
				exploded: ''

			}
		},
		methods: {
			getTags: function(){
				axios.get(tagstoreUrl, { headers: getHeader() }).then(response => {
					this.tags = response.data;
				}).catch(error => {
					console.log(error.response)
				});
			},
			storeQuestions: function(){
				axios.post(questiosUrl, {questions: this.question, description: this.content, tags: this.selectedTags}, { headers: getHeader() })
				.then(response => {
					if(response){
						this.exploded = this.question.split(' ');
						this.question = exploded.join('-');
						this.errors = '';
						this.$router.push({ path: `/question/${question}/` })
					}
				}).catch(error => {
					console.log(error.response);
					this.errors = error.response.data.errors;
				});
			}
		},
		beforeMount(){
			this.getTags();
		},
		components: {
			VueEditor, TagsInput 
		}
	}
</script>
<style>
	.bg-wht{=
		width: auto;
		color: #000;
	}
	.pd-10{
	    padding: 10px;
	}
</style>