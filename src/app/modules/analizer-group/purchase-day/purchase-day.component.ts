import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { HttpClient } from '@angular/common/http'; 

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
  dataFull: any[] = [];

  header: Array<string> = ['Index', 'numero', 'nombre', 'Fecha Inicio'];


  constructor(private http: HttpClient) {
    this.loadData();
  }

  loadData(){


    this.http.get('assets/purchaseDay.txt', { responseType: 'text' as 'json'}).subscribe(data => {
      this.dataAux = data;

        for (const line of this.dataAux.split(/[\r\n]+/)){
          // console.log("next>>>>>");

          var dataNoSpace= line.replace(/\s/g, "");
          var str_array = dataNoSpace.split(',');
          // console.log(str_array);

          var index =str_array[0];
          var numero =str_array[1];
          var nombre =str_array[2];
          var fechaInicio =str_array[3];
          var fechaFin =str_array[4];

          var fecha1 = moment(fechaInicio);
          var fecha2 = moment(fechaFin);
          var diferencia=fecha2.diff(fecha1, 'days')

          // console.log(fecha2.diff(fecha1, 'days'), ' dias de diferencia -' , nombre);
          
          var index =str_array[0];
          var numero =str_array[1];
          var nombre =str_array[2];
          var fechaInicio =str_array[3];
          var fechaFin =str_array[4];

          let objs = {}; 
          objs['index'] = index
          objs['numero'] = numero
          objs['name'] = nombre
          objs['dias_transcurridos'] = diferencia
          objs['fechaInicio'] = fechaInicio

          for(let i = 0; i <= diferencia; i++) {
            var new_date = moment(fecha1, "DD-MM-YYYY").add(i, 'days');
            var day = new_date.format('DD');
            var month = new_date.format('MM');
            var year = new_date.format('YYYY');
            objs['day' + i] = day + '-' + month + '-' + year

            //Agregar los dias en el Header de la tabla
            let name_header= 'day ' + i
            this.header.indexOf(name_header) === -1 ? this.header.push(name_header) : console.log("This header already exists") ;

          }
          objs['fechaFin'] = fechaFin
          

          this.dataFull.push( objs )

      }

      // add header 
      this.header.push("fechaFin")


      console.log(this.dataFull);
      console.log(this.header);

      this.processData();

    })

  }


  private processData() {
    const statesSeen = {};
    const countiesSeen = {};

    this.dataExt = this.dataFull.sort((a, b) => {
      const stateComp = a.index.localeCompare(b.index);
      return stateComp ? stateComp : a.name.localeCompare(b.name);
    }).map(x => {
      const stateSpan = statesSeen[x.index] ? 0 :
        this.dataFull.filter(y => y.index === x.index).length;

      statesSeen[x.index] = true;

      const countySpan = countiesSeen[x.index] && countiesSeen[x.index][x.name] ? 0 :
        this.dataFull.filter(y => y.index === x.index && y.name === x.name).length;

      countiesSeen[x.index] = countiesSeen[x.index] || {};
      countiesSeen[x.index][x.name] = true;

      return { ...x, stateSpan, countySpan };
    });
  }

}
