import {Component, Input} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NbDialogRef} from "@nebular/theme";
import {StarRatingComponent} from "ng-starrating";

@Component({
  selector: 'app-dialog-drink-review',
  templateUrl: './dialog-drink-review.component.html',
  styleUrls: ['./dialog-drink-review.component.css']
})
export class DialogDrinkReviewComponent {
  @Input() drinkName?: string;
  @Input() degustationDate?: Date;
  @Input() ratingFromUser: number = 0;
  @Input() review?: string;

  form: FormGroup;

  constructor(
    protected dialogRef: NbDialogRef<DialogDrinkReviewComponent | undefined | string | Date>,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      degustationDate: [new Date(), Validators.required],
      review: [''],
    });
  }

  ngOnInit() {
    this.form.patchValue({
      degustationDate: this.degustationDate,
      review: this.review,
    });
  }

  save() {
    this.dialogRef.close({
      ...this.form.value,
      ratingFromUser: this.ratingFromUser,
    });
  }

  close() {
    this.dialogRef.close();
  }

  onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
    this.ratingFromUser = $event.newValue;
  }
}
