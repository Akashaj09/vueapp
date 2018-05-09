<template>
	<div>
		<div class="container">
			<div class="row">
				<div class="col-md-8 col-xs-12 col-sm-8">
					<table class="table table-bordered">
						<tbody>
							<tr>
								<td>
									<input type="text" name="title" placeholder="Your questions" class="form-control"/>
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
							<tr>
								<td>
									<button type="button" class="btn btn-outline-success">Ask </button>
								</td>
							</tr>
						</tbody>
					</table>
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
	export default{
		name: 'Question',
		data(){
			return{
				message: "",
				content: 'Your questions details',
				selectedTags: '',
				tags: { 
			        'web-development': 'Web Development',
			        'php': 'PHP',
			        'javascript': 'JavaScript',
			    }
			}
		},
		methods: {
			getTags: function(){
				
			}
		},
		beforeMount(){

		}
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