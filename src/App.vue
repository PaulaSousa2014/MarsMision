<template>
  
  <div class="main">
 <NavbarComponent />
  <h1>Welcome to Mars Rover Mision!</h1>
  <p>You’re part of the team that explores Mars by sending remotely controlled vehicles (rover) to the surface
of the planet. Yo developed a a software that translates the commands sent from earth to instructions
that are understood by the rover.</p>
<h1>Commands allowded:</h1>

<ul>
  <li>To moove the rover to the front: F</li>
  <li>To to turn the rover to the right: R</li>
  <li>To turn the rover to the left: L</li>
</ul>

<p>Keep in mind that the maximum coordinates in which the rover can move is (0,0) up to (200,200). 
  </p>
  <p>If it touches this barrier the rover will crash and the operation will be a failure.</p>
<h1>Good luck!</h1>
  
  
  <GameMision />

  <FooterComponent />
 


</div>
</template>

<script setup>
import NavbarComponent from "./components/NavbarComponent.vue"
import GameMision from "./components/GameMision.vue"
import FooterComponent from "./components/FooterComponent.vue";


</script>

<style>


.main{
  background-color: #bec8c3e4;
  color: rgb(53, 53, 53);
  font-weight: bold;
  font-size: 1rem;
  font-family: monospace;
  padding: 10px;
  border: rgb(75, 75, 75);
  border-style: dotted;
  
}
.main h1{
  color: #215c3fe4;
  font-weight: bold;
  font-size: 1.1rem;
  text-shadow: 0.5px 0.5px rgb(169, 162, 162);
  font-family: monospace;
}



</style>
