import { Component, OnInit } from '@angular/core';
import { CrudService } from '../shared/crud.service';    // CRUD services API
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'; // Reactive form services
import { ToastrService } from 'ngx-toastr'; // Alert message using NGX toastr


@Component({
  selector: 'app-add-plant',
  templateUrl: './add-plant.component.html',
  styleUrls: ['./add-plant.component.css']
})

export class AddPlantRefComponent implements OnInit {
  public plantForm: FormGroup;  // Define FormGroup to student's form

  constructor(
    public crudApi: CrudService,  // CRUD API services
    public fb: FormBuilder,       // Form Builder service for Reactive forms
    public toastr: ToastrService  // Toastr service for alert message
  ) { }


  ngOnInit() {
    this.crudApi.GetPlantList();  // Call GetStudentsList() before main form is being called
    this.planForm();              // Call student form when component is ready
  }

  // Reactive student form
  planForm() {
    this.plantForm = this.fb.group({
      p_name: ['', [Validators.required, Validators.minLength(2)]],
      psku: [''],
    });
  }

  // Accessing form control using getters
  get p_name() {
    return this.plantForm.get('p_name');
  }

  get psku() {
    return this.plantForm.get('psku');
  }

  // Reset student form's values
  ResetForm() {
    this.plantForm.reset();
  }

  submitPlantData() {
    this.crudApi.AddPlant(this.plantForm.value); // Submit student data using CRUD API
    this.toastr.success(this.plantForm.controls['p_name'].value + ' successfully added!'); // Show success message when data is successfully submited
    this.ResetForm();  // Reset form when clicked on reset button
   }

}
