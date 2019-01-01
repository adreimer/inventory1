import { Component, OnInit } from '@angular/core';
import { CrudService } from '../shared/crud.service';    // CRUD services API
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'; // Reactive form services
import { ToastrService } from 'ngx-toastr'; // Alert message using NGX toastr
// import { NgOption, NgSelectModule } from '@ng-select/ng-select';
// import { NgSelectComponent } from '@ng-select/ng-select';
import { plant } from '../shared/plant';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { ConfirmationComponent } from './ConfirmationComponent';




@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})

export class AddInvItemComponent implements OnInit {
  public studentForm: FormGroup;  // Define FormGroup to student's form
  public plant: plant[];
  selectedPlant = this.plant;

  constructor(
    public crudApi: CrudService,  // CRUD API services
    public fb: FormBuilder,       // Form Builder service for Reactive forms
    public toastr: ToastrService,  // Toastr service for alert message
    private modalService: NgbModal
  ) { }


  ngOnInit() {
    this.crudApi.GetStudentsList();  // Call GetStudentsList() before main form is being called
    this.crudApi.GetPlantList().valueChanges().subscribe(data => this.plant = data);    // Call GetPlantList() for dropdown menu
    this.studenForm();              // Call student form when component is ready
  }

 // showConfirm() {
 //       this.modalService.open(ConfirmationComponent, { size: 'lg', backdrop: 'static' });
 //   }

  // Reactive student form
  studenForm() {
    this.studentForm = this.fb.group({
      p_name: ['', [Validators.required, Validators.minLength(2)]],
      p_size: [''],
      notes: [''],
      quantity: ['']
    });
  }

  // Accessing form control using getters
  get p_name() {
    return this.studentForm.get('p_name');
  }

  get p_size() {
    return this.studentForm.get('p_size');
  }

  get notes() {
    return this.studentForm.get('notes');
  }

  get quantity() {
    return this.studentForm.get('quantity');
  }

  // Reset student form's values
  ResetForm() {
    this.studentForm.reset();
  }

  submitStudentData() {
    this.crudApi.AddStudent(this.studentForm.value); // Submit student data using CRUD API
    this.toastr.success(
      this.studentForm.controls['p_name'].value + ' successfully added!'); // Show success message when data is successfully submited
    this.ResetForm();  // Reset form when clicked on reset button
   }

}


