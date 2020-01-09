import {ActivePageService} from './active-page/active-page.service';

export class ActivePageChanger {
  PageName: string|null;
  PageService: ActivePageService;
  SetActive() {
  this.PageService.SetActivePageString(this.PageName);
}
UnSetActive() {
  this.PageService.UnSetActivePage();
}
isActive() {
    return this.PageService.ActivePageString === this.PageName;
}
constructor(PageName: string|null , PageService: ActivePageService) {
    this.PageName = PageName;
    this.PageService = PageService;
}
}
