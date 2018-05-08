
<template>
  <b-navbar toggleable="md" type="dark" variant="dark">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-navbar-brand><router-link v-bind:to="'/'" class="nav-link">NavBar</router-link></b-navbar-brand>

  <b-collapse is-nav id="nav_collapse">

    <b-navbar-nav>
      <b-nav-item>
        <router-link v-bind:to="'learn'" class="nav-link">Learn</router-link>
      </b-nav-item>
      <b-nav-item>
        <router-link v-bind:to="'ask'" class="nav-link">Ask</router-link>
      </b-nav-item>
    </b-navbar-nav>

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">
       <b-nav-item  v-if="userStore.authUser == null">
        <router-link v-bind:to="'login'" class="nav-link">Login</router-link>
      </b-nav-item>
      <b-nav-item-dropdown right v-if="userStore.authUser">
        <!-- Using button-content slot -->
        <template slot="button-content">
          <em>{{ userStore.authUser.name }}</em>
        </template>
        <b-dropdown-item href="#">Profile</b-dropdown-item>
        <b-dropdown-item href="#">Signout</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>

  </b-collapse>
</b-navbar>
</template>
<script>
  import {mapState} from 'vuex'
  export default{
    computed: {
      ...mapState({
        userStore: state => state.userStore
      })
    }
  }
</script>
