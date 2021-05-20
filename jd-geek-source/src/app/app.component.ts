import { Component, HostListener, OnInit } from "@angular/core";
import { MOBILE_SCREEN_THRESHOLD } from "../constants/constants";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [],
})
export class AppComponent implements OnInit {
  title = "jd-geek-source";
  message = "";
  mobileSite = false;

  ngOnInit(): void {
    const mobile = navigator.userAgent.includes("Mobile");

    if (window.innerWidth <= MOBILE_SCREEN_THRESHOLD || mobile) {
      this.mobileSite = true;
    } else {
      this.mobileSite = false;
    }
  }

  @HostListener("window:resize", ["event"])
  onResize(event) {
    if (window.innerWidth <= MOBILE_SCREEN_THRESHOLD) {
      this.mobileSite = true;
    } else {
      this.mobileSite = false;
    }
  }
}
