<template>
  <div class="main">
 <NavbarComponent />
  <h1>Welcome to Mars Rover Mision!</h1>
  <p>You’re part of the team that explores Mars by sending remotely controlled vehicles to the surface
of the planet. Yo developed a a software that translates the commands sent from earth to instructions
that are understood by the rover.</p>
<p>Keep in mind that the maximum coordinates in which the rover can move is (0,0) up to (200,200). 
  </p>
  <p>If it touches this barrier the rover will crash and the operation will be a failure.</p>
<h1>Good luck!</h1>
  

  
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
  padding: 10px;
  text-align:justify;
  
}
.main h1{
  color: #215c3fe4;
  font-weight: bold;
  font-size: 1.1rem;
  text-shadow: 0.5px 0.5px rgb(169, 162, 162);
  font-family: monospace;
}
.main p{
  color: #215c3fe4;
  font-weight: bold;
  font-size: 1rem;
  font-family: monospace;
}


</style>
