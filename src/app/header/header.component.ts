import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ang-ui-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor() {
  }

  // onSaveData() {
  //     this.dataStorageService.storageRecipes().subscribe(
  //         (response: Response) => {
  //             console.log(response);
  //         }
  //     );
  // }

  // onFetchData() {
  //     this.dataStorageService.getRecipes();
  // }

  // onLogout() {
  //     this.authService.logout();
  // }

  // isAuthenticated() {
  //     return this.authService.isAuthenticated();
  // }
}
