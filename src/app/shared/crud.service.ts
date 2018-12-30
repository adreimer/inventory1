import { Injectable } from '@angular/core';
import { invitem } from '../shared/student';  // Student data type interface class
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';  // Firebase modules for Database, Data list and Single object
// import { AngularFirestoreModule } from 'angularfire2/firestore'; // Cloud Firestore module
// import { AngularFireModule } from 'angularfire2'; // Cloud Firestore Module

@Injectable({
  providedIn: 'root'
})

export class CrudService {
  studentsRef: AngularFireList<any>;    // Reference to Student data list, its an Observable
  studentRef: AngularFireObject<any>;   // Reference to Student object, its an Observable too

  // Inject AngularFireDatabase Dependency in Constructor
  constructor(private db: AngularFireDatabase) { }

  // Create InventoryItem
  AddStudent(invitem: invitem) {
    this.studentsRef.push({
      p_name: invitem.p_name,
      p_size: invitem.p_size,
      notes: invitem.notes,
      quantity: invitem.quantity
    })
  }

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

}
