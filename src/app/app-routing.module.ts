import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './components/student-list/student-list.component';
import { AddstudentComponent } from './components/addstudent/addstudent.component';
import { UpdateStudentComponent } from './components/update-student/update-student.component';

const routes: Routes = [
  {path :'', component : StudentListComponent},
  {path:"students", component : StudentListComponent},
  {path :'student/add',component: AddstudentComponent},
  {path :'students/update/:id',component: UpdateStudentComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
