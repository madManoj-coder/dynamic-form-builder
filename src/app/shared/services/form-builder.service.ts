import { Injectable } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormBuilderService {

  getField(type: string) {
    switch (type) {
      case 'text':
        return { control: new FormControl('', Validators.required), label: 'Text Field', placeholder: 'Enter text' };
      case 'textarea':
        return { control: new FormControl('', Validators.required), label: 'Textarea', placeholder: 'Enter description' };
      case 'dropdown':
        return { control: new FormControl('', Validators.required), label: 'Dropdown', options: ['Manoj', 'Shanty'], placeholder: 'Select option' };
      case 'checkbox':
        return { control: new FormControl('', Validators.required), label: 'Checkbox', options: ['Yes', 'No'] };
      case 'radio':
        return { control: new FormControl('', Validators.required), label: 'Radio Button', options: ['Right', 'Wrong'] };
      default:
        return null;
    }
  }

  }
