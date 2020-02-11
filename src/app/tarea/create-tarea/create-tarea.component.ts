import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { WebService } from 'src/app/service/webservice.service';

@Component({
  selector: 'app-create-tarea',
  templateUrl: './create-tarea.component.html',
  styleUrls: ['./create-tarea.component.css']
})
export class CreateTareaComponent implements OnInit {
  @Input() idTarea;
  @Input() TypeButton;
  @Input() nameButton;
  @Output() modifyTarea = new EventEmitter();

  public listTareas:any;
  public modalReference:NgbModalRef;
  public formTareas:FormGroup;
  public formValidatorStatus:boolean;

  get formValidator(){return this.formTareas.controls}
  constructor(
    private webservice:WebService,
    private modalService: NgbModal,
    private formBuilder:FormBuilder
  ) { }

  ngOnInit() {
  }
  inicializator(){
    this.formValidatorStatus=false;
    this.inicializatorFormValidator();
    if(this.idTarea!= null){
      this.inicializatorEditTarea();
    }
  }
  inicializatorFormValidator(){
    this.formTareas = this.formBuilder.group({
      titulo:['',Validators.required],
    })
  }
  inicializatorEditTarea(){
    this.webservice.getByIdTarea(this.idTarea).subscribe(
      response=>{
        this.validatorEditTarea(response);
      },
      error=>{
        console.log(error);
        
      }
    )
  }
  saveSubmitTarea(){
    this.formValidatorStatus=true;
    if(this.formTareas.invalid){
      return;
    }
    if(this.idTarea!=null){
      this.updateTarea();
    }
    else{
      this.saveTarea();
    }
  }

  saveTarea(){
    this.webservice.postTarea(this.formTareas.value).subscribe(
      response=>{
        this.modifyTarea.emit(this.formTareas.value);
        console.log(this.modifyTarea.emit(this.formTareas.value));
        
        this.modalReference.close();
      },
      error=>{
        console.log(error);
      }
  )
  }

  updateTarea(){
    this.webservice.putTarea(this.formTareas.value, this.idTarea).subscribe(
      response=>{
        this.modifyTarea.emit(this.formTareas.value);
        this.modalReference.close();
      },
      error=>{
        console.log(error); 
      }
    )
  }
  validatorEditTarea(tarea){
    this.formTareas.get('titulo').setValue(tarea.titulo);
  }

  mdCallmodalService(mdtarea) {
    this.inicializator();
    this.modalReference = this.modalService.open(mdtarea, { size: 'lg' });
  }
}
