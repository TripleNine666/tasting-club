import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NbDialogRef} from "@nebular/theme";
import {UserGroup} from "../../shared/interfaces/IUserGroup.interface";
import {ImagePickerConf} from "ngp-image-picker";

@Component({
  selector: 'app-create-group-dialog',
  templateUrl: './create-group-dialog.component.html',
  styleUrls: ['./create-group-dialog.component.css']
})
export class CreateGroupDialogComponent {
  groupForm?: FormGroup;
  photos: string[] = [];


  config1: ImagePickerConf = {
    borderRadius: '16px',
    language: 'en',
    width: '100px',
    height: '100px',
  };

  constructor(private fb: FormBuilder, private dialogRef: NbDialogRef<CreateGroupDialogComponent>) { }

  ngOnInit(): void {
    this.initializeGroupForm();
  }

  initializeGroupForm() {
    this.groupForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      accessType: ['', Validators.required],
    });
  }

  createGroup() {
    if (this.groupForm!.valid) {
      this.dialogRef.close(
        {
          ...this.groupForm!.value,
          photos: this.photos,
        } as UserGroup
      );
    }
  }

  close() {
    this.dialogRef.close();
  }

  getStatusByFormFieldValid(formField: any) {
    return formField.touched && formField.invalid ? 'danger' : 'basic';
  }

  onImageChanged(dataUri: string) {
    this.photos = [dataUri];
    console.log(dataUri)
    console.log(this.photos)
  }
}
