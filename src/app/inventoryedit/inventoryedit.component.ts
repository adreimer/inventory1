import { Component, OnInit } from '@angular/core';
import { CrudService } from '../shared/crud.service';  // CRUD API service class
import { invitem } from './../shared/student';   // Student interface class for Data types.
import { ToastrService } from 'ngx-toastr';      // Alert message using NGX toastr
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';  // Firebase modules for Database, Data

@Component({
  selector: 'list-plants',
  template: `
    <div>
      <h3>
        Inventory List
      </h3>
      <ngx-datatable
        #mydatatable
        class="material"
        [headerHeight]="50"
        [limit]="15"
        [columnMode]="'force'"
        [footerHeight]="50"
        [rowHeight]="'auto'"
        [rows]="rows">
        <ngx-datatable-column name="Plant Name">
          <ng-template ngx-datatable-cell-template let-rowIndex="rowIndex" let-value="value" let-row="row">
            <span
              title="Double click to edit"
              (dblclick)="editing[rowIndex + '-p_name'] = true"
              *ngIf="!editing[rowIndex + '-p_name']">
              {{value}}
            </span>
            <input
              autofocus
              (blur)="updateValue($event, 'p_name', rowIndex)"
              *ngIf="editing[rowIndex+ '-p_name']"
              type="text"
              [value]="value"
            />
          </ng-template>
        </ngx-datatable-column>
        <ngx-datatable-column name="Plant Size">
          <ng-template ngx-datatable-cell-template let-rowIndex="rowIndex" let-row="row" let-value="value">
             <span
              title="Double click to edit"
              (dblclick)="editing[rowIndex + '-p_size'] = true"
              *ngIf="!editing[rowIndex + '-p_size']">
              {{value}}
            </span>
            <select
              *ngIf="editing[rowIndex + '-p_size']"
              (blur)="editing[rowIndex + '-p_size'] = false"
              (change)="updateValue($event, 'p_size', rowIndex)"
              [value]="value">
              <option value="1.5/">1.5/</option>
              <option value="1.75/">1.75/</option>
            </select>
          </ng-template>
        </ngx-datatable-column>
        <ngx-datatable-column name="Notes">
          <ng-template ngx-datatable-cell-template let-rowIndex="rowIndex" let-value="value" let-row="row">
            <span
              title="Double click to edit"
              (dblclick)="editing[rowIndex + '-notes'] = true"
              *ngIf="!editing[rowIndex + '-notes']">
              {{value}}
            </span>
            <input
              autofocus
              (blur)="updateValue($event, 'notes', rowIndex)"
              *ngIf="editing[rowIndex+ '-notes']"
              type="text"
              [value]="value"
            />
          </ng-template>
        </ngx-datatable-column>
        <ngx-datatable-column name="quantity">
          <ng-template ngx-datatable-cell-template let-value="value">
            {{value}}
          </ng-template>
        </ngx-datatable-column>
      </ngx-datatable>
    </div>
  `
})
export class InventoryEditComponent {

    editing = {};
    rows = [];


  constructor(
    // private db: AngularFireDatabase,
    private crudApi: CrudService       // Inject CRUD API in constructor,
    ) {}

  ngOnInit() {
    this.dataState(); // Initialize student's list, when component is ready
    let rows = this.crudApi.GetStudentsList();
    rows.snapshotChanges().subscribe(data => { // Using snapshotChanges() method to retrieve list of data along with metadata($key)
      this.rows = [];
    })
  }

  // Using valueChanges() method to fetch simple list of students data. It updates the state of hideWhenNoStudent, noData & preLoader variables when any changes occurs in student data list in real-time.
  dataState() {
    this.crudApi.GetStudentsList().valueChanges().subscribe(data => { })
  }
    updateValue(event, cell, rowIndex) {
    console.log('inventorylist rowIndex', rowIndex)
    this.crudApi.UpdateStudent(this.rows[rowIndex].value);
    this.editing[rowIndex + '-' + cell] = false;
    this.rows[rowIndex][cell] = event.target.value;
    this.rows = [...this.rows];
    console.log('UPDATED!', this.rows[rowIndex][cell]);
  }

}

