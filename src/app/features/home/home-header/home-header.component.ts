import { Component } from "@angular/core";


@Component({
    selector: 'rb-home-header',
    templateUrl: './home-header.component.html',
    styles: [
        `
        
        
        .header-container{
            background-color: black;
          }
          
          .header {
            height: 55vh;
            background-image: 
            linear-gradient(to right bottom, 
            rgba(204, 227, 233, 0.8),
            rgba(6, 6, 7, 0.3)),   
            url('https://media.giphy.com/media/Gf5pzZxHdyTcs/giphy.gif');  
            background-size: 10rem;
            background-repeat: round;
            background-position: inherit;
            position: relative;
            background-clip: black;
            clip-path: polygon(0 0, 100% 0, 100% 35vh, 0 100%);
          }
          
          .brand { 
            font-size: 20px; 
            color:black;
          }
          
          .brand2{
            font-size: 30px;
            color:#FFBF00;
          }
          
          .text-box {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
          }
          
          .heading-primary {
            color: #fff;
            text-transform: uppercase;
            backface-visibility: hidden;
            margin-bottom: 30px;
          }
          
          .heading-primary-sim{
            color: #FFBF00;
            font-weight: bold;
            font-size: 40px;
          }
          
          .heading-primary-main {
            display: block;
            font-size: 26px;
            font-weight: 400;
            letter-spacing: 5px;
          }
          
          .heading-primary-sub {
            display: block;
            font-size: 18px;
            font-weight: 700;
            letter-spacing: 7.4px;
          }

          #popup {
            border-radius: 100px;

          }
          
          .btn:link,
          .btn:visited {
            text-transform: uppercase;
            text-decoration: none;
            padding: 10px 20px;
            display: inline-block;
            transition: all .2s;
            position: relative;
          }
          
          .btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 1);
          }
          
          .btn:active {
            transform: translateY(-1px);
            box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
          }
          
          .btn-white {
            background-color: #fff;
            font-size: 14px;
          }
        `
      ]
})
export class HomeHeaderComponent {
}