import { Component } from '@angular/core';
import { RouterOutlet,RouterModule } from '@angular/router';
@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [RouterModule,RouterOutlet],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.scss'
})
export class CustomerComponent {

}
