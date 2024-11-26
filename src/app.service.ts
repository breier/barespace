import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  // Look for the two numbers that sum up to the target. Move the numbers in the Array
  twoSumTwo(numbers: number[], target: number): number[] {
    if (Array.isArray(numbers) === false) {
      return [];
    }

    for (let key in numbers) {
      const diff = numbers.find((num) => {
        return num + numbers[key] === target;
      });

      if (diff) {
        return [numbers[key], diff];
      }
    }

    return [];
  }

  // A credit card usually contains 16 digits with an (*) asterisk and keeps its last four digits as is.
  // Return the updated string with the first 12 characters replaced with asterisks (*).
  hideCCNumber(ccNum: string): string {
    const ccNumStripped = ccNum.replace(/\D/g, '');
    if (ccNumStripped.length != 16) {
      return 'Invalid credit card number';
    }

    const masked = ccNumStripped.slice(0, 12).replace(/\d/g, '*');
    return masked + ccNumStripped.slice(12);
  }

  // Move all the zeros to the end of the array while maintaining relative order to the non zero elements.
  moveZeroes(nums: number[]): number[] {
    let zeroes = [];
    const result = [];

    if (Array.isArray(nums) === false) {
      return [];
    }

    for (const num of nums) {
      if (num === 0) {
        zeroes.push(num);
        continue;
      }

      result.push(num);
    }

    result.push(...zeroes);

    return result;
  }
}
