<template>
    <!-- Header con su navBar -->
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      
        <a class="navbar-item"
          ><router-link class="checked" :to="{ name: 'home' }"
            >Mars Rover Mision</router-link
          ></a
        >
      
    </div>
  </nav>
</template>
<script setup>





</script>
<style scoped>
.home {
  color: #215c3fe4;
  font-weight: bold;
  font-size: 1.1rem;
  text-shadow: 0.5px 0.5px rgb(169, 162, 162);
  font-family: monospace;
}
.navbar-start {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.navbar-start1 {
  font-family: monospace;
  display: flex;
  flex-direction: row;
  padding-top: 7px;
}
.checked {
  color: #215c3fe4;
  font-size: 1.3rem;
  text-shadow: 1px 1px rgb(169, 162, 162);
  font-family: monospace;
  padding-top: 4px;
  font-weight: bold;
}
.navbar-brand {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 3px;
  margin-top: 3px;
}

#navMenu {
  background-color: #eee;
}
.links {
  color: rgb(146, 145, 145);
}
a:hover {
  /* background-color: #eee; */
  text-decoration: underline;
  text-decoration-color: white;
}
img {
  width: 70px;
  height: 50px;
  padding-left: 20px;
  border-radius: 0;
}
.logo {
  display: flex;
}
</style>

  