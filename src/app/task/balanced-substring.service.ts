import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BalancedSubstringService {
  getBalancedSubstrings(S: string): string[] {
    const result: string[] = [];

    // Helper function to check if a substring is balanced
    const isBalanced = (substring: string): boolean => {
      const charCount = new Map<string, number>();

      for (const char of substring) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
      }

      const counts = Array.from(charCount.values());

      return counts.length === 2 && counts[0] === counts[1];
    };

    // Iterate over all possible substrings and find the longest balanced ones
    for (let i = 0; i < S.length; i++) {
      for (let j = i + 2; j <= S.length; j++) {
        const substring = S.substring(i, j);

        if (isBalanced(substring) && substring.length > 1) {
          // If the substring is balanced and longer than 1, add it to the result
          result.push(substring);
        }
      }
    }

    // Find the longest balanced substrings
    const maxLength = Math.max(...result.map((substring) => substring.length));
    return result.filter((substring) => substring.length === maxLength);
  }
}
