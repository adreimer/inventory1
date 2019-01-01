import { Injectable } from '@angular/core';
import { invitem } from '../shared/student';  // Student data type interface class
import { plant } from '../shared/plant';  // Plant data type interface class
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';  // Firebase modules for Database, Data list and Single object
// import { AngularFirestoreModule } from 'angularfire2/firestore'; // Cloud Firestore module
// import { AngularFireModule } from 'angularfire2'; // Cloud Firestore Module

@Injectable({
  providedIn: 'root'
})

export class CrudService {
  studentsRef: AngularFireList<any>;    // Reference to Student data list, its an Observable
  plantsRef: AngularFireList<any>;       // Reference to Plant ID List, I guess its an Observable
  studentRef: AngularFireObject<any>;   // Reference to Student object, its an Observable too
  plantRef: AngularFireObject<any>;   // Reference to Plant ID List, I guess its an Observable

  // Inject AngularFireDatabase Dependency in Constructor
  constructor(private db: AngularFireDatabase) { }

// Declare Objects

// Create Plantname object
  AddPlant(plant: plant) {
    this.plantsRef.push({
      p_name: plant.p_name,
      psku: plant.psku,
    })
  }

  // Create InventoryItem
  AddStudent(invitem: invitem) {
    this.studentsRef.push({
      p_name: invitem.p_name,
      p_size: invitem.p_size,
      notes: invitem.notes,
      quantity: invitem.quantity
    })
  }

// CRUD Operations

  // Fetch Single Inventory Object
  GetStudent(id: string) {
    this.studentRef = this.db.object('students-list/' + id);
    return this.studentRef;
  }

  // Fetch Inventory List
  GetStudentsList() {
    this.studentsRef = this.db.list('students-list');
    return this.studentsRef;
  }

  // Update Inventory Object
  UpdateStudent(invitem: invitem) {
    this.studentRef.update({
      p_name: invitem.p_name,
      p_size: invitem.p_size,
      notes: invitem.notes,
      quantity: invitem.quantity
    })
  }

  // Delete Student Object
  DeleteStudent(id: string) {
    this.studentRef = this.db.object('students-list/'+id);
    this.studentRef.remove();
  }

 //   Fetch Single Plant Name Object
  GetPlant(id: string) {
    this.plantRef = this.db.object('plantlist/' + id);
    return this.plantRef;
  }

  // Fetch Plant Name List
  GetPlantList() {
    this.plantsRef = this.db.list('plantlist');
    return this.plantsRef;
  }

  // Update Plant Name Object
  UpdatePlant(plant: plant) {
    this.plantRef.update({
      p_name: plant.p_name,
      psku: plant.psku,
    })
  }

  // Delete Plant Name Object
  DeletePlant(id: string) {
    this.plantRef = this.db.object('plantlist/'+id);
    this.plantRef.remove();
  }

}
