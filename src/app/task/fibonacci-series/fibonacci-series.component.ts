import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FibonacciServiceService } from '../fibonacci-service.service';

@Component({
  selector: 'cf-fibonacci-series',
  templateUrl: './fibonacci-series.component.html',
  styleUrls: ['./fibonacci-series.component.scss']
})
export class FibonacciSeriesComponent implements OnInit{
  constructor(private fibonacciService: FibonacciServiceService) { }
  position: number | null = null;
  result: number | null = null;
  ngOnInit() {

  }


  calculateFibonacci(): void {
    if (this.position !== null && this.position >= 0) {
      this.result = this.fibonacciService.getFibonacciValue(this.position);
    }
  }

}
