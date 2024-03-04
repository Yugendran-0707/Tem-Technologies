import { Component } from '@angular/core';
import { BalancedSubstringService } from '../balanced-substring.service';

@Component({
  selector: 'cf-substring',
  templateUrl: './substring.component.html',
  styleUrls: ['./substring.component.scss']
})
export class SubstringComponent {
  inputString: string = '';
  result: string[] = [];

  constructor(private balancedSubstringService: BalancedSubstringService) {}

  calculateBalancedSubstrings(): void {
    this.result = this.balancedSubstringService.getBalancedSubstrings(this.inputString);
  }
}
