import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Components
import { AddInvItemComponent } from './add-student/add-student.component';
import { InventoryListComponent } from './students-list/students-list.component';
import { EditInvItemComponent } from './edit-student/edit-student.component';

// Reactive Form Module
import { ReactiveFormsModule } from '@angular/forms';

// Firebase Modules
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
// import { AngularFirestoreModule } from 'angularfire2/firestore';
// import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';

// Router Module
import { AppRoutingModule } from './/app-routing.module';

// Toaster for Alert Messages
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

// NGX Pagination
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent,
    AddInvItemComponent,
    InventoryListComponent,
    EditInvItemComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase), // Main Angular fire module
    AngularFireDatabaseModule,  // Firebase database module
    ReactiveFormsModule,        // Reactive forms module
    AppRoutingModule,           // Main routing module
    BrowserAnimationsModule,    // Required animations module for Toastr
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    NgxPaginationModule  // NGX pagination module

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
