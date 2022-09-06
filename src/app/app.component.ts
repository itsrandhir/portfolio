import { Component, HostListener, OnInit } from '@angular/core';
import * as THREE from "three";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';

  top:any;
  left:any;
  expand = false;

  constructor() {}

  @HostListener('document:click', ['$event'])
  onClick($event:any){
    this.expand=true;
    setTimeout(() =>{
      this.expand=false;
    },500)
  }

  @HostListener('document:mousemove',['$event'])
  onMousemove($event:any){
    this.top=($event.pageY-10)+"px";
    this.left=($event.pageX-10)+"px";
  }
  
}
