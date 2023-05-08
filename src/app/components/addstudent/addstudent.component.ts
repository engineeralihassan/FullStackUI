import { compileNgModule } from '@angular/compiler';
import { Component } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

import { Router } from '@angular/router';


@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent {
  constructor(private service:StudentService, private route:Router){}

  addStudent(student:any){
       console.log(student.value);
       console.log(student.value.id);
       this.service.AddStudent(student.value).subscribe((data)=>{
        console.log("New user ,", student.value);
       
      this.route.navigate(['/students']);


       });

  }
}
