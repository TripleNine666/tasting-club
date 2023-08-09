import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NbDialogRef} from "@nebular/theme";
import {UserGroup} from "../../shared/interfaces/IUserGroup.interface";

@Component({
  selector: 'app-create-group-dialog',
  templateUrl: './create-group-dialog.component.html',
  styleUrls: ['./create-group-dialog.component.css']
})
export class CreateGroupDialogComponent {
  groupForm?: FormGroup;

  constructor(private fb: FormBuilder, private dialogRef: NbDialogRef<CreateGroupDialogComponent>) { }

  ngOnInit(): void {
    this.initializeGroupForm();
  }

  initializeGroupForm() {
    this.groupForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      accessType: ['', Validators.required],
      // photo here
      photo: [[]],
    });
  }

  createGroup() {
    if (this.groupForm!.valid) {
      this.dialogRef.close(this.groupForm!.value as UserGroup);
    }
  }

  close() {
    this.dialogRef.close();
  }

  getStatusByFormFieldValid(formField: any) {
    return formField.touched && formField.invalid ? 'danger' : 'basic';
  }
}
