import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountServiceService } from '../core/services/account-service/account-service.service';
import { Account } from '../core/models/account';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public account: Account = new Account();

  constructor(
    private accountService: AccountServiceService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  public login() {
    this.accountService.login(this.account);
    this.router.navigate(['/']);
  }
}
