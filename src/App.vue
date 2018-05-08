<template>
  <div id="app">
    <top-menu></top-menu>
    <br>
    <router-view />
  </div>
</template>

<script>

import {mapState} from 'vuex'
import TopMenu from './components/Topmenu'

export default {
  name: 'app',
  components: {
    TopMenu
  },
  computed: {
    ...mapState({
      userStore: state => state.userStore
    })
  },
  created(){
    const userObj = JSON.parse(window.localStorage.getItem('authUser'))
    this.$store.dispatch('setuserobj', userObj)
  }
}
</script>

<style>
body{
  font-family: 'Raleway', sans-serif;
}
.no-padding{
  padding: 0px;
}
.underline{
  padding-top: 10px;
  border-bottom: 1px solid #eff0f1;
}
.bdge{
  padding: 2px 5px 2px 5px;
  font-size: 12px;
  border: 1px solid #eff0f1;

}
.bdge:hover{
  text-decoration: none;
}
.bdge-md{
  padding: 7px 7px 7px 7px;
  font-size: 14px;
  border-radius: 8px;
  font-family: 'Raleway', sans-serif;
  width: 100%;
}
.bdge-md:hover{
  text-decoration: none;
}
.section-wrapper{
  width: 100%;
  height: auto;
}
.counter-section{
  float: left;
  clear: right;
  width: 20%;
  padding: 10px 5px 10px 0px;
}
.post-title-section{
  float: right;
  width: 79.5%;
  padding: 5px 5px 5px 0px;
}
.title-wrap{
  width: 100%;
}
.title-link{
  font-size: 15px;
  text-decoration: none;
  color: #005999;
  font-family: 'Raleway', sans-serif;
}
.title-link:hover{
  text-decoration: none;
  color: #0077d6;
}
.vote{
  width: 3.2%;
  font-size: 10px;
  float: left;
  clear: right;
  padding: 0px 5px 0px 0px;
}
.comment{
  padding: 5px;
  width: 33.2%;
  font-size: 10px;
  float: right;
  padding: 0px 5px 0px 0px;
}
.view{
  padding: 0px 5px 0px 5px;
  width: 33.2%;
  font-size: 10px;
  float: right;
  text-align: center;
}
.footer{
  background: #242729;
  height: 200px;
}
@media screen and (max-width: 480px) {
    .counter-section{
      width: 100%;
      padding: 10px;
    }
    .post-title-section{
    width: 100%;
    padding: 10px;
  }
}
</style>
