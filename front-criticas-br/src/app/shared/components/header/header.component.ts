import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { ButtonPrimaryComponent } from '../button-primary/button-primary.component';

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, SearchBarComponent, ButtonPrimaryComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
}
