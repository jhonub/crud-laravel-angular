import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TareaComponent } from './tarea.component';
import { ListTareaComponent } from './list-tarea/list-tarea.component';
import { CreateTareaComponent } from './create-tarea/create-tarea.component';
import { DeleteTareaComponent } from './delete-tarea/delete-tarea.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [TareaComponent, ListTareaComponent, CreateTareaComponent, DeleteTareaComponent],
  imports: [
    CommonModule,
    NgbModule,
    ReactiveFormsModule
  ],
  exports:[
    TareaComponent, ListTareaComponent, CreateTareaComponent, DeleteTareaComponent
  ]
})
export class TareaModule { }
