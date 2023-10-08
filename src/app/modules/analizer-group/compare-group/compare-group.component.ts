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
  black?:string;
  tamaulipas?:string;

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
  completeCharco:boolean =false;
  completeElBlack:boolean =false;
  completeTamaulipas:boolean =false;
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getDataSonora();
    this.getDataChato();
    this.getDataChihuahua();
    this.getDataSalazar();
    this.getDataIng();
    this.getDataGuadalajara();
    this.getDataCharco();
    this.getDataBLack();
    this.getDataTamaulipas();
    this.getIsLoadFinish()
  }

  //pendiente
  arrayDataHernandez:ElementB[] =[];

  arrayDataSonora:ElementB[] =[];
  getDataSonora(){

    this.http.get('assets/sombosSonoraXML.txt', { responseType: 'text' as 'json'}).subscribe(data => {
        this.dataAux = data;
          for (const line of this.dataAux.split(/[\r\n]+/)){

            var dataNoSpace= line.replace(/\s/g, "");
            if(dataNoSpace.indexOf("</button>")!= -1 ){
              var result = dataNoSpace.substring(dataNoSpace.indexOf("</button>")-5, dataNoSpace.indexOf("</button>"));

              this.arrayDataSonora.push( { "value":result,"color":this.colorGlobal })
            }else if(dataNoSpace.substring(5,6) == "," &&  dataNoSpace.substring(dataNoSpace.length-5,dataNoSpace.length) =="</h2>" ){ // detecta si despues del primer numero de 5 dijitos viene una coma
              console.log("se detecto separacion por comas ") 
              dataNoSpace = dataNoSpace.replace("</h2>", '')
              var str_array = dataNoSpace.split(',');

              for(var i = 0; i < str_array.length; i++) {
                result = str_array[i];
                this.arrayDataSonora.push( { "value":result,"color":this.colorGlobal })
              }
            }else if(dataNoSpace.substring(5,6) == ":" ){ //detecta si despues del primer numero de 5 dijitos viene en dos puntos

              str_array = dataNoSpace.replaceAll(':[', ',').replaceAll(']', '').split(',');
              for(var i = 0; i < str_array.length; i++) {
                result = str_array[i];
                this.arrayDataSonora.push( { "value":result,"color":this.colorGlobal })
              }
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
            if(dataNoSpace.indexOf("</button>")!= -1 && dataNoSpace.indexOf("-</button>") == -1 ){
              var result = dataNoSpace.substring(dataNoSpace.indexOf("</button>")-5, dataNoSpace.indexOf("</button>"));
              this.arrayDataChato.push( { "value":result,"color":this.colorGlobal })
            }else if(dataNoSpace.substring(5,6) == "," &&  dataNoSpace.substring(dataNoSpace.length-5,dataNoSpace.length) =="</h2>" ){ // detecta si despues del primer numero de 5 dijitos viene una coma
              console.log("se detecto separacion por comas ") 
              dataNoSpace = dataNoSpace.replace("</h2>", '')
              var str_array = dataNoSpace.split(',');

              for(var i = 0; i < str_array.length; i++) {
                result = str_array[i];
                this.arrayDataChato.push( { "value":result,"color":this.colorGlobal })
              }
            }else if(dataNoSpace.substring(5,6) == ":" ){ //detecta si despues del primer numero de 5 dijitos viene en dos puntos

              str_array = dataNoSpace.replaceAll(':[', ',').replaceAll(']', '').split(',');
              for(var i = 0; i < str_array.length; i++) {
                result = str_array[i];
                this.arrayDataChato.push( { "value":result,"color":this.colorGlobal })
              }
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
            }else if(dataNoSpace.substring(5,6) == "," &&  dataNoSpace.substring(dataNoSpace.length-5,dataNoSpace.length) =="</h2>" ){ // detecta si despues del primer numero de 5 dijitos viene una coma
              console.log("se detecto separacion por comas ") 
              dataNoSpace = dataNoSpace.replace("</h2>", '')
              var str_array = dataNoSpace.split(',');

              for(var i = 0; i < str_array.length; i++) {
                result = str_array[i];
                this.arrayDataChihuahua.push( { "value":result,"color":this.colorGlobal })
              }
            }else if(dataNoSpace.substring(5,6) == ":" ){ //detecta si despues del primer numero de 5 dijitos viene en dos puntos

              str_array = dataNoSpace.replaceAll(':[', ',').replaceAll(']', '').split(',');
              for(var i = 0; i < str_array.length; i++) {
                result = str_array[i];
                this.arrayDataChihuahua.push( { "value":result,"color":this.colorGlobal })
              }
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
            if(dataNoSpace.indexOf("</button>")!= -1 && dataNoSpace.indexOf("-</button>") == -1 ){
              var result = dataNoSpace.substring(dataNoSpace.indexOf("</button>")-5, dataNoSpace.indexOf("</button>"));
              this.arrayDataSalazar.push( { "value":result,"color":this.colorGlobal })
            }else if(dataNoSpace.substring(5,6) == "," &&  dataNoSpace.substring(dataNoSpace.length-5,dataNoSpace.length) =="</h2>" ){ // detecta si despues del primer numero de 5 dijitos viene una coma
              console.log("se detecto separacion por comas ") 
              dataNoSpace = dataNoSpace.replace("</h2>", '')
              var str_array = dataNoSpace.split(',');

              for(var i = 0; i < str_array.length; i++) {
                result = str_array[i];
                this.arrayDataSalazar.push( { "value":result,"color":this.colorGlobal })
              }
            }else if(dataNoSpace.substring(5,6) == ":" ){ //detecta si despues del primer numero de 5 dijitos viene en dos puntos

              str_array = dataNoSpace.replaceAll(':[', ',').replaceAll(']', '').split(',');
              for(var i = 0; i < str_array.length; i++) {
                result = str_array[i];
                this.arrayDataSalazar.push( { "value":result,"color":this.colorGlobal })
              }
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
              // console.log("valid1: "+dataNoSpace.indexOf("</button>") + " valid2: "+ dataNoSpace.indexOf("-</button>") +" result:"+result)

              this.arrayDataIng.push( { "value":result,"color":this.colorGlobal })
            }else if(dataNoSpace.substring(5,6) == "," &&  dataNoSpace.substring(dataNoSpace.length-5,dataNoSpace.length) =="</h2>" ){ // detecta si despues del primer numero de 5 dijitos viene una coma
              console.log("se detecto separacion por comas ") 
              dataNoSpace = dataNoSpace.replace("</h2>", '')
              var str_array = dataNoSpace.split(',');

              for(var i = 0; i < str_array.length; i++) {
                result = str_array[i];
                this.arrayDataIng.push( { "value":result,"color":this.colorGlobal })
              }
            }else if(dataNoSpace.substring(5,6) == ":" ){ //detecta si despues del primer numero de 5 dijitos viene en dos puntos

              str_array = dataNoSpace.replaceAll(':[', ',').replaceAll(']', '').split(',');
              for(var i = 0; i < str_array.length; i++) {
                result = str_array[i];
                this.arrayDataIng.push( { "value":result,"color":this.colorGlobal })
              }
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
              // console.log("valid1: "+dataNoSpace.indexOf("</button>") + " valid2: "+ dataNoSpace.indexOf("-</button>") +" result:"+result)

              this.arrayDataGuadalajara.push( { "value":result,"color":this.colorGlobal })
            }else if(dataNoSpace.substring(5,6) == "," &&  dataNoSpace.substring(dataNoSpace.length-5,dataNoSpace.length) =="</h2>" ){ // detecta si despues del primer numero de 5 dijitos viene una coma
              console.log("se detecto separacion por comas ") 
              dataNoSpace = dataNoSpace.replace("</h2>", '')
              var str_array = dataNoSpace.split(',');

              for(var i = 0; i < str_array.length; i++) {
                result = str_array[i];
                this.arrayDataGuadalajara.push( { "value":result,"color":this.colorGlobal })
              }
            }else if(dataNoSpace.substring(5,6) == ":" ){ //detecta si despues del primer numero de 5 dijitos viene en dos puntos

              str_array = dataNoSpace.replaceAll(':[', ',').replaceAll(']', '').split(',');
              for(var i = 0; i < str_array.length; i++) {
                result = str_array[i];
                this.arrayDataGuadalajara.push( { "value":result,"color":this.colorGlobal })
              }
            }
        }
        this.completeGuadalajara=true;
      })
  }

  arrayDataCharco:ElementB[] =[];
  getDataCharco(){
    this.http.get('assets/charcoXML.txt', { responseType: 'text' as 'json'}).subscribe(data => {
        this.dataAux = data;
          for (const line of this.dataAux.split(/[\r\n]+/)){
            var dataNoSpace= line.replace(/\s/g, "");
            
            if(dataNoSpace.indexOf("</button>")!= -1 && dataNoSpace.indexOf("-</button>") == -1 ){
              var result = dataNoSpace.substring(dataNoSpace.indexOf("</button>")-5, dataNoSpace.indexOf("</button>"));
              // console.log("valid1: "+dataNoSpace.indexOf("</button>") + " valid2: "+ dataNoSpace.indexOf("-</button>") +" result:"+result)

              this.arrayDataCharco.push( { "value":result,"color":this.colorGlobal })
            }else if(dataNoSpace.substring(5,6) == "," &&  dataNoSpace.substring(dataNoSpace.length-5,dataNoSpace.length) =="</h2>" ){ // detecta si despues del primer numero de 5 dijitos viene una coma
              console.log("se detecto separacion por comas ") 
              dataNoSpace = dataNoSpace.replace("</h2>", '')
              var str_array = dataNoSpace.split(',');

              for(var i = 0; i < str_array.length; i++) {
                result = str_array[i];
                this.arrayDataCharco.push( { "value":result,"color":this.colorGlobal })
              }
            }else if(dataNoSpace.substring(5,6) == ":" ){ //detecta si despues del primer numero de 5 dijitos viene en dos puntos

              str_array = dataNoSpace.replaceAll(':[', ',').replaceAll(']', '').split(',');
              for(var i = 0; i < str_array.length; i++) {
                result = str_array[i];
                this.arrayDataCharco.push( { "value":result,"color":this.colorGlobal })
              }
            }
        }
        this.completeCharco=true;
      })
  }
  
  arrayDataBlack:ElementB[] =[];
  getDataBLack(){
    this.http.get('assets/elBlackXML.txt', { responseType: 'text' as 'json'}).subscribe(data => {
        this.dataAux = data;
          for (const line of this.dataAux.split(/[\r\n]+/)){
            var dataNoSpace= line.replace(/\s/g, "");
            
            if(dataNoSpace.indexOf("</button>")!= -1 && dataNoSpace.indexOf("-</button>") == -1 ){
              var result = dataNoSpace.substring(dataNoSpace.indexOf("</button>")-5, dataNoSpace.indexOf("</button>"));
              console.log("valid1: "+dataNoSpace.indexOf("</button>") + " valid2: "+ dataNoSpace.indexOf("-</button>") +" result:"+result)

              this.arrayDataBlack.push( { "value":result,"color":this.colorGlobal })
            }else if(dataNoSpace.substring(5,6) == "," &&  dataNoSpace.substring(dataNoSpace.length-5,dataNoSpace.length) =="</h2>" ){ // detecta si despues del primer numero de 5 dijitos viene una coma
              console.log("se detecto separacion por comas ") 
              dataNoSpace = dataNoSpace.replace("</h2>", '')
              var str_array = dataNoSpace.split(',');

              for(var i = 0; i < str_array.length; i++) {
                result = str_array[i];
                this.arrayDataBlack.push( { "value":result,"color":this.colorGlobal })
              }
            }else if(dataNoSpace.substring(5,6) == ":" ){ //detecta si despues del primer numero de 5 dijitos viene en dos puntos

              str_array = dataNoSpace.replaceAll(':[', ',').replaceAll(']', '').split(',');
              for(var i = 0; i < str_array.length; i++) {
                result = str_array[i];
                this.arrayDataBlack.push( { "value":result,"color":this.colorGlobal })
              }
            }
        }
        this.completeElBlack=true;
      })
  }

  arrayDataTamaulipas:ElementB[] =[];
  getDataTamaulipas(){
    this.http.get('assets/tamaulipasXML.txt', { responseType: 'text' as 'json'}).subscribe(data => {
      // console.log("ver datos A1")
      // console.log(data)
      // console.log("ver datos A1")
 
        this.dataAux = data;
          for (const line of this.dataAux.split(/[\r\n]+/)){ // Recorre linea por linea
            var dataNoSpace= line.replace(/\s/g, "");
            


            if(dataNoSpace.indexOf("</button>")!= -1 && dataNoSpace.indexOf("-</button>") == -1 ){
              var result = dataNoSpace.substring(dataNoSpace.indexOf("</button>")-5, dataNoSpace.indexOf("</button>"));
              console.log("valid1: "+dataNoSpace.indexOf("</button>") + " valid2: "+ dataNoSpace.indexOf("-</button>") +" result:"+result)

              this.arrayDataTamaulipas.push( { "value":result,"color":this.colorGlobal })

            }else if(dataNoSpace.substring(5,6) == "," &&  dataNoSpace.substring(dataNoSpace.length-5,dataNoSpace.length) =="</h2>" ){ // detecta si despues del primer numero de 5 dijitos viene una coma
              console.log("se detecto separacion por comas ") 
              dataNoSpace = dataNoSpace.replace("</h2>", '')
              var str_array = dataNoSpace.split(',');

              for(var i = 0; i < str_array.length; i++) {
                result = str_array[i];
                this.arrayDataTamaulipas.push( { "value":result,"color":this.colorGlobal })
              }
            }else if(dataNoSpace.substring(5,6) == ":" ){ //detecta si despues del primer numero de 5 dijitos viene en dos puntos

              str_array = dataNoSpace.replaceAll(':[', ',').replaceAll(']', '').split(',');
              for(var i = 0; i < str_array.length; i++) {
                result = str_array[i];
                this.arrayDataTamaulipas.push( { "value":result,"color":this.colorGlobal })
              }
            }



        }
        this.completeTamaulipas=true;
      })
  }
  
  

  getIsLoadFinish(){
    let counter =50;
    let intervalId = setInterval(() => {
      counter = counter - 1;
      console.log(counter)
      if((this.completeSonora && this.completeChato && this.completeChihuahua && this.completeSalazar 
        && this.completeIng && this.completeChihuahua && this.completeCharco && this.completeElBlack 
        && this.completeTamaulipas) || counter === 0){
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
          this.searchCharco(data1,"#a25e50")
          this.searchBlack(data1," #65971d ")
          this.searchTamaulipas(data1,"#4175a3")

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
          this.searchCharco(data1,"#a25e50")
          this.searchBlack(data1,"#65971d")
          this.searchTamaulipas(data1,"#4175a3")

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
          this.searchCharco(data1,"#a25e50")
          this.searchBlack(data1,"#65971d")
          this.searchTamaulipas(data1,"#4175a3")

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
          this.searchCharco(data1,"#a25e50")
          this.searchBlack(data1,"#65971d")
          this.searchTamaulipas(data1,"#4175a3")

        });

        this.arrayDataIng.forEach((currentValue1, index) => {
          let data1= currentValue1.value;
          this.searchSonora(data1,"#F79F81")
          this.searchChato(data1,"#F3F781")
          this.searchChihuahua(data1,"#58FAD0")
          this.searchSalazar(data1,"#AC58FA")
          // this.searchIng(data1,"#F781F3")
          this.searchGuadalajara(data1,"#2E9AFE")
          this.searchCharco(data1,"#a25e50")
          this.searchBlack(data1,"#65971d")
          this.searchTamaulipas(data1,"#4175a3")

        });

        this.arrayDataGuadalajara.forEach((currentValue1, index) => {
            let data1= currentValue1.value;
            this.searchSonora(data1,"#F79F81")
            this.searchChato(data1,"#F3F781")
            this.searchChihuahua(data1,"#58FAD0")
            this.searchSalazar(data1,"#AC58FA")
            this.searchIng(data1,"#F781F3")
            // this.searchGuadalajara(data1,"#2E9AFE")
            this.searchCharco(data1,"#a25e50")
            this.searchBlack(data1,"#65971d")
            this.searchTamaulipas(data1,"#4175a3")


        });


        this.arrayDataCharco.forEach((currentValue1, index) => {
          let data1= currentValue1.value;
          this.searchSonora(data1,"#F79F81")
          this.searchChato(data1,"#F3F781")
          this.searchChihuahua(data1,"#58FAD0")
          this.searchSalazar(data1,"#AC58FA")
          this.searchIng(data1,"#F781F3")
          this.searchGuadalajara(data1,"#2E9AFE")
          // this.searchCharco(data1,"#a25e50")
          this.searchBlack(data1,"#65971d")
          this.searchTamaulipas(data1,"#4175a3")


      });


      this.arrayDataBlack.forEach((currentValue1, index) => {
        let data1= currentValue1.value;
        this.searchSonora(data1,"#F79F81")
        this.searchChato(data1,"#F3F781")
        this.searchChihuahua(data1,"#58FAD0")
        this.searchSalazar(data1,"#AC58FA")
        this.searchIng(data1,"#F781F3")
        this.searchGuadalajara(data1,"#2E9AFE")
        this.searchCharco(data1,"#a25e50")
        // this.searchBlack(data1," #65971d ")
       });

       this.arrayDataTamaulipas.forEach((currentValue1, index) => {
        let data1= currentValue1.value;
        this.searchSonora(data1,"#F79F81")
        this.searchChato(data1,"#F3F781")
        this.searchChihuahua(data1,"#58FAD0")
        this.searchSalazar(data1,"#AC58FA")
        this.searchIng(data1,"#F781F3")
        this.searchGuadalajara(data1,"#2E9AFE")
        this.searchCharco(data1,"#a25e50")
        this.searchBlack(data1,"#65971d")
        // this.searchTamaulipas(data1,"#4175a3")
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




  searchCharco(number:string,color:string): void{
    let element = {
      value: number,color:color,charco:"charco",
    }
    this.arrayDataCharco.forEach((currentValue, indexx) => {
      if (currentValue.value ==number  ){
        const i = this.arrayDuplicate.findIndex(_element => _element.value === number);
        if (i > -1){
          this.arrayDuplicate[i].charco = "charco"; 
          this.arrayDuplicate[i].duplicate = true; 
        }else 
          this.arrayDuplicate.push(element)
      }
    });
  }

  searchBlack(number:string,color:string): void{
    let element = {
      value: number,color:color,black:"black",
    }
    this.arrayDataBlack.forEach((currentValue, indexx) => {
      if (currentValue.value ==number  ){
        const i = this.arrayDuplicate.findIndex(_element => _element.value === number);
        if (i > -1){
          this.arrayDuplicate[i].black = "black"; 
          this.arrayDuplicate[i].duplicate = true; 
        }else 
          this.arrayDuplicate.push(element)
      }
    });
  }

  searchTamaulipas(number:string,color:string): void{
    let element = {
      value: number,color:color,tamaulipas:"tamaulipas",
    }
    this.arrayDataTamaulipas.forEach((currentValue, indexx) => {
      if (currentValue.value ==number  ){
        const i = this.arrayDuplicate.findIndex(_element => _element.value === number);
        if (i > -1){
          this.arrayDuplicate[i].tamaulipas = "tamaulipas"; 
          this.arrayDuplicate[i].duplicate = true; 
        }else 
          this.arrayDuplicate.push(element)
      }
    });
  }

  

  updateData(){
    console.log("** update data **")
    let match:string ="NO MATCHES";

    this.arrayDuplicate.forEach((currentValue, index) => {
      let indexToUpdate =-1;
      let color:string ="#0FFA12";
      match ="MATCH";

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

      indexToUpdate = this.arrayDataCharco.findIndex(item => item.value === currentValue.value);
        if(indexToUpdate!=-1)
          this.arrayDataCharco[indexToUpdate].color = color;

      indexToUpdate = this.arrayDataBlack.findIndex(item => item.value === currentValue.value);
      if(indexToUpdate!=-1)
        this.arrayDataBlack[indexToUpdate].color = color;

      indexToUpdate = this.arrayDataTamaulipas.findIndex(item => item.value === currentValue.value);
      if(indexToUpdate!=-1)
        this.arrayDataTamaulipas[indexToUpdate].color = color;

    });

    this.analized = "analized completed :"+match
    this.analizedColor ="#08FC2D"
  }

}
