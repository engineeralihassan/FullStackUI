import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { student } from '../Modals/model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
   apiUrl:string=environment.baseUrl;
  constructor(private http:HttpClient) { }
  GetAllStudent(){
    return this.http.get<student[]>(`${this.apiUrl}/api/Students`)
  }
  AddStudent( newStudent:student){
    newStudent.id='00000000-0000-0000-0000-000000000000';
    return this.http.post<student>(`${this.apiUrl}/api/Students`,newStudent)
  }
  GetSingleStudent(id: string){

        return this.http.get<student>("https://localhost:7179/api/Students/"+id);
    
        console.log("Method runs ")
    
      }
    UpdateStudent(id: string, newStudent:student){

          return this.http.put("https://localhost:7179/api/Students/"+id,newStudent);
      
          console.log("Method runs ")
      
        }
      DeleteStudent(id: string){

            return this.http.delete("https://localhost:7179/api/Students/"+id);
        
            console.log("Method runs ")
        
          }
}
