import { Component } from "@angular/core";


@Component({
    selector: 'rb-wall-footer',
    templateUrl: './wall-footer.component.html',
    styles:[
        `
        footer{
            background-color: white;
            padding: 20px 0px;
        }
        
        footer ul{
            list-style:none;
            margin:0 auto;
            display:inline-block;
            padding-top:30px;
        }
        
        footer ul li{
            float:left;
        }
        
        footer ul li a{
            color:black;
            padding:20px;
        }
        
        footer ul li a:hover{
            color:#FFBF00;
            text-decoration:none;
        }
       
        `
    ]
})
export class WallFooterComponent {

}