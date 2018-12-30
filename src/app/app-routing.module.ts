import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Use RouterModule, Routes for activating routing in angular
import { RouterModule, Routes } from '@angular/router';

// Include components for in which router service to be used
import { AddInvItemComponent } from './add-student/add-student.component';
import { InventoryListComponent } from './students-list/students-list.component';
import { EditInvItemComponent } from './edit-student/edit-student.component';

// Routes array define component along with the path name for url
const routes: Routes = [
  { path: '', redirectTo: '/register-student', pathMatch: 'full' },
  { path: 'register-student', component: AddInvItemComponent },
  { path: 'view-students', component: InventoryListComponent },
  { path: 'edit-student/:id', component: EditInvItemComponent }
];

// Import RouterModule and inject routes array in it and dont forget to export the RouterModule
@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
