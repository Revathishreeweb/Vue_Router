<template>
  <div>
    <NavbarView />
  </div>
</template>

<script>
import NavbarView from './components/NavbarView.vue'
export default {
  components: {
    NavbarView
  }
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
