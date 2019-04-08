<template>
  <div>
    <h3>Some User Details</h3>
    <p>User Loaded, ID: {{$route.params.id}}</p>
    <router-link
      class="btn btn-primary"
      tag="button"
      :to="{name: 'userEdit', params: {id : $route.params.id}}"
    >Edit User</router-link>
  </div>
</template>