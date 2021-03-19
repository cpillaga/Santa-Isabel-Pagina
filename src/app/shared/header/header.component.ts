import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class HeaderComponent implements OnInit {
  opcion: string = "";
  ruta: any ;
  menu: number;

  constructor(private router: Router) {
    router.events.filter(event => event instanceof NavigationEnd)
        .subscribe(event => {
            this.ruta = event;
            if(this.ruta['url'] == "/inicio"){
              this.opcion = "";
            }else{
              this.opcion = "header-fixed" ;
            }

            if(this.ruta['url'] == "/info"){
              this.menu = 2; 
            }else{
              this.menu = 1; 
            }
        });
}

  ngOnInit(): void {
  }


}
