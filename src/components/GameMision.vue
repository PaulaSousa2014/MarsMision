<template>
    <div class="game">
      <div>
        <label>Initial X coordinate:</label>
        <input type="number" v-model="x"/>
      </div>
      <div>
        <label>Initial Y coordinate:</label>
        <input type="number" v-model="y"/>
      </div>
      <div>
        <label>Direction:</label>
        <select v-model="direction">
          <option value="N">North</option>
          <option value="S">South</option>
          <option value="E">East</option>
          <option value="W">West</option>
        </select>
      </div>
      <div>
        <label>Commands:</label>
        <input type="text" v-model="commands"/>
      </div>
      <button @click="runCommands">Run commands</button>
      <p>{{ message }}</p>
      
      
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        x: 0,
        y: 0,
        direction: 'N',
        commands: '',
        message: '',
        alert:''
      };
    },
    methods: {
      runCommands() {
        this.message = '';
        let xInitial = this.x;
        let yInitial = this.y;
        let x = xInitial;
        let y = yInitial;
        let direction = this.direction;
        let obstacle = ``;
        
        let commands = this.commands.split('');
        let facing = {
          N: { x: 0, y: 1 },
          S: { x: 0, y: -1 },
          E: { x: 1, y: 0 },
          W: { x: -1, y: 0 }
        };
        for (let i = 0; i < commands.length; i++) {
          let command = commands[i];
          if (command === 'f'|| command ==='F') {
            
            if( x<200 && x>0){
                x += facing[direction].x
            }else{ obstacle= `The roover has crashed and can not move foward! `}
            
            if(y<200 && y>0){
                y += facing[direction].y
            }else{ this.message=`The roover has crashed and can not move foward!`}
            
            
          } else if (command === 'r' || command ==='R') {
            switch (direction) {
              case 'N':
                direction = 'E';
                if( x<200 && x>0){
                x += facing[direction].x
            }else{ obstacle= `The roover has crashed and can not move foward! `}
            
            if(y<200 && y>0){
                y += facing[direction].y
            }else{ this.message=`The roover has crashed and can not move foward!`}
                break;
              case 'E':
                direction = 'S';
                if( x<200 && x>0){
                x += facing[direction].x
            }else{ obstacle= `The roover has crashed and can not move foward! `}
            
            if(y<200 && y>0){
                y += facing[direction].y
            }else{ this.message=`The roover has crashed and can not move foward!`}
                break;
              case 'S':
                direction = 'W';
                if( x<200 && x>0){
                x += facing[direction].x
            }else{ obstacle= `The roover has crashed and can not move foward! `}
            
            if(y<200 && y>0){
                y += facing[direction].y
            }else{ this.message=`The roover has crashed and can not move foward!`}
                break;
              case 'W':
                direction = 'N';
                if( x<200 && x>0){
                x += facing[direction].x
            }else{ obstacle= `The roover has crashed and can not move foward! `}
            
            if(y<200 && y>0){
                y += facing[direction].y
            }else{ this.message=`The roover has crashed and can not move foward!`}
                break;
            }
          } else if (command === 'l' || command === 'L') {
            switch (direction) {
              case 'N':
                direction = 'W';
                if( x<200 && x>0){
                x += facing[direction].x
            }else{ obstacle= `The roover has crashed and can not move foward! `}
            
            if(y<200 && y>0){
                y += facing[direction].y
            }else{ this.message=`The roover has crashed and can not move foward!`}
                break;
              case 'W':
                direction = 'S';
                if( x<200 && x>0){
                x += facing[direction].x
            }else{ obstacle= `The roover has crashed and can not move foward! `}
            
            if(y<200 && y>0){
                y += facing[direction].y
            }else{ this.message=`The roover has crashed and can not move foward!`}
                break;
              case 'S':
                direction = 'E';
                if( x<200 && x>0){
                x += facing[direction].x
            }else{ obstacle= `The roover has crashed and can not move foward! `}
            
            if(y<200 && y>0){
                y += facing[direction].y
            }else{ this.message=`The roover has crashed and can not move foward!`}
                break;
              case 'E':
                direction = 'N';
                if( x<200 && x>0){
                x += facing[direction].x
            }else{ obstacle= `The roover has crashed and can not move foward! `}
            
            if(y<200 && y>0){
                y += facing[direction].y
            }else{ this.message=`The roover has crashed and can not move foward!`}
                break;
            }
          }
        }
       
        this.message = `${obstacle} Rover starting point was at (${xInitial}, ${yInitial}) and after commands is at (${x}, ${y})`;
         
    },
    
      
    }
}

      
</script>
<style>
.game{
    color: #215c3fe4;
  font-weight: bold;
  font-size: 1.1rem;
  text-shadow: 0.5px 0.5px rgb(169, 162, 162);
  font-family: monospace;
    padding: 5%;

}
</style>