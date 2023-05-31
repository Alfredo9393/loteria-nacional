import { Component, ViewChild } from '@angular/core';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { HttpClient } from '@angular/common/http'; 
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface boletos {
  fecha: string;
  numero: number;
  sorteo: string;
  numeros: string;
}


@Component({
  selector: 'app-chihuahua',
  templateUrl: './chihuahua.component.html',
  styleUrls: ['./chihuahua.component.css']
})
export class ChihuahuaComponent  {

  @ViewChild(MatSort)
  sort: MatSort = new MatSort;

  dataAux: any;


  columnaBoletos: string[] = ['fecha', 'numero','sorteo', 'numeros'];
  dataFileBoletos: boletos[] = []; // datos del archivo 
  dataSourceBoletos:any; // se setea a la tabla los datos del archivo

  constructor(private _liveAnnouncer: LiveAnnouncer, private http: HttpClient) { 
    this.loadDataBoletos();

  }

  ngOnInit(): void {
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
