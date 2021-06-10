import { FizzBuzzModel } from './../core/models/fizz-buzz.model';
import { applicationConstants } from './../core/constants/application-constants';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fizzbuzz',
  templateUrl: './fizzbuzz.component.html',
  styleUrls: ['./fizzbuzz.component.scss'],
})
export class FizzbuzzComponent implements OnInit {
  public fizzBuzzArray: FizzBuzzModel[] = [];
  public errorMessage: string = '';
  public fizzBuzzInput!: string;
  public fizzBuzzValue!: FizzBuzzModel;

  ngOnInit(): void {
    this.fillFizzArray();
  }

  private fillFizzArray(): void {
    for (let i = 0; i < 100; i++) {
      const element = this.fizzBuzz(i);
      this.fizzBuzzArray.push({ element, isContiguous: this.isContiguous(i) });
    }
  }

  private isContiguous(number: number): boolean {
    if (number === 0) return false;

    const element = this.fizzBuzz(number);
    const nextElement = this.fizzBuzz(number + 1);

    if (
      this.isEqualToFizzOrBuzz(element) &&
      this.isEqualToFizzOrBuzz(nextElement)
    ) {
      return true;
    }

    return false;
  }

  private isEqualToFizzOrBuzz(element: string): boolean {
    const fizz = applicationConstants.fizzText;
    const buzz = applicationConstants.buzzText;
    if (element === fizz || element === buzz) return true;

    return false;
  }

  private fizzBuzz(number: number): string {
    if (number === 0) return number.toString();

    if (number % 3 === 0 && number % 5 === 0) {
      return applicationConstants.fizzBuzzText;
    } else if (number % 3 === 0) {
      return applicationConstants.fizzText;
    } else if (number % 5 === 0) {
      return applicationConstants.buzzText;
    }

    return number.toString();
  }

  public onSubmit(): void {
    if (isNaN(+this.fizzBuzzInput)) {
      this.errorMessage = 'Please enter a valid number';
      return;
    }
    this.errorMessage = '';
    this.fizzBuzzValue = {
      element: this.fizzBuzz(+this.fizzBuzzInput),
      isContiguous: this.isContiguous(+this.fizzBuzzInput),
    };
  }
}
