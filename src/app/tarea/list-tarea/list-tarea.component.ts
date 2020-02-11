import { Component, OnInit } from '@angular/core';
import { WebService } from 'src/app/service/webservice.service';


@Component({
  selector: 'app-list-tarea',
  templateUrl: './list-tarea.component.html',
  styleUrls: ['./list-tarea.component.css']
})
export class ListTareaComponent implements OnInit {
  public listTareas:any;

  constructor(
    private webservice:WebService
  ) { }

  ngOnInit() {
    this.inicializator();
  }
  inicializator(){
  this.listTareas= [];
  this.getlistTareasQuery();
  }

  getlistTareasQuery(){
    this.webservice.getListTareas().subscribe(
      response =>{
        this.listTareas=response;
      },
      error =>{
        console.log(error);
        
      }
    )
  }
  validatorTarea(){
    this.inicializator();
  }
}
