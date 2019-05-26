import {Component, Inject, OnInit} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.scss']
})
export class CreateItemComponent implements OnInit {
  formData = new UserBuilder('', '', '', '', 0)
  isEdit = false
  constructor(
    private api: ApiServiceService,
    public dialogRef: MatDialogRef<CreateItemComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    const element = data.element
    if (element) {
      this.formData = {...element}
      this.isEdit = true
    }
  }
  onNoClick(): void {
    this.dialogRef.close({ created: false });
  }
  createUser(): void {
    if (this.isEdit) {
      this.api.updateUser(this.formData).subscribe(response => {
        if (typeof response === 'number') {
          this.dialogRef.close({ created: true });
        }
      })
    } else {
      this.api.createUser(this.formData).subscribe(response => {
        if (typeof response === 'number') {
          this.dialogRef.close({ created: true });
        }
      })
    }

  }
  ngOnInit() {
  }

}

export class UserBuilder {

  constructor(
    public des_motivo: string,
    public estado: string,
    public tipo: string,
    public motivo?: number,
  ) { }

}
