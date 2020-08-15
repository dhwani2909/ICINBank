import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../account.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private acc:AccountService) { }

  primary = {
    number: 0,
    id: 1,
    balance: 0
  }
  savings  = {
    number: 0,
    id: 1,
    balance: 0
  }
  ngOnInit(): void {
    this.acc.getPrimaryBalance().subscribe(
      (resp) => {
        console.log(resp);
        this.primary = resp
       },
      (err) => { console.log(err) }
    )

    this.acc.getSavingsBalance().subscribe(
      (resp) => {
        console.log(resp);
        this.savings = resp
       },
      (err) => { console.log(err) }
    )
  }


}