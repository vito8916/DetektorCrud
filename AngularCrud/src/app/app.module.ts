import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CreateItemComponent } from './create-item/create-item.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatCheckboxModule,
  MatCardModule,
  MatToolbarModule,
  MatTableModule,
  MatDialogModule,
  MatSnackBarModule,
  MatBottomSheetModule,
  MatSortModule,
} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { ListItemComponent, ConfirmDialog } from './list-item/list-item.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiServiceService } from './api-service.service';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    CreateItemComponent,
    ListItemComponent,
    ConfirmDialog
  ],
  entryComponents: [ListItemComponent, CreateItemComponent, ConfirmDialog],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatTableModule,
    MatToolbarModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    FormsModule,
    MatSnackBarModule,
    MatBottomSheetModule,
    MatSortModule
  ],
  providers: [ApiServiceService],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
