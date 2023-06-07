import { Component, ElementRef, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent  {

  compareAll:boolean =true;
  activeMayor:boolean =false;
  activeSuperior:boolean =false;
  activeZodiaco:boolean =false;
  activeCalendario:boolean =false;
  activeChihuahua:boolean =false;
  activeGuadalajara:boolean =false;
  activeChato:boolean =false;
  analizedgroup:boolean =false;

  
  constructor(private eRef: ElementRef) {
  }


  ngOnInit(): void {
  }

  active(id:any){
    this.compareAll = false;
    this.activeMayor = false;
    this.activeSuperior = false;
    this.activeZodiaco = false;
    this.activeCalendario = false;
  
    if(id=='all'){
      this.compareAll = true;
    }else if (id=='mayor'){
      this.activeMayor = true;
    }else if (id=='superior'){
      this.activeSuperior = true;
    }else if (id=='zodiaco'){
      this.activeZodiaco = true;
    }else if (id=='calendario'){
      this.activeCalendario = true;
    }else if (id=='chihuahua'){
      this.activeChihuahua = true;
    }else if (id=='guadalajara'){
      this.activeGuadalajara = true;
    }
  }







}

