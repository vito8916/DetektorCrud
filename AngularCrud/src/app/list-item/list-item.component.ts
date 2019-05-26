import {Component, OnInit, Inject, ViewChild} from '@angular/core';
import {
  MatTableDataSource,
  MatDialog,
  MatSnackBar,
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatSort
} from '@angular/material';
import { ApiServiceService, User } from '../api-service.service';
import { CreateItemComponent } from '../create-item/create-item.component';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {


  constructor(private api: ApiServiceService, private dialog: MatDialog, private snackBar: MatSnackBar) { }
  displayedColumns: string[] = ['motivo', 'des_motivo', 'estado', 'tipo', 'actions'];
  dataSource;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {
    this.fetchUsers()
  }
  fetchUsers() {
    this.api.getUsers().subscribe((data: User[]) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
    })
  }

  // CRUD Functions

  addUser(): void {
    const dialogRef = this.dialog.open(CreateItemComponent, {
      width: '450px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.created) {
        this.snackBar.open('Registro creado', 'Listo', {
          duration: 2000,
        });
        this.fetchUsers()
      }
    });
  }

  editUser(element: User): void {
    const dialogRef = this.dialog.open(CreateItemComponent, {
      width: '450px',
      data: {element}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.created) {
        this.snackBar.open('Registro editado', 'Listo', {
          duration: 2000,
        });
        this.fetchUsers()
      }
    });
  }

  deleteUser(element: User): void {
    const dialogRef = this.dialog.open(ConfirmDialog, {
      width: '300px',
      data: element
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.created) {
        this.snackBar.open('Registro borrado', 'Listo', {
          duration: 2000,
        });
        this.fetchUsers()
      }
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

@Component({
  selector: 'confirm-dialog',
  templateUrl: 'confirm-dialog.html',
})
export class ConfirmDialog {

  constructor(
    private api: ApiServiceService,
    public dialogRef: MatDialogRef<ConfirmDialog>,
    @Inject(MAT_DIALOG_DATA) public data: User) { }

  onNoClick(): void {
    this.dialogRef.close({created: false});
  }

  deleteUser(): void {
    this.api.deleteUser(this.data.motivo).subscribe(result => {
      if(typeof result === 'number') {
        this.dialogRef.close({created: true});
      }
    })
  }

}
