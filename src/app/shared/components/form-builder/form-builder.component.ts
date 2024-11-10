import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilderService } from '../../services/form-builder.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent {

  form: FormGroup;
  fields: any[] = [];

  constructor(private formFieldService: FormBuilderService, private snackBar: MatSnackBar) {
    this.form = new FormGroup({});
  }

  addField(type: string) {
    const fieldConfig = this.formFieldService.getField(type);
    if (fieldConfig) {
      const uniqueId = `${type}${this.fields.filter(f => f.type === type).length + 1}`;
      const controlName = `control_${uniqueId}`;
      this.fields.push({ ...fieldConfig, controlName, type });
      this.form.addControl(controlName, fieldConfig.control);
    }
  }

  removeField(index: number) {
    const controlName = this.fields[index].controlName;
    this.form.removeControl(controlName);
    this.fields.splice(index, 1);
    this.snackBar.open('Field removed successfully !!!', 'Close', {
      duration: 3000,
      panelClass: ['custom-snackbar']
    });
  }

  setCheckboxValue(controlName: string, value: string) {
    this.form.get(controlName)?.setValue(value);
  }

  onSubmit() {
    console.log('Form Submitted:', this.form.value);
    this.snackBar.open('Form submitted successfully !!!', 'Close', {
      duration: 3000,
      panelClass: ['custom-snackbar']
    });
    this.form.reset();
  }

}
