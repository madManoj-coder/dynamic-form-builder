import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { noop } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormBuilderService {

  constructor(private fb: FormBuilder) {}

  createField(type: string): FormGroup {
    switch(type) {
      case 'text':
        return this.fb.group({
          type: ['text'],
          label: ['Text Field', Validators.required],
          placeholder: ['Enter text'],
          value: ['', Validators.required]
        });

      case 'textarea':
        return this.fb.group({
          type: ['textarea'],
          label: ['Textarea', Validators.required],
          placeholder: ['Enter more text'],
          value: ['', Validators.required]
        });

      case 'dropdown':
        return this.fb.group({
          type: ['dropdown'],
          label: ['Dropdown'],
          options: [['Manoj', 'Kapil', 'Nikhil']],
          value: ['', Validators.required]
        });

      case 'checkbox':
        return this.fb.group({
          // type: ['checkbox'],
          label: ['Checkbox'],
          value: [false, Validators.required]
        });

      case 'radio':
        return this.fb.group({
          type: ['radio'],
          label: ['Radio Button'],
          options: [['Option 1', 'Option 2']],
          value: ['', Validators.required]
        });

      default:
        return this.fb.group({});
    }
  }
}
