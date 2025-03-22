import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewcomponentComponent } from './newcomponent/newcomponent.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NewcomponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myapp';
}
