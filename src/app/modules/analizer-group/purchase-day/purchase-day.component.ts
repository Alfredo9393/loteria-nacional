import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { HttpClient } from '@angular/common/http'; 

export class ElementDt { //interface
  index: string;
  numero: number;
  name: string;
  dias_transcurridos: number;
  fechaInicio: string;
  fechaFin: string;
  datePurchase: string;
  activePurchase: boolean;
  arrayDays:ElementDay[] ;
}

export class ElementDay {
  day: number;
  value:string;
  active:boolean;
}

@Component({
  selector: 'app-purchase-day',
  templateUrl: './purchase-day.component.html',
  styleUrls: ['./purchase-day.component.css']
})
export class PurchaseDayComponent  {

  // data = [
  //   { index: '10 octubre 2023', name: 'Chato', item: 0.297 },
  //   { index: '10 octubre 2023', name: 'Chihuahua', item: 0.04 },
  //   { index: '10 octubre 2023', name: 'Guadalajara', item: 0.14 },
  //   { index: '10 octubre 2023', name: 'Tamaulipas', item: 0.14 },
  //   { index: '10 octubre 2023', name: 'Hernandez', item: 0.14 },
  //   { index: '10 octubre 2023', name: 'Ing', item: 0.14 },
  //   { index: '17 octubre 2023', name: 'Chato', item: 0.019 },
  //   { index: '17 octubre 2023', name: 'Chihuahua', item: 0.0374 }, 
  //   { index: '17 octubre 2023', name: 'Guadalajara', item: 0.037 },
  //   { index: '17 octubre 2023', name: 'Ing', item: 0.14 }
  // ];

  dataExt: any[] = [];
  dataAux: any;

  header: Array<string> = ['Index', 'numero', 'nombre', 'Fecha Inicio'];

  arrayData:ElementDt[] =[];

  constructor(private http: HttpClient) {
    this.loadData();
  }

  loadData(){


    this.http.get('assets/purchaseDay.txt', { responseType: 'text' as 'json'}).subscribe(data => {
      this.dataAux = data;

        for (const line of this.dataAux.split(/[\r\n]+/)){

          var dataNoSpace= line.replace(/\s/g, "");
          var str_array = dataNoSpace.split(',');
          // console.log(str_array);


          // 
          
          var dateStart =str_array[3];
          var dateEnd =str_array[4];
          var diferencia = moment(dateEnd).diff(moment(dateStart), 'days');


          const element: ElementDt = new ElementDt();
          element.index=str_array[0];
          element.numero=str_array[1];
          element.name=str_array[2];
          element.fechaInicio=dateStart;
          element.fechaFin=dateEnd;
          element.dias_transcurridos=diferencia;
          element.activePurchase=false;

          element.datePurchase=str_array[5] !== undefined ? moment(str_array[5]).format('YYYY-MM-DD') : "" ;

          


          // element.datePurchase=moment(str_array[5]).format('DD-MM-YYYY');

        console.log("index: ["+element.index+"] name", element.name, +" datePurchase: "+ element.datePurchase + " str_array[5]: "+str_array[5] );
          let arrayDays:any[] =[];

          for(let i = 0; i <= diferencia; i++) {

            var new_date = moment(element.fechaInicio, "YYYY-MM-DD").add(i, 'days');
            var day = new_date.format('DD');
            var month = new_date.format('MM');
            var year = new_date.format('YYYY');
            var new_date_fort = year + '-' + month + '-' + day

            const elementDay: ElementDay = new ElementDay();

            elementDay.day=i;
            elementDay.value=new_date_fort;
            if (elementDay.value ==  element.datePurchase ){
              console.log(" match: "+ elementDay.value  +" == "+ element.datePurchase )
              elementDay.active = true;
            }
            arrayDays.push(elementDay)
            
            //Agregar los dias en el Header de la tabla
            let name_header= 'day ' + i
            this.header.indexOf(name_header) === -1 ? this.header.push(name_header) : console.log("This header already exists") ;


          }
          element.arrayDays=arrayDays;
          this.arrayData.push(element);


      }

      // add header 
      this.header.push("fechaFin")


      // this.activeDatePurchase();

      console.log(this.arrayData);
      console.log(this.header);

      this.processData();

    })

  }

//  activeDatePurchase(){
//     this.arrayData.forEach( (element) => {
//       console.log("next>>>>>",element.name); 

//       for(let i = 0; i <= element.dias_transcurridos; i++) {
//         // console.log("dias ",element['day'+i]); 
//           if (element['day'+i] == element.datePurchase ){
//               // console.log(" match: "+ moment(new_date).format('YYYY-MM-DD') +" == "+ moment(fechaCompra).format('YYYY-MM-DD') )
//               console.log(" match: "+ element['day'+i] +" == "+ element.datePurchase )
//               element.activePurchase = true
//           }
//       }

//     });
//  }

  private processData() {
    const statesSeen = {};
    const countiesSeen = {};

    this.dataExt = this.arrayData.sort((a, b) => {
      const stateComp = a.index.localeCompare(b.index);
      return stateComp ? stateComp : a.name.localeCompare(b.name);
    }).map(x => {
      const stateSpan = statesSeen[x.index] ? 0 :
        this.arrayData.filter(y => y.index === x.index).length;

      statesSeen[x.index] = true;

      const countySpan = countiesSeen[x.index] && countiesSeen[x.index][x.name] ? 0 :
        this.arrayData.filter(y => y.index === x.index && y.name === x.name).length;

      countiesSeen[x.index] = countiesSeen[x.index] || {};
      countiesSeen[x.index][x.name] = true;

      return { ...x, stateSpan, countySpan };
    });
  }

}
