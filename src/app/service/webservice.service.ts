import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WebService {
  private API_Server = "http://127.0.0.1:8000/api/";
  constructor(
    private http:HttpClient
  ) { }
  getListTareas():Observable<any>{
    return this.http.get(this.API_Server + 'tareas/' );
  }
  getByIdTarea(id):Observable<any>{
    return this.http.get(this.API_Server + 'tareas/' + id);
  }
  postTarea(tareas):Observable<any>{
    return this.http.post(this.API_Server + 'tareas/',tareas);
  }
  putTarea(tareas, id):Observable<any>{
    return this.http.put(this.API_Server + 'tareas/'+ id,tareas);
  }
  deleteTarea(id):Observable<any>{
    return this.http.delete(this.API_Server + 'tareas/' + id);
  }
}
