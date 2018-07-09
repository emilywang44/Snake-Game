import { Component, Directive } from '@angular/core';
import 'rxjs/add/operator/map';
import { HostListener } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>" "</h1>
    <div class= "background"></div>
    <div id= "snake" class= "snake"></div>
    <div id="food" class= "food"></div>
    <p id="test">HELLOO</p>
    `,
    host: {
      '(window:keydown)' : 'handleKeyboardEvent($event)'
    }
})

export class AppComponent  { 


}

var currDir = "left";

function moveSnake() {

  var rect = document.getElementById("snake").getBoundingClientRect();
  switch(currDir){

    case "left":
      if (currDir === "left")
        document.getElementById("snake").style.left = (rect.left - 20) + "px";
      else if (currDir === "up" || currDir === "down")    
      break;

    case "right":
      if (currDir === "right")
        document.getElementById("snake").style.left = (rect.left + 20) + "px";
      break;

    case "up":
      if (currDir === "up")
        document.getElementById("snake").style.top = (rect.top - 20) + "px";
      else if (currDir === "left")

      break;

    case "down":
      if(currDir === "down")
        document.getElementById("snake").style.top = (rect.top + 20) + "px";
      break;

      default:
        break;
  }

}

function generateFood(){

  //generate a random number between grid min width and grid max width
  var newX = Math.floor((Math.random() * (grid.x + grid.width)) + grid.x);

  //generate a random number between grid min height and grid max height
  var newY = Math.floor((Math.random() * (grid.y + grid.height)) + grid.y);

  food.x = newX;
  food.y = newY;

}

var snake = {
  length: 5,
  headDir: "right",
  tailDir: "right",
  bend: "",
  x: 0,
  y: 0
};

var food = {
  x: 0,
  y: 0
};

var grid = {
  x: 0, 
  y: 0,
  height: 100, 
  width: 100
};

window.onload = function() {
  this.setInterval(moveSnake, 100);
  window.onkeydown = function(e){
    switch(e.keyCode){
      case 37:
        //left
        currDir = "left";
        break;
      case 38:
        //up
        currDir = "up";
        break;
      case 39:
        //right
        currDir = "right";
        break;
      case 40:
        //down
        currDir = "down";
        break;
    }
    
  }
}
