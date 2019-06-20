import { Component } from "@angular/core";


@Component({
    selector: 'rb-home-media',
    templateUrl: './home-media.component.html',
    styles: [
        `div {
            margin-top: 5rem;
            margin-left: 9rem;
            text-align: center;
        }
          .typewriter h1 {
            color: #fff;
            font-family: monospace;
            overflow: hidden;
            border-right: .15em solid yellow; 
            white-space: nowrap; 
            margin: 0 auto; 
            letter-spacing: .10em; 
            animation: 
              typing 3.5s steps(30, end),
              blink-caret .5s step-end infinite;
          }
          
          @keyframes typing {
            from { width: 0 }
            to { width: 100% }
          }
          
          @keyframes blink-caret {
            from, to { border-color: transparent }
            50% { border-color: orange }
          }  
  
         `
      ]
    
})
export class HomeMediaComponent {}