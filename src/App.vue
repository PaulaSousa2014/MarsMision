<template>
  <div class="main">
 <NavbarComponent />
  <h1>Welcome to Mars Rover Mision!</h1>
  <p>You’re part of the team that explores Mars by sending remotely controlled vehicles to the surface
of the planet. Yo developed a a software that translates the commands sent from earth to instructions
that are understood by the rover.</p>
<p>Let's see if it works!</p>
  

  
  <GameMision />
  <MarsPlanet />
 

  <router-view />
</div>
</template>

<script setup>
import NavbarComponent from "./components/NavbarComponent.vue"
import GameMision from "./components/GameMision.vue"
import MarsPlanet from "./components/MarsPlanet.vue"




</script>

<style>
.main{
  background-color:rgb(16, 16, 64);
  color: #215c3fe4;
  font-weight: bold;
  
}
.main h1{
  color: #215c3fe4;
  font-weight: bold;
  font-size: 1.1rem;
  text-shadow: 0.5px 0.5px rgb(169, 162, 162);
  font-family: monospace;
}


</style>
