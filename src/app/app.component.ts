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

  @HostListener('window:keydowm', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent){
    switch(event.keyCode){
      case 37:
        //left
        moveSnake("left");
        break;
      case 38:
        //up
        moveSnake("up");
        break;
      case 39:
        //right
        moveSnake("right");
        break;
      case 40:
        //down
        moveSnake("down");
        break;
    }
  }

}

function moveSnake(dir : String) {

  var rect = document.getElementById("snake").getBoundingClientRect();
  switch(dir){
    case "left":
      document.getElementById("snake").style.left = (rect.left - 10) + "px";
      break;
    case "right":
      document.getElementById("snake").style.left = (rect.left + 10) + "px";
      break;
    case "up":
      document.getElementById("snake").style.top = (rect.top - 10) + "px";
      break;
    case "down":
      document.getElementById("snake").style.top = (rect.top + 10) + "px";
      break;
  }

}
