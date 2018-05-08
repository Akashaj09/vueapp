<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li style="font-size: 16px; line-height: 30px;" @click="deletestudent()" v-for="std in students">{{ std.name }} {{ std.roll }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      msg: 'Contact page',
      students: [
        {name: 'Akash Ahammad', roll: '772966'},
        {name: 'Akash Hasan', roll: '772962'},
        {name: 'Akash Mahmud', roll: '772963'},
        {name: 'Akash Aj', roll: '772968'},
        {name: 'Pori', roll: '772966'},
        {name: 'Hurpori', roll: '772966'},
        {name: 'Jolpori', roll: '772966'}
      ]
    }
  },
  methods: {
    deletestudent: function(){
      this.students.pop();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
