import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FibonacciServiceService {

  private memoizationCache: { [key: number]: number } = {};

  getFibonacciValue(position: number): number {
    if (position <= 1) {
      return position;
    }

    if (this.memoizationCache[position]) {
      return this.memoizationCache[position];
    }

    this.memoizationCache[position] =
      this.getFibonacciValue(position - 1) + this.getFibonacciValue(position - 2);

    return this.memoizationCache[position];
  }
}
