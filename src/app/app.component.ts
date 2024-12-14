import { Component, EventEmitter, Output,signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { isArrayLike } from 'rxjs/internal/util/isArrayLike';
import type { InvestmentInput } from './investment-input.model';
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent]
})
export class AppComponent {
  //Below is implemented without using signals
  /* resultsData?:
  {year: number,
  interest: number,
  valueEndOfYear: number,
  annualInvestment: number,
  totalInterest: number,
  totalAmountInvested: number,
}[]; */
    //We can also use signals by simply modifying resultsData  obj and also bottom returing the results data
    resultsData=signal<
    {year: number,
    interest: number,
    valueEndOfYear: number,
    annualInvestment: number,
    totalInterest: number,
    totalAmountInvested: number}[]|undefined>(undefined);
      //The above clearly stastes that the signal maay have the given type of array data or undefinde value

  /* Now there are two ways to output the calculated value
  1. Through @Outout decorator using eventEMitter
  2.Other Option was to use output() funct if version is abv 17 */

   /* Use angular brac to specify what kind of data is going to be emitted */
          /* Here we are emitting whole data type so inculde all */

  calculateInvestmentResults(
    data:InvestmentInput) 
   /* The above parameters can be in specific order that we have written above when using that function or else declare those as object like
  in curly braces */
 
  {
    /* Now the data was structured so we need to desstructure now by add given line */
    const {initialInvestment,annualInvestment,expectedReturn,duration}=data;
    const annualData = [];
    let investmentValue = initialInvestment;
    
    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }
    // this.resultsData=annualData; not using signal
    //using signal
    this.resultsData.set(annualData);
  }

  
}


