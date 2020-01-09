import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActivePageService {
  ActivePageString: string|null = null;

  constructor() {
  }
SetActivePageString(PageName: string) {
    this.ActivePageString = PageName;
}
UnSetActivePage() {
    this.ActivePageString = null;
}
}
