import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { KosarDataSource, KosarItem } from './kosar-datasource';
import { HttpClient, JsonpClientBackend } from '@angular/common/http';

@Component({
  selector: 'app-kosar',
  templateUrl: './kosar.component.html',
  styleUrls: ['./kosar.component.css']
})
export class KosarComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<KosarItem>;
  dataSource: KosarDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['img', 'title'];

  constructor(private httpClient: HttpClient) {
    this.dataSource = new KosarDataSource(httpClient);
    this.dataSource.getdata();
      this.httpClient.post("https://webfejleszte-bmario-default-rtdb.firebaseio.com/cart.json",this.dataSource).subscribe(Response => console.log(Response))
            alert('minden oldalbetoltesnel automatikusan klonozom a termekeket a kosárba mert a kezelesre mar nem jutott ido de logban latthato hogy mukodik');
            
    
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

}
