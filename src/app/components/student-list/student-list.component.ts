import { Component } from '@angular/core';
import { student } from 'src/app/Modals/model';
import { StudentService } from 'src/app/services/student.service';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {
  constructor (private studentsservice:StudentService){}
students!:student[];
ngOnInit(){
  this.studentsservice.GetAllStudent().subscribe((data:student[])=>{
    this.students=data;
    console.log(data);
  })
  console.log("Hello Ali ");
}
DeleteStudent(id:string){
    
      this.studentsservice.DeleteStudent(id)
               
      .subscribe({
  
         next: (student)=>{
  
          this.studentsservice.GetAllStudent();
  
         }
  
      });
  
    }
}

