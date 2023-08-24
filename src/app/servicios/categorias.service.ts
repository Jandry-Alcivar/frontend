import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {


  constructor(private httpClient:HttpClient) {
  }

store(body:any){

  return this.httpClient.post('http://127.0.0.1:8000/api/categoria', body);
}
index(){
  return this.httpClient.get('http://127.0.0.1:8000/api/categoria');
}
show(id:any){
  return this.httpClient.get('http://127.0.0.1:8000/api/categoria/'+id);
}
update(id:any,body:any){

  return this.httpClient.post('http://127.0.0.1:8000/api/categoria/'+id,body);
}
destrory(id:any){
  return this.httpClient.delete('http://127.0.0.1:8000/api/categoria/'+id);
}




}
