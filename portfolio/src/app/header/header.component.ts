import { Component } from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  imports: [
    NgIf
  ],
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  dropdownOpen = false;

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

}
