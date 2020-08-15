import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../account.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css', '../base/base.component.css']
})
export class TransferComponent implements OnInit {

  constructor(private acc:AccountService) { }
  self = false;
  other = false;
  selection = ''
  errMsg = ''
  err = false
  success = false
  selfTransfer = {
    accountType: '',
    amount: '',
  }

  otherTransfer = {
    type: '',
    amount: '',
    accNo: '',
  }
  selectValue(){
    if(this.selection === "self"){
      this.self = true;
      this.other = false;
    } else {
      this.self = false;
      this.other = true;
    }
  }

  submitSelf(){
    console.log(this.selfTransfer.accountType)
    if(this.selfTransfer.amount !== '' && this.selfTransfer.accountType !== ''){

      this.selfTransfer['userID'] = localStorage.getItem('userId');
      this.acc.sendSelf(this.selfTransfer).subscribe(
        (resp) => {
          this.err = false
          this.success = true
          this.errMsg = resp.headers.get('message')
        },
        (err) => {
          this.err = true
          this.success = false
          this.errMsg = err.headers.get('message')
        }
      )
    }
  }

  numberOnly(event): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  ngOnInit(): void {
  }

}