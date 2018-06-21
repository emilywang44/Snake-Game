import { Component } from '@angular/core';
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
    `
})

// class MoveSnake{

//     moveSnake(keycode: number){
//         //document.getElementById("test").innerHTML = String(keycode);
//         switch (keycode){
//           case 37:
//             //left
//             break;
//           case 38:
//             //up
//             break;
//           case 39:
//             //right
//             break;
//           case 40:
//             //down
//             break;
//         }
//     }

// }

export class AppComponent  { 

  @HostListener('window:keydowm', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent){
    console.log(event);
    if (event.keyCode === 37)
      document.getElementById("test").innerHTML = "hi";
  }

}
