import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    RouterModule,
    CommonModule

  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  public sidebarItems = [
    { label: 'Mantenedor Usuarios', icon: 'label', url: './list' },
    { label: 'Mantenedor propiedades', icon: 'add', url: './new-hero' },
    { label: 'Buscar', icon: 'search', url: './search' },
    { label: 'Informe', icon: 'label', url: './informe' }
  ]

}
