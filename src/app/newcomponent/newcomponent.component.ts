import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { InputValidator } from '../input-validation';

@Component({
  selector: 'app-newcomponent',
  imports: [CommonModule],
  templateUrl: './newcomponent.component.html',
  styleUrl: './newcomponent.component.css'
})
export class NewcomponentComponent { userInput: string = '';
  isValid: boolean = true;
  submissionMessage: string = '';

  onInputChange(event: any): void {
    this.userInput = event.target.value;

    this.isValid = InputValidator.isValidInput(this.userInput);
  }

  onSubmit(): void {
    if (this.isValid) {
      this.submissionMessage = 'Input submitted successfully!';
    }}}