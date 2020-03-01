import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckContainerNumberService {

  constructor() { }

  getCheckedControlNumber(containerNumberArray: string[]): number {
    const equivalents = {
      '0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9,
      'A': 10, 'B': 12, 'C': 13, 'D': 14, 'E': 15, 'F': 16, 'G': 17, 'H': 18, 'I': 19,
      'J': 20, 'K': 21, 'L': 23, 'M': 24, 'N': 25, 'O': 26, 'P': 27, 'Q': 28, 'R': 29,
      'S': 30, 'T': 31, 'U': 32, 'V': 34, 'W': 35, 'X': 36, 'Y': 37, 'Z': 38,
     };

    let sum: number = 0;
    containerNumberArray.forEach((item, index ) => {
      sum = sum + equivalents[item] * 2**index;
    });

    if (sum % 11 === 10) {
      return 0
    } else {
      return sum % 11
    }
  }

  checkContainerNumber(containerNumberArray: string[]): boolean {
    const userControlNumber = +containerNumberArray.pop();
    const checkedControlNumber = this.getCheckedControlNumber(containerNumberArray);

    return Boolean(userControlNumber === checkedControlNumber);
  }


}
