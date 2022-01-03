import { Component, ViewChild } from "@angular/core";
import { MatSidenav } from "@angular/material/sidenav";
import { BreakpointObserver } from "@angular/cdk/layout";
@Component({
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  constructor(private observer: BreakpointObserver) {}

  ngAfterViewInit() {
    this.observer.observe(["(max-width: 2000px)"]).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = "over";
        this.sidenav.close();
      } else {
        this.sidenav.mode = "side";
        this.sidenav.open();
      }
    });
  }
}
