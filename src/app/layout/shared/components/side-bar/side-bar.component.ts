import { Component, OnInit } from '@angular/core';

import { faFolderPlus, faFolderMinus, faStore, faBeer, faHome } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  faHome = faHome;
  faStore = faStore;
  faBeer = faBeer;
  faFolderPlus = faFolderPlus;
  faFolderMinus = faFolderMinus;

  public isCollapsed = false;

  constructor() { }

  ngOnInit() {
  }

}
