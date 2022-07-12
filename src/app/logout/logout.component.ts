import { Component, OnInit } from '@angular/core';
import { HardcodedAuthService } from '../services/hardcoded-auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private hardcodedauth_var: HardcodedAuthService) { }

  ngOnInit(): void {
    this.hardcodedauth_var.logout();
  }

}
