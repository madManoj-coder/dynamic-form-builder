import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormBuilderService } from '../../services/form-builder.service';
import { SnackBarService } from '../../services/snack-bar.service';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent {

  form: FormGroup;
  fieldTypes: string[] = ['text', 'textarea', 'dropdown', 'checkbox', 'radio'];

  constructor(
    private fb: FormBuilder,
    private snackBarService: SnackBarService,
    private formbuilderService: FormBuilderService
  ) {
    this.form = this.fb.group({
      fields: this.fb.array([])
    });
  }

  ngOnInit(): void { }

  get fields(): FormArray {
    return this.form.get('fields') as FormArray;
  }

  addField(type: string): void {
    const field = this.formbuilderService.createField(type);
    this.fields.push(field);
  }

  removeField(index: number): void {
    this.fields.removeAt(index);
    this.snackBarService.showErrorMessage('field is removed successfully !!!')
  }

  onSubmit(): void {
    if (this.form.valid) {
      console.log(this.form.value);
      this.snackBarService.showSuccessMessage('Form submitted successfully !!!')
      // alert('Form submitted successfully!');
    }
  }
}
