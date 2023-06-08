import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

export interface ElementB {
  value: string;
  color:string
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

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getDataSonora();
    this.getDataChato();
    this.getDataChihuahua();
    this.getDataSalazar();
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


  getIsLoadFinish(){

    let counter =50;
    let intervalId = setInterval(() => {
      counter = counter - 1;
      console.log(counter)
      if((this.completeSonora && this.completeChato && this.completeChihuahua && this.completeSalazar) || counter === 0){
        clearInterval(intervalId)
        this.getDataAnlized();
      }
    }, 2000)

  }


  arrayDuplicate:string[] =[];
  getDataAnlized(){
    console.log("fin")
    
        //sonora
        this.arrayDataSonora.forEach((currentValue1, index) => {
          let data1= currentValue1.value;

          this.arrayDataChato.forEach((currentValue2, index) => {
            let data2= currentValue2.value;
            if (data1 ==data2  )
              this.arrayDuplicate.push(data1)
          });
          this.arrayDataChihuahua.forEach((currentValue3, index) => {
            let data3= currentValue3.value;
            if (data1 ==data3  )
              this.arrayDuplicate.push(data1)
          });
          this.arrayDataSalazar.forEach((currentValue4, index) => {
            let data4= currentValue4.value;
            if (data1 ==data4  )
              this.arrayDuplicate.push(data1)
          });

        });

        //chato
        this.arrayDataChato.forEach((currentValue1, index) => {
          let data1= currentValue1.value;

          this.arrayDataSonora.forEach((currentValue2, index) => {
            let data2= currentValue2.value;
            if (data1 ==data2  )
              this.arrayDuplicate.push(data1)
          });
          this.arrayDataChihuahua.forEach((currentValue3, index) => {
            let data3= currentValue3.value;
            if (data1 ==data3  )
              this.arrayDuplicate.push(data1)
          });
          this.arrayDataSalazar.forEach((currentValue4, index) => {
            let data4= currentValue4.value;
            if (data1 ==data4  )
              this.arrayDuplicate.push(data1)
          });

        });


        //chihuahua
        this.arrayDataChihuahua.forEach((currentValue1, index) => {
          let data1= currentValue1.value;
    
          this.arrayDataChato.forEach((currentValue2, index) => {
            let data2= currentValue2.value;
            if (data1 ==data2  )
              this.arrayDuplicate.push(data1)
          });
          this.arrayDataSonora.forEach((currentValue3, index) => {
            let data3= currentValue3.value;
            if (data1 ==data3  )
              this.arrayDuplicate.push(data1)
          });
          this.arrayDataSalazar.forEach((currentValue4, index) => {
            let data4= currentValue4.value;
            if (data1 ==data4  )
              this.arrayDuplicate.push(data1)
          });
    
        });

        //salazar
        this.arrayDataSalazar.forEach((currentValue1, index) => {
          let data1= currentValue1.value;
    
          this.arrayDataChihuahua.forEach((currentValue2, index) => {
            let data2= currentValue2.value;
            if (data1 ==data2  )
              this.arrayDuplicate.push(data1)
          });
          this.arrayDataChato.forEach((currentValue3, index) => {
            let data3= currentValue3.value;
            if (data1 ==data3  )
              this.arrayDuplicate.push(data1)
          });
          this.arrayDataSonora.forEach((currentValue4, index) => {
            let data4= currentValue4.value;
            if (data1 ==data4  )
              this.arrayDuplicate.push(data1)
          });
        });

        this.updateData();
  }

  updateData(){
    console.log("** update data **")

    this.arrayDuplicate.forEach((currentValue, index) => {
      let indexToUpdate =-1;
      let color:string ="#0FFA12";

      indexToUpdate = this.arrayDataChihuahua.findIndex(item => item.value === currentValue);
      if(indexToUpdate!=-1)
        this.arrayDataChihuahua[indexToUpdate].color = color;

      indexToUpdate = this.arrayDataChato.findIndex(item => item.value === currentValue);
      if(indexToUpdate!=-1)
        this.arrayDataChato[indexToUpdate].color = color;

      indexToUpdate = this.arrayDataSonora.findIndex(item => item.value === currentValue);
      if(indexToUpdate!=-1)
        this.arrayDataSonora[indexToUpdate].color = color;

      indexToUpdate = this.arrayDataSalazar.findIndex(item => item.value === currentValue);
      if(indexToUpdate!=-1)
        this.arrayDataSalazar[indexToUpdate].color = color;

      this.analized = "analized completed"
      this.analizedColor ="#08FC2D"

    });

  }

}
