import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { WebService } from 'src/app/service/webservice.service';

@Component({
  selector: 'app-delete-tarea',
  templateUrl: './delete-tarea.component.html',
  styleUrls: ['./delete-tarea.component.css']
})
export class DeleteTareaComponent implements OnInit {
  public modalReference:NgbModalRef;

  @Input() idTarea;
  @Input() TypeButton;
  @Input() nameButton;
  @Output() modifyTarea = new EventEmitter();

  constructor(private modalService: NgbModal,
    private webservice:WebService) { }

  ngOnInit() {
  }
  
  deleteTarea(){
    this.webservice.deleteTarea(this.idTarea).subscribe(
      response =>{
        this.modifyTarea.emit(this.idTarea);
        this.modalReference.close();
      },
      error=>{
        console.log(error);
        
      }
    )
  }
  modalCallService(mdTarea) {
   this.modalReference = this.modalService.open(mdTarea, { size: 'lg', backdrop:'static' });
  }
}
