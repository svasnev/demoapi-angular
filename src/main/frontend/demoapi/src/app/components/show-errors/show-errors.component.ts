import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, AbstractControlDirective} from "@angular/forms";

@Component({
  selector: 'app-show-errors',
  template: '<ul *ngIf="shouldShowErrors()" class="list-group"> ' +
  '<li style="color: red" class="str" *ngFor="let error of listOfErrors()">{{error}}</li> ' +
  '</ul>'
})
export class ShowErrorsComponent implements OnInit {

  ngOnInit(): void {
  }

  @Input()
  private control: AbstractControlDirective | AbstractControl;

  private static readonly errorMessages = {
    'required': () => 'This field is required',
    'pattern': (params) => 'Pattern is invalid',
    'email': () => 'Email is invalid',
      'min': (params) => 'Value should be more or equal ' + params.min,
      'withdrawAmountInvalid': () => 'Amount after withdraw should be more than 0'
  };

  shouldShowErrors(): boolean {
    return this.control &&
      this.control.errors &&
      (this.control.dirty || this.control.touched);
  }

  listOfErrors(): string[] {
    return Object.keys(this.control.errors)
      .map(field => this.getMessage(field, this.control.errors[field]));
  }

  private getMessage(type: string, params: any) {
    return ShowErrorsComponent.errorMessages[type](params);
  }

}
