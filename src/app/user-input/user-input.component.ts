import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { InvestmentInput } from '../investment-input.model';
@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  @Output() calculatedValue=new EventEmitter<InvestmentInput>();

  inputIntialInvestment='0';
  inputAnnualInvestment='0';
  inputDuration='10';
  inputExpectedInvestment='5';

  onSubmit()
  {
    this.calculatedValue.emit({

      initialInvestment: +this.inputIntialInvestment,
    annualInvestment:+this.inputAnnualInvestment,
    expectedReturn:+this.inputExpectedInvestment,
    duration:+this.inputDuration,  /* We have added + before to convert string to no */

    })
    this.inputAnnualInvestment='0';
    this.inputDuration='0';
    this.inputIntialInvestment='0';
    this.inputExpectedInvestment='0';
    

  }

}
