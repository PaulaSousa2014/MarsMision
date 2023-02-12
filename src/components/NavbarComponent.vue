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
.navbar{
  background-color: #091b12e4;
  padding: 5%;
}

.navbar-brand {

  margin-bottom: 3px;
  margin-top: 3px;
  color: white;
}

</style>

  