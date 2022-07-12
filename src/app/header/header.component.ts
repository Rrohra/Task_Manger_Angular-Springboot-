import { Component, OnInit } from '@angular/core';
import { HardcodedAuthService } from '../services/hardcoded-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public hardcodedauth_var : HardcodedAuthService) { }

  ngOnInit(): void {
  }

}
