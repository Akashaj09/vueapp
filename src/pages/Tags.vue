<template>
	<div>
		<div class="contaner">
			<div class="col-md-8">
				<form method="post" @submit.prevent="saveTags">
					<table class="table table-bordered">
						<tbody>
							<tr>
								<td>
									<input type="text"  class="form-control" v-model="tags" placeholder="Tags">
									<small>Questions tags</small>
								</td>
							</tr>
							<tr v-show="status">
								<td>{{ status }}</td>
							</tr>
							<tr>
								<td>
									<button type="submit" class="btn btn-outline-success btn-sm">Save</button>
								</td>
							</tr>
						</tbody>
					</table>
				</form>
			</div>
		</div>
	</div>
</template>
<script>
	import { tagstoreUrl, getHeader } from '../config'
	export default{
		name: 'Tags',
		data(){
			return{
				tags: "",
				status: ''
			}
		},
		methods: {
			saveTags: function() {
				axios.post(tagstoreUrl, {tags: this.tags}, { headers: getHeader() })
				.then(response => {
					this.tags = '' 
					this.status = response.data.status;
				})
				.catch(error => {
					this.tags = ''
				    this.status = error.response.data.errors.tags[0];
				});
			}
		}
	}
</script>