import { Injectable } from '@angular/core';

@Injectable({
     providedIn: 'root',
})
export class SidebarService {
     public isOpen = false;

     handleToggleMenu() {
          this.isOpen = !this.isOpen;
     }
}
