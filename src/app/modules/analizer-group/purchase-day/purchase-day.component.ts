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

export class ElementNumber { //interface
  index: string;
  numero: number;
  name: string;
  fechaInicio: string;
  fechaFin: string;
  premio: string;
  numeros: string;
  // numeros: string[];
  winnigNumber:number;
  activeWinnigNumber:number;
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

  dataAux: any;
  header: Array<string> = ['Index', 'numero', 'nombre'];

  dataExt: any[] = [];
  arrayData:ElementDt[] =[];

  dataExt2: any[] = [];
  arrayNumberPurchase:ElementNumber[] =[];


  constructor(private http: HttpClient) {
    this.loadDataPurchase();
    this.loadPurchase();
  }

  loadDataPurchase(){


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

  loadPurchase(){

    this.http.get('assets/purchaseNumber.txt', { responseType: 'text' as 'json'}).subscribe(data => {
      this.dataAux = data;

      for (const line of this.dataAux.split(/[\r\n]+/)){

          var dataNoSpace= line;//line.replace(/\s/g, "");
          var str_array = dataNoSpace.split('|');
          // console.log(str_array);

          var numbers= str_array[6].replace(/\s/g, "");
          var replace = numbers.replace('(',',').replace(')', '');
          var list = replace.split(',');

          var monthMinusOneName =  moment().subtract(1, "month").startOf("month").format('MMMM');
          

          const element: ElementNumber = new ElementNumber();
          element.index=str_array[0];
          element.numero=str_array[1];
          element.name=str_array[2];
          element.fechaInicio=str_array[3];
          element.fechaFin=str_array[4];
          element.premio=str_array[5];
          element.numeros= str_array[6];

          this.arrayNumberPurchase.push(element);

      }
      console.log(" ** arrayNumberPurchase **");
      console.log(this.arrayNumberPurchase);

      this.processData2();
    })

  }

  private processData2() {
    const statesSeen = {};
    const countiesSeen = {};

    this.dataExt2 = this.arrayNumberPurchase.sort((a, b) => {
      const stateComp = a.index.localeCompare(b.index);
      return stateComp ? stateComp : a.name.localeCompare(b.name);
    }).map(x => {
      const stateSpan = statesSeen[x.index] ? 0 :
        this.arrayNumberPurchase.filter(y => y.index === x.index).length;

      statesSeen[x.index] = true;

      const countySpan = countiesSeen[x.index] && countiesSeen[x.index][x.name] ? 0 :
        this.arrayNumberPurchase.filter(y => y.index === x.index && y.name === x.name).length;

      countiesSeen[x.index] = countiesSeen[x.index] || {};
      countiesSeen[x.index][x.name] = true;

      return { ...x, stateSpan, countySpan };
    });
  }


}
