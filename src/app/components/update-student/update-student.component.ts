import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { student } from 'src/app/Modals/model';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent {
  updateStudentReq: any = { };
    
      constructor(private router:Router, private route: ActivatedRoute, private studentService: StudentService) {
    
    
    
    
      }
    
      ngOnInit() {
    
        this.route.paramMap.subscribe({
    
          next: (params) => {
    
            const id = params.get('id');
    
            console.log(id);
    
    
    
    
            if (id) {
    
             // console.log("This is the best performance");
    
              this.studentService.GetSingleStudent(id)
    
                .subscribe((data)=>{
    
                  console.log("This is the best performance");
    
                  this.updateStudentReq = data;

    
                  console.log("Get Data is : ",this.updateStudentReq);
    
                });
    
            }
    
          }
    
        })
    
      }
    
    
    
     updateStudent(student:any){
    
        this.studentService.UpdateStudent(this.updateStudentReq.id,this.updateStudentReq)
                 
        .subscribe({
    
           next: (student)=>{
    
            this.router.navigate(['/students']);
    
           }
    
        });
    
      }
   
}
