import { Component } from '@angular/core';
import { DashboardComponent } from './dashboard';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ DashboardComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Projeto 6 - Dashboard';
}
