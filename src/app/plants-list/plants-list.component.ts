import { Component, OnInit } from '@angular/core';
import { CrudService } from '../shared/crud.service';  // CRUD API service class
import { plant } from '../shared/plant';   // Plant interface class for Data types.
import { ToastrService } from 'ngx-toastr';      // Alert message using NGX toastr


@Component({
  selector: 'app-plants-list',
  templateUrl: './plants-list.component.html',
  styleUrls: ['./plants-list.component.css']
})

export class PlantListComponent implements OnInit {
  p: number = 1;                      // Fix for AOT compilation error for NGX pagination
  plant: plant[];                 // Save students data in Student's array.
  hideWhenNoStudent: boolean = false; // Hide students data table when no student.
  noData: boolean = false;            // Showing No Student Message, when no student in database.
  preLoader: boolean = true;          // Showing Preloader to show user data is coming for you from thre server(A tiny UX Shit)


  constructor(
    public crudApi: CrudService, // Inject student CRUD services in constructor.
    public toastr: ToastrService // Toastr service for alert message
    ){ }


  ngOnInit() {
    this.dataState(); // Initialize student's list, when component is ready
    let s = this.crudApi.GetPlantList();
    s.snapshotChanges().subscribe(data => { // Using snapshotChanges() method to retrieve list of data along with metadata($key)
      this.plant = [];
      data.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.plant.push(a as plant);
      })
    })
  }

  // Using valueChanges() method to fetch simple list of students data. It updates the state of hideWhenNoStudent, noData & preLoader variables when any changes occurs in student data list in real-time.
  dataState() {
    this.crudApi.GetPlantList().valueChanges().subscribe(data => {
      this.preLoader = false;
      if(data.length <= 0){
        this.hideWhenNoStudent = false;
        this.noData = true;
      } else {
        this.hideWhenNoStudent = true;
        this.noData = false;
      }
    })
  }

  // Method to delete student object
  deletePlant(plant) {
    if (window.confirm('Are sure you want to delete this student ?')) { // Asking from user before Deleting student data.
      this.crudApi.DeletePlant(plant.$key) // Using Delete student API to delete student.
      this.toastr.success(plant.p_name + ' successfully deleted!'); // Alert message will show up when student successfully deleted.
    }
  }

}
