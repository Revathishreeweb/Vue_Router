<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <a class="navbar-brand">LOGO</a>
      <div class="navbar">
        <router-link to="/" class="nav">Home</router-link>
        <router-link to="/about" class="nav">About</router-link>
        <router-link to="/contact" class="nav">Contact</router-link>
        <router-link to="/services" class="nav">Services</router-link>
        <router-link to="/signin" class="nav"><button class="btn btn-primary">SignIn</button></router-link>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'NavbarView'
}
</script>

<style scoped>
.navbar {
  padding: 7px 30px 10px 10px;
  text-indent: 2.5rem;
  font-size: 16px;
}

.nav {
  text-decoration: none;
  color: #fff;
}

.nav:hover {
  color: green;
}

.btn {
  margin-left: 20px;
}
</style>
