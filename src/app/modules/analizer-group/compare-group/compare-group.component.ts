import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

export interface ElementB {
  value: string;
  color:string
}
export interface ElementC {
  value: string;
  color:string;
  duplicate?:boolean;
  sonora?:string;
  chato?:string;
  chihuahua?:string;
  salazar?:string;
  ing?:string;
  guadalajara?:string;
  charco?:string;
  hernandez?:string;
}




@Component({
  selector: 'app-compare-group',
  templateUrl: './compare-group.component.html',
  styleUrls: ['./compare-group.component.css']
})
export class CompareGroupComponent implements OnInit {

  analized:string ="analized loading"
  analizedColor:string ="#FC3508"

  colorGlobal="#D1D4D5"
  dataAux: any;
  completeSonora:boolean =false;
  completeChato:boolean =false;
  completeChihuahua:boolean =false;
  completeSalazar:boolean =false;
  completeIng:boolean =false;
  completeGuadalajara:boolean =false;



  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getDataSonora();
    this.getDataChato();
    this.getDataChihuahua();
    this.getDataSalazar();
    this.getDataIng();
    this.getDataGuadalajara();
    this.getIsLoadFinish()
  }

  //pendiente
  arrayDataHernandez:ElementB[] =[];
  arrayDataCharco:ElementB[] =[];


  arrayDataSonora:ElementB[] =[];
  getDataSonora(){

    this.http.get('assets/sombosSonoraXML.txt', { responseType: 'text' as 'json'}).subscribe(data => {
        this.dataAux = data;
          for (const line of this.dataAux.split(/[\r\n]+/)){

            var dataNoSpace= line.replace(/\s/g, "");
            if(dataNoSpace.indexOf("</button>")!= -1 ){
              var result = dataNoSpace.substring(dataNoSpace.indexOf("</button>")-5, dataNoSpace.indexOf("</button>"));

              this.arrayDataSonora.push( { "value":result,"color":this.colorGlobal })
            }
        }
        this.completeSonora=true;
      })

  }

  arrayDataChato:ElementB[] =[];
  getDataChato(){

    this.http.get('assets/chatoXML.txt', { responseType: 'text' as 'json'}).subscribe(data => {
        this.dataAux = data;
          for (const line of this.dataAux.split(/[\r\n]+/)){

            var dataNoSpace= line.replace(/\s/g, "");
            if(dataNoSpace.indexOf("</button>")!= -1 ){
              var result = dataNoSpace.substring(dataNoSpace.indexOf("</button>")-5, dataNoSpace.indexOf("</button>"));
              this.arrayDataChato.push( { "value":result,"color":this.colorGlobal })
            }

        }
        this.completeChato=true;

      })
  }

  arrayDataChihuahua:ElementB[] =[];
  getDataChihuahua(){
    this.http.get('assets/chihuahuaXML.txt', { responseType: 'text' as 'json'}).subscribe(data => {
        this.dataAux = data;
          for (const line of this.dataAux.split(/[\r\n]+/)){
            var dataNoSpace= line.replace(/\s/g, "");
            if(dataNoSpace.indexOf("</button>")!= -1 ){
              var result = dataNoSpace.substring(dataNoSpace.indexOf("</button>")-5, dataNoSpace.indexOf("</button>"));
              this.arrayDataChihuahua.push( { "value":result,"color":this.colorGlobal })
            }
        }
        this.completeChihuahua=true;
      })
  }

  arrayDataSalazar:ElementB[] =[];
  getDataSalazar(){
    this.http.get('assets/salazarXML.txt', { responseType: 'text' as 'json'}).subscribe(data => {
        this.dataAux = data;
          for (const line of this.dataAux.split(/[\r\n]+/)){
            var dataNoSpace= line.replace(/\s/g, "");
            if(dataNoSpace.indexOf("</button>")!= -1 ){
              var result = dataNoSpace.substring(dataNoSpace.indexOf("</button>")-5, dataNoSpace.indexOf("</button>"));
              this.arrayDataSalazar.push( { "value":result,"color":this.colorGlobal })
            }
        }
        this.completeSalazar=true;
      })
  }

  arrayDataIng:ElementB[] =[];
  getDataIng(){
    this.http.get('assets/ingXML.txt', { responseType: 'text' as 'json'}).subscribe(data => {
        this.dataAux = data;
          for (const line of this.dataAux.split(/[\r\n]+/)){
            var dataNoSpace= line.replace(/\s/g, "");
            
            if(dataNoSpace.indexOf("</button>")!= -1 && dataNoSpace.indexOf("-</button>") == -1 ){
              var result = dataNoSpace.substring(dataNoSpace.indexOf("</button>")-5, dataNoSpace.indexOf("</button>"));
              console.log("valid1: "+dataNoSpace.indexOf("</button>") + " valid2: "+ dataNoSpace.indexOf("-</button>") +" result:"+result)

              this.arrayDataIng.push( { "value":result,"color":this.colorGlobal })
            }
        }
        this.completeIng=true;
      })
  }

  arrayDataGuadalajara:ElementB[] =[];
  getDataGuadalajara(){
    this.http.get('assets/guadalajaraXML.txt', { responseType: 'text' as 'json'}).subscribe(data => {
        this.dataAux = data;
          for (const line of this.dataAux.split(/[\r\n]+/)){
            var dataNoSpace= line.replace(/\s/g, "");
            
            if(dataNoSpace.indexOf("</button>")!= -1 && dataNoSpace.indexOf("-</button>") == -1 ){
              var result = dataNoSpace.substring(dataNoSpace.indexOf("</button>")-5, dataNoSpace.indexOf("</button>"));
              console.log("valid1: "+dataNoSpace.indexOf("</button>") + " valid2: "+ dataNoSpace.indexOf("-</button>") +" result:"+result)

              this.arrayDataGuadalajara.push( { "value":result,"color":this.colorGlobal })
            }
        }
        this.completeGuadalajara=true;
      })
  }



  


  getIsLoadFinish(){
    let counter =50;
    let intervalId = setInterval(() => {
      counter = counter - 1;
      console.log(counter)
      if((this.completeSonora && this.completeChato && this.completeChihuahua && this.completeSalazar 
        && this.completeIng && this.completeChihuahua) || counter === 0){
        clearInterval(intervalId)
        this.getDataAnlized();
      }
    }, 2000)
  }



  arrayDuplicate:ElementC[] =[];
  getDataAnlized(){
    console.log("start analized")
        //sonora
        this.arrayDataSonora.forEach((currentValue1, index) => {
          let data1= currentValue1.value;
          // this.searchSonora(data1,"#F79F81")
          this.searchChato(data1,"#F3F781")
          this.searchChihuahua(data1,"#58FAD0")
          this.searchSalazar(data1,"#AC58FA")
          this.searchIng(data1,"#F781F3")
          this.searchGuadalajara(data1,"#2E9AFE")
        });

        //chato
        this.arrayDataChato.forEach((currentValue1, index) => {
          let data1= currentValue1.value;
          this.searchSonora(data1,"#F79F81")
          // this.searchChato(data1,"#F3F781")
          this.searchChihuahua(data1,"#58FAD0")
          this.searchSalazar(data1,"#AC58FA")
          this.searchIng(data1,"#F781F3")
          this.searchGuadalajara(data1,"#2E9AFE")

        });

        //chihuahua
        this.arrayDataChihuahua.forEach((currentValue1, index) => {
          let data1= currentValue1.value;
          this.searchSonora(data1,"#F79F81")
          this.searchChato(data1,"#F3F781")
          // this.searchChihuahua(data1,"#58FAD0")
          this.searchSalazar(data1,"#AC58FA")
          this.searchIng(data1,"#F781F3")
          this.searchGuadalajara(data1,"#2E9AFE")
        });

        //salazar
        this.arrayDataSalazar.forEach((currentValue1, index) => {
          let data1= currentValue1.value;
          this.searchSonora(data1,"#F79F81")
          this.searchChato(data1,"#F3F781")
          this.searchChihuahua(data1,"#58FAD0")
          // this.searchSalazar(data1,"#AC58FA")
          this.searchIng(data1,"#F781F3")
          this.searchGuadalajara(data1,"#2E9AFE")
        });

        this.arrayDataIng.forEach((currentValue1, index) => {
          let data1= currentValue1.value;
          this.searchSonora(data1,"#F79F81")
          this.searchChato(data1,"#F3F781")
          this.searchChihuahua(data1,"#58FAD0")
          this.searchSalazar(data1,"#AC58FA")
          // this.searchIng(data1,"#F781F3")
          this.searchGuadalajara(data1,"#2E9AFE")
        });

        this.arrayDataGuadalajara.forEach((currentValue1, index) => {
            let data1= currentValue1.value;
            this.searchSonora(data1,"#F79F81")
            this.searchChato(data1,"#F3F781")
            this.searchChihuahua(data1,"#58FAD0")
            this.searchSalazar(data1,"#AC58FA")
            this.searchIng(data1,"#F781F3")
            // this.searchGuadalajara(data1,"#2E9AFE")
        });

        console.log("duplicados");
        console.log(this.arrayDuplicate);
        this.updateData();
  }

  searchSonora(number:string,color:string): void{
    let element = {
      value: number,color:color,sonora:"sonora",
    }
    this.arrayDataSonora.forEach((currentValue, indexx) => {
      if (currentValue.value ==number  ){
        const i = this.arrayDuplicate.findIndex(_element => _element.value === number);
        if (i > -1){
          this.arrayDuplicate[i].sonora = "sonora"; 
          this.arrayDuplicate[i].duplicate = true; 
        }else 
          this.arrayDuplicate.push(element)
      }
    });
  }
  searchChato(number:string,color:string): void{
    let element = {
      value: number,color:color,chato:"chato",
    }
    this.arrayDataChato.forEach((currentValue, indexx) => {
      if (currentValue.value ==number  ){
        const i = this.arrayDuplicate.findIndex(_element => _element.value === number);
        if (i > -1){
          this.arrayDuplicate[i].chato = "chato"; 
          this.arrayDuplicate[i].duplicate = true; 
        }else 
          this.arrayDuplicate.push(element)
      }
    });
  }

  searchChihuahua(number:string,color:string): void{
    let element = {
      value: number,color:color,chihuahua:"chihuahua",
    }
    this.arrayDataChihuahua.forEach((currentValue, indexx) => {
      if (currentValue.value ==number  ){
        const i = this.arrayDuplicate.findIndex(_element => _element.value === number);
        if (i > -1){
          this.arrayDuplicate[i].chihuahua = "chihuahua"; 
          this.arrayDuplicate[i].duplicate = true; 
        }else 
          this.arrayDuplicate.push(element)
      }
    });
  }
  searchSalazar(number:string,color:string): void{
    let element = {
      value: number,color:color,salazar:"salazar",
    }
    this.arrayDataSalazar.forEach((currentValue, indexx) => {
      if (currentValue.value ==number  ){
        const i = this.arrayDuplicate.findIndex(_element => _element.value === number);
        if (i > -1){
          this.arrayDuplicate[i].salazar = "salazar"; 
          this.arrayDuplicate[i].duplicate = true; 
        }else 
          this.arrayDuplicate.push(element)
      }
    });
  }

  searchIng(number:string,color:string): void{
    let element = {
      value: number,color:color,ing:"ing",
    }
    this.arrayDataIng.forEach((currentValue, indexx) => {
      if (currentValue.value ==number  ){
        const i = this.arrayDuplicate.findIndex(_element => _element.value === number);
        if (i > -1){
          this.arrayDuplicate[i].ing = "ing"; 
          this.arrayDuplicate[i].duplicate = true; 
        }else 
          this.arrayDuplicate.push(element)
      }
    });
  }

  searchGuadalajara(number:string,color:string): void{
    let element = {
      value: number,color:color,guadalajara:"guadalajara",
    }
    this.arrayDataGuadalajara.forEach((currentValue, indexx) => {
      if (currentValue.value ==number  ){
        const i = this.arrayDuplicate.findIndex(_element => _element.value === number);
        if (i > -1){
          this.arrayDuplicate[i].guadalajara = "guadalajara"; 
          this.arrayDuplicate[i].duplicate = true; 
        }else 
          this.arrayDuplicate.push(element)
      }
    });
  }



  updateData(){
    console.log("** update data **")

    this.arrayDuplicate.forEach((currentValue, index) => {
      let indexToUpdate =-1;
      let color:string ="#0FFA12";

      indexToUpdate = this.arrayDataChihuahua.findIndex(item => item.value === currentValue.value);
      if(indexToUpdate!=-1)
        this.arrayDataChihuahua[indexToUpdate].color = color;

      indexToUpdate = this.arrayDataChato.findIndex(item => item.value === currentValue.value);
      if(indexToUpdate!=-1)
        this.arrayDataChato[indexToUpdate].color = color;

      indexToUpdate = this.arrayDataSonora.findIndex(item => item.value === currentValue.value);
      if(indexToUpdate!=-1)
        this.arrayDataSonora[indexToUpdate].color = color;

      indexToUpdate = this.arrayDataSalazar.findIndex(item => item.value === currentValue.value);
      if(indexToUpdate!=-1)
        this.arrayDataSalazar[indexToUpdate].color = color;

      indexToUpdate = this.arrayDataIng.findIndex(item => item.value === currentValue.value);
      if(indexToUpdate!=-1)
        this.arrayDataIng[indexToUpdate].color = color;

      indexToUpdate = this.arrayDataGuadalajara.findIndex(item => item.value === currentValue.value);
      if(indexToUpdate!=-1)
        this.arrayDataGuadalajara[indexToUpdate].color = color;

      this.analized = "analized completed"
      this.analizedColor ="#08FC2D"

    });

  }

}
