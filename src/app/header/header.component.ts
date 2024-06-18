import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  goToHome() {
    this.router.navigate(['home'])
  }

  logout() {
    this.router.navigate(['login'])
  }
}

