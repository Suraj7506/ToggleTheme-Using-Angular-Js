import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DarkMode';
  isDarkTheme = false;
  
  togglebutton(){
    this.isDarkTheme =! this.isDarkTheme
    if (this.title =="DarkMode"){
      this.title = "LightMode";
    }
    else{
      this.title = "DarkMode"
    }
}}
