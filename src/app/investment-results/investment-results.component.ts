import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {

  //we can use input function or @Input deorator
  //investmentResults= input<>(); here <> are used to declare type
  @Input() investmentResults?:{ //this cause error cause it was not intialised so let use ? to let it be undefined
    year: number,
        interest: number,
        valueEndOfYear: number,
        annualInvestment: number,
        totalInterest: number,
        totalAmountInvested: number,
  }[]; //we are calling it as array beacuse the output will be year with full of obj as year increase

}
