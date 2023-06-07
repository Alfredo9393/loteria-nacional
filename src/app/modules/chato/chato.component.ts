import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

export interface ElementB {
  index:number;
  line:boolean;
  value: string;
  color:string
}

@Component({
  selector: 'app-chato',
  templateUrl: './chato.component.html',
  styleUrls: ['./chato.component.css']
})
export class ChatoComponent implements OnInit {

   cardData:ElementB[] =[];
   
   completeGenerateNumber:boolean =false;
   completeMayor:boolean =false;
   completeSuperior:boolean =false;

   analized:string ="analized loading"
   analizedColor:string ="#FC3508"
   
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.GenerateNumber();
    this.loadDataMayor();
    this.loadDataSuperior();
    this.getIsLoadFinish()

  }
  dataAux: any;
  arrayPrimeroMayor:any = [];
  arrayPrimeroSuperior:any = [];

  arrayOtrosMayor:any = [];
  arrayOtrosSuperior:any = [];

  loadDataMayor(){
    this.http.get('assets/sorteo-mayor.txt', { responseType: 'text' as 'json'}).subscribe(data => {
        this.dataAux = data;
          for (const line of this.dataAux.split(/[\r\n]+/)){
          
          var dataNoSpace= line.replace(/\s/g, "");
          let splitted = dataNoSpace.split(",");  

          this.arrayPrimeroMayor.push(splitted[2])
          
          //otros lugares
          this.arrayOtrosMayor.push(splitted[3])
          this.arrayOtrosMayor.push(splitted[4])
          this.arrayOtrosMayor.push(splitted[5])
          this.arrayOtrosMayor.push(splitted[6])
          this.arrayOtrosMayor.push(splitted[7])
          this.arrayOtrosMayor.push(splitted[8])
          this.arrayOtrosMayor.push(splitted[9])
          this.arrayOtrosMayor.push(splitted[10])

        }
          // console.log(this.arrayPrimeroMayor)
        this.completeMayor=true;
      })

  }

  loadDataSuperior(){

    this.http.get('assets/sorteo-superior.txt', { responseType: 'text' as 'json'}).subscribe(data => {
      this.dataAux = data;
      for (const line of this.dataAux.split(/[\r\n]+/)){
      var dataNoSpace= line.replace(/\s/g, "");

      let splitted = dataNoSpace.split(",");  
      // console.log(splitted)

      this.arrayPrimeroSuperior.push(splitted[2])

      // otros lugares
      this.arrayOtrosSuperior.push(splitted[3])
      this.arrayOtrosSuperior.push(splitted[4])
      this.arrayOtrosSuperior.push(splitted[5])
      this.arrayOtrosSuperior.push(splitted[6])
      this.arrayOtrosSuperior.push(splitted[7])
      this.arrayOtrosSuperior.push(splitted[8])
      this.arrayOtrosSuperior.push(splitted[9])
      this.arrayOtrosSuperior.push(splitted[10])
    }
    this.completeSuperior=true;
    // console.log(this.arrayPrimeroSuperior)
  })
}



GenerateNumber(){
  let val:string="00000";
  let multiplos:number=10000;

  var colors = [ "#AFFC72","#D6FAF7", "#CCE6F7","#F7F5CC","#A1E9F6"];
  var color:string="#E3FFFA";

  for (let i = 0; i < 60000; i++) {
    let indexLengh  = i.toString().length 
    var line:boolean=false;
    // var colorNew:string="";
    // var colorAsig:string="";

    if(indexLengh === 1){
      val="0000"+i;
    }
    if(indexLengh === 2){
      val="000"+i;
    }
    if(indexLengh === 3){
      val="00"+i;
    }
    if(indexLengh === 4){
      val="0"+i;
    }
    if(indexLengh === 5){
      val = ""+i;
    }

    if(multiplos == i){
      color = colors.pop();
      line=true;
      multiplos=(multiplos+10000);
    }

  //   if(this.arrayPrimeroMayor.indexOf(val) !== -1){
  //       colorNew = "#E74C3C";
  //   }
    
  //   if(this.arrayPrimeroSuperior.indexOf(val) !== -1){
  //     colorNew = "#E74C3C"; //"#B30800";
  //  }

  //  if(this.arrayOtrosMayor.indexOf(val) !== -1){
  //   colorNew = "#F6B33E"; 
  //  }
  //  if(this.arrayOtrosSuperior.indexOf(val) !== -1){
  //   colorNew = "#F6B33E"; //"#B4F949";
  //  }


    // colorAsig = colorNew!="" ? colorNew : color 


    this.cardData.push( { "value":val,"color":color,"line":line,"index":i })
  }
  this.completeGenerateNumber=true;
  // console.log(this.cardData);

}

getIsLoadFinish(){

  let counter =50;
  let intervalId = setInterval(() => {
    counter = counter - 1;
    console.log(counter)
    if((this.completeGenerateNumber && this.completeMayor && this.completeSuperior ) || counter === 0){
      clearInterval(intervalId)
      this.getDataAnlized();
    }
  }, 2000)

}

getDataAnlized(){
  console.log("fin")

  this.cardData.forEach((currentValue1, index) => {
    let data= currentValue1.value;

    var colorNew:string="";
    if(this.arrayPrimeroMayor.indexOf(data) !== -1){
      colorNew = "#E74C3C";
    }
    if(this.arrayPrimeroSuperior.indexOf(data) !== -1){
      colorNew = "#E74C3C"; //"#B30800";
    }
    if(this.arrayOtrosMayor.indexOf(data) !== -1){
      colorNew = "#F6B33E"; 
    }
   if(this.arrayOtrosSuperior.indexOf(data) !== -1){
      colorNew = "#F6B33E"; //"#B4F949";
    }

    if(colorNew!="")
      this.cardData[index].color = colorNew;

  });

  this.analized = "analized completed"
  this.analizedColor ="#08FC2D"
} 








}
