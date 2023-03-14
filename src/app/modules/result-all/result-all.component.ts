
import {AfterViewInit, Component, ViewChild,ViewEncapsulation} from '@angular/core';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { HttpClient } from '@angular/common/http'; 

export interface Elementos {
  // fecha: string;
  num: number;
  cero: string;
  uno: string;
  dos: string;
  tres: string;
  cuatro: string;
  cinco: string;
}

export interface ElementSuperior {
  fecha: string;
  numero: number;
  primero: string;
  segundo: string;
  tercero: string;
  cuarto: string;
  quinto: string;
  sexto: string;
  septimo: string;
  octavo: string;
  noveno: string;
  decimo: string;
  undecimo: string;
  duodecimo: string;
  decimotercero: string;
  decimocuarto: string;
  decimoquinto: string;
  decimosexto: string;
  decimoseptimo: string;
  decimoctavo: string;
  decimonoveno: string;
  vigesimo: string;
  liga: string;  
}

export interface ElementMayor {
  fecha: string;
  numero: number;
  primero: string;
  segundo: string;
  tercero: string;
  cuarto: string;
  quinto: string;
  sexto: string;
  septimo: string;
  octavo: string;
  noveno: string;
  decimo: string;
  undecimo: string;
  duodecimo: string;
  decimotercero: string;
  liga: string;  
}

export interface boletos {
  fecha: string;
  numero: number;
  sorteo: string;
  numeros: string;
}


@Component({
  selector: 'app-result-all',
  templateUrl: './result-all.component.html',
  styleUrls: ['./result-all.component.css']
})
export class ResultAllComponent implements AfterViewInit {

  constructor(private _liveAnnouncer: LiveAnnouncer, private http: HttpClient) {
    this.loadDataMayor();
    this.loadDataSuperior();
    this.loadDataBoletos();

  }


  @ViewChild(MatSort)
  sort: MatSort = new MatSort;
  @ViewChild(MatSort)
  sort2: MatSort = new MatSort;

  ngAfterViewInit() {
  }

  dataFileSuperior: ElementSuperior[] = []; // datos del archivo 
  dataSourceSuperior:any; // se setea a la tabla los datos del archivo

  dataFileMayor: ElementMayor[] = []; // datos del archivo 
  dataSourceMayor:any;// se setea a la tabla los datos del archivo 

  columnaDefault: string[] = ['fecha', 'numero','cero', 'uno', 'dos', 'tres', 'cuatro', 'cinco'];
  datosSuperior: Elementos[] = [];
  datosMayor: Elementos[] = [];
 

  dataAux: any;

  columnaBoletos: string[] = ['fecha', 'numero','sorteo', 'numeros'];
  dataFileBoletos: boletos[] = []; // datos del archivo 
  dataSourceBoletos:any; // se setea a la tabla los datos del archivo


  loadDataMayor(){
    this.http.get('assets/sorteo-mayor.txt', { responseType: 'text' as 'json'}).subscribe(data => {
        this.dataAux = data;
       for (const line of this.dataAux.split(/[\r\n]+/)){
        
        var dataNoSpace= line.replace(/\s/g, "");
        let splitted = dataNoSpace.split(",");  

        let row = {
              fecha: splitted[0], 
              numero: splitted[1] ,
              primero: splitted[2],
              segundo: splitted[3],
              tercero: splitted[4],
              cuarto: splitted[5],
              quinto: splitted[6],
              sexto: splitted[7],
              septimo: splitted[8],
              octavo: splitted[9],
              noveno: splitted[10],
              decimo: splitted[11],
              undecimo: splitted[12],
              duodecimo: splitted[13],
              decimotercero: splitted[14],
              liga: "https://www.nacionalloteria.com/mexico/sorteo-mayor.php?del-dia="+splitted[0]
        }
        this.dataFileMayor.push(row);
      }

      this.dataSourceMayor = new MatTableDataSource<ElementMayor>(this.dataFileMayor);
      this.dataSourceMayor.sort = this.sort;

      // this.calculos(this.dataFileMayor,true,false);
      })

    }


    loadDataSuperior(){

        this.http.get('assets/sorteo-superior.txt', { responseType: 'text' as 'json'}).subscribe(data => {
          this.dataAux = data;
          for (const line of this.dataAux.split(/[\r\n]+/)){
          var dataNoSpace= line.replace(/\s/g, "");
          let splitted = dataNoSpace.split(",");  

          let row = {
                fecha: splitted[0], 
                numero: splitted[1] ,
                primero: splitted[2],
                segundo: splitted[3],
                tercero: splitted[4],
                cuarto: splitted[5],
                quinto: splitted[6],
                sexto: splitted[7],
                septimo: splitted[8],
                octavo: splitted[9],
                noveno: splitted[10],
                decimo: splitted[11],
                undecimo: splitted[12],
                duodecimo: splitted[13],
                decimotercero: splitted[14],
                decimocuarto: splitted[15],
                decimoquinto: splitted[16],
                decimosexto: splitted[17],
                decimoseptimo: splitted[18],
                decimoctavo: splitted[19],
                decimonoveno: splitted[20],
                vigesimo: splitted[21],

                liga: "https://www.nacionalloteria.com/mexico/sorteo-mayor.php?del-dia="+splitted[0]
          }

          this.dataFileSuperior.push(row);


          this.dataSourceSuperior = new MatTableDataSource<ElementSuperior>(this.dataFileSuperior);
          this.dataSourceSuperior.sort = this.sort;
        }

        //  this.calculos(this.dataFileSuperior,false,true);

      })
    }


    loadDataBoletos(){
      this.http.get('assets/boletos.txt', { responseType: 'text' as 'json'}).subscribe(data => {
          this.dataAux = data;
         for (const line of this.dataAux.split(/[\r\n]+/)){
          
          var dataNoSpace= line.replace(/\s/g, "");
          let splitted = dataNoSpace.split("|");  

          let row = {
                fecha: splitted[0], 
                numero: splitted[1] ,
                sorteo: splitted[2],
                numeros: splitted[3]
          }
          this.dataFileBoletos.push(row);
        }
  
        this.dataSourceBoletos = new MatTableDataSource<boletos>(this.dataFileBoletos);
        this.dataSourceBoletos.sort = this.sort;
  
        })
  
      }

      calculos(dataDist:any,mayor:boolean,supeior:boolean){
        let arrayCero: string[] = new Array();
        let arrayUno: string[] = new Array();
        let arrayDos: string[] = new Array();
        let arrayTres: string[] = new Array();
        let arrayCuatro: string[] = new Array();
        let arrayCinco: string[] = new Array();


        for (let key in dataDist) {
          let value = dataDist[key];
          console.log(value) ;
          if(value.primero!= undefined && value.primero.charAt(0) == "0" ){ 
            arrayCero.push(value.primero)
          }
          if(value.primero!= undefined &&  value.primero.charAt(0) == "1" ){ 
            arrayUno.push(value.primero)
          }
          if(value.primero!= undefined && value.primero.charAt(0) == "2" ){ 
            arrayDos.push(value.primero)
          }
          if(value.primero!= undefined && value.primero.charAt(0) == "3" ){ 
            arrayTres.push(value.primero)
          }
          if(value.primero!= undefined && value.primero.charAt(0) == "4" ){ 
            arrayCuatro.push(value.primero)
          }
          if(value.primero!= undefined && value.primero.charAt(0) == "5" ){ 
            arrayCinco.push(value.primero)
          }
        }


        let countArrayCero = arrayCero.length;
        let countArrayUno = arrayUno.length;
        let countArrayDos = arrayDos.length;
        let countArrayTres = arrayTres.length;
        let countArrayCuatro = arrayCuatro.length;
        let countArrayCinco = arrayCinco.length;

        let index=1;
        do {
          countArrayCero = arrayCero.length;
          countArrayUno = arrayUno.length;
          countArrayDos = arrayDos.length;
          countArrayTres = arrayTres.length;
          countArrayCuatro = arrayCuatro.length;
          countArrayCinco = arrayCinco.length;

          var valCer0 = arrayCero.shift();
          var valCer1 = arrayUno.shift();
          var valCer2 = arrayDos.shift();
          var valCer3 = arrayTres.shift();
          var valCer4 = arrayCuatro.shift();
          var valCer5 = arrayCinco.shift();

          let rows = {
            num: index,
            cero: valCer0 != undefined ? valCer0: "",
            uno: valCer1 != undefined ? valCer1 : "",
            dos: valCer2!= undefined ? valCer2 : "",
            tres: valCer3 != undefined ? valCer3: "",
            cuatro: valCer4 != undefined ? valCer4 : "",
            cinco: valCer5 != undefined ? valCer5 : "",
          }
          if(mayor){
            this.datosMayor.push(rows);
          }else if(supeior){
            this.datosSuperior.push(rows);
          }

          
          
          index++;

      } while (countArrayCero > 1 || countArrayUno > 1 || countArrayDos > 1 || countArrayTres > 1 || countArrayCuatro > 1 || countArrayCinco > 1);

      if(mayor){
        this.datosMayor = this.datosMayor.sort((first, second) => 0 - (first.num > second.num ? 1 : -1));
        this.dataSourceMayor = new MatTableDataSource<Elementos>(this.datosMayor);

      }else if(supeior){
        this.datosSuperior = this.datosSuperior.sort((first, second) => 0 - (first.num > second.num ? 1 : -1));
        this.dataSourceSuperior = new MatTableDataSource<Elementos>(this.datosSuperior);
      }


      }
      


    /** Announce the change in sort state for assistive technology. */
    announceSortChange(sortState: Sort) {

      // This example uses English messages. If your application supports
      // multiple language, you would internationalize these strings.
      // Furthermore, you can customize the message to add additional
      // details about the values being sorted.
      if (sortState.direction) {
        this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
      } else {
        this._liveAnnouncer.announce('Sorting cleared');
      }
    }

}
