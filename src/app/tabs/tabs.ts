import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  standalone: true,
  templateUrl: './tabs.html',
})

export class Tabs {
  activeTab = "Weight";

  changeTab(newTab: string): void {
    this.activeTab = newTab;
  }
}
