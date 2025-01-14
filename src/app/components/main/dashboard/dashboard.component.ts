import { Component } from '@angular/core';
import { NavbarComponent } from "../../navbar/navbar.component";
import { RouterLink, RouterOutlet } from '@angular/router';
import { RecentAddedComponent } from "../../recent-added/recent-added.component";
import { FooterComponent } from "../../footer/footer.component";

@Component({
  selector: 'app-dashboard',
  imports: [NavbarComponent, RouterOutlet, RecentAddedComponent, FooterComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
