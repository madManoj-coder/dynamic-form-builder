import { Injectable } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormBuilderService {

  // constructor(private fb: FormBuilder) { }

  // createField(type: string): FormGroup {
  //   switch(type) {
  //     case 'text':
  //       return this.fb.group({
  //         type: ['text'],
  //         label: ['Text Field', Validators.required],
  //         placeholder: ['Enter text'],
  //         value: ['', Validators.required]
  //       });

  //     case 'textarea':
  //       return this.fb.group({
  //         type: ['textarea'],
  //         label: ['Textarea', Validators.required],
  //         placeholder: ['Enter more text'],
  //         value: ['', Validators.required]
  //       });

  //     case 'dropdown':
  //       return this.fb.group({
  //         type: ['dropdown'],
  //         label: ['Dropdown'],
  //         options: [['Manoj', 'Kapil', 'Nikhil']],
  //         value: ['', Validators.required]
  //       });

  //     case 'checkbox':
  //       return this.fb.group({
  //         // type: ['checkbox'],
  //         label: ['Checkbox'],
  //         value: [false, Validators.required]
  //       });

  //     case 'radio':
  //       return this.fb.group({
  //         type: ['radio'],
  //         label: ['Radio Button'],
  //         options: [['Option 1', 'Option 2']],
  //         value: ['', Validators.required]
  //       });

  //     default:
  //       return this.fb.group({});
  //   }
  // }

  constructor(private fb: FormBuilder) { }

  createField(type: string): FormGroup {
    return this.fb.group({
      type: [type],
      label: ['', Validators.required],
      placeholder: [type === 'checkbox' ? ['', Validators.required] : null],
      options: this.fb.array(this.getDefaultOptions(type) || []),
      value: [type === 'checkbox' ? false : '', this.getValidationRules(type)],
      validations: this.fb.group({
        required: [false],
      })
    });

  }

  private getDefaultOptions(type: string): string[] | null {
    if (type === 'dropdown') return ['Manoj', 'Nikhil', 'Aryan'];
    if (type === 'radio') return ['Yes', 'No'];
    return null;
  }

  private getValidationRules(type: string): any {
    return type === 'checkbox' ? false : '';
  }

  
  
  }
